import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  // Initialize Neon connection inside the handler
  const sql = neon(process.env.DATABASE_URL!);
  try {
    const body = await request.json();
    const { name, email } = body;

    // Validate input
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Get client IP and user agent for tracking (optional)
    const ip = request.headers.get('x-forwarded-for') ||
               request.headers.get('x-real-ip') ||
               'unknown';
    const userAgent = request.headers.get('user-agent') || 'unknown';

    try {
      // Check if email already exists
      const existingEntry = await sql`
        SELECT email FROM waitlist WHERE email = ${email.toLowerCase()}
      `;

      if (existingEntry.length > 0) {
        return NextResponse.json(
          { error: 'You\'re already on the waitlist silly!' },
          { status: 409 }
        );
      }

      // Insert into database
      await sql`
        INSERT INTO waitlist (name, email, ip_address, user_agent)
        VALUES (${name}, ${email.toLowerCase()}, ${ip}, ${userAgent})
      `;
    } catch (dbError: unknown) {
      console.error('Database error:', dbError);
      const errorMessage = dbError instanceof Error ? dbError.message : 'Unknown database error';

      // Handle duplicate email error (constraint violation)
      if (errorMessage.includes('unique') || errorMessage.includes('duplicate')) {
        return NextResponse.json(
          { error: 'This email is already on the waitlist' },
          { status: 409 }
        );
      }

      return NextResponse.json(
        { error: 'Failed to save to database. Please try again later.' },
        { status: 500 }
      );
    }

    // Send confirmation email to user
    try {
      await resend.emails.send({
        from: 'Interior Vision <onboarding@resend.dev>', // Replace with your verified domain
        to: [email],
        subject: 'Welcome to Interior Vision Waitlist!',
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
                .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
                .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #666; }
                .highlight { color: #667eea; font-weight: bold; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>Welcome to Interior Vision!</h1>
                </div>
                <div class="content">
                  <h2>Thank you for joining our waitlist, ${name}!</h2>
                  <p>We're thrilled to have you on board. Interior Vision is revolutionizing the way professionals spec and manage interior design projects.</p>

                  <h3>What's Next?</h3>
                  <ul>
                    <li>We'll keep you updated on our development progress</li>
                    <li>You'll be among the first to know when we launch</li>
                    <li>You'll get early access to exclusive features</li>
                  </ul>

                  <p>Stay tuned for exciting updates!</p>

                  <p>Best regards,<br/><span class="highlight">The Interior Vision Team</span></p>
                </div>
                <div class="footer">
                  <p>You're receiving this email because you signed up for the Interior Vision waitlist.</p>
                  <p>Interior Vision - Spec Smarter, Not Harder</p>
                </div>
              </div>
            </body>
          </html>
        `,
      });
    } catch (emailError) {
      console.error('Email error:', emailError);
      // Don't fail the request if email fails - data is already saved
    }

    // Send notification to admin
    const adminEmail = process.env.ADMIN_EMAIL;
    if (adminEmail) {
      try {
        await resend.emails.send({
          from: 'Interior Vision <onboarding@resend.dev>',
          to: [adminEmail],
          subject: 'New Waitlist Signup - Interior Vision',
          html: `
            <!DOCTYPE html>
            <html>
              <body style="font-family: Arial, sans-serif;">
                <h2>New Waitlist Signup!</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Signed up at:</strong> ${new Date().toLocaleString()}</p>
                <p><strong>IP Address:</strong> ${ip}</p>
              </body>
            </html>
          `,
        });
      } catch (adminEmailError) {
        console.error('Admin email error:', adminEmailError);
        // Don't fail the request if admin email fails
      }
    }

    console.log('New waitlist signup:', { name, email });

    return NextResponse.json(
      { message: 'Successfully joined waitlist' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing waitlist signup:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
