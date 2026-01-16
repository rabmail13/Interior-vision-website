// import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

// const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
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

    // TODO: Implement email notification when ready
    // Send email notification
    // const { data, error } = await resend.emails.send({
    //   from: 'Waitlist <onboarding@resend.dev>', // Replace with your verified domain
    //   to: [email], // Send confirmation to the user
    //   subject: 'Welcome to the Waitlist!',
    //   html: `
    //     <h2>Thank you for joining our waitlist, ${name}!</h2>
    //     <p>We're excited to have you on board. We'll keep you updated on our progress and let you know as soon as we launch.</p>
    //     <p>Best regards,<br/>The Team</p>
    //   `,
    // });

    // if (error) {
    //   console.error('Resend error:', error);
    //   return NextResponse.json(
    //     { error: 'Failed to send email' },
    //     { status: 500 }
    //   );
    // }

    // Optional: Send notification to yourself about new signup
    // await resend.emails.send({
    //   from: 'Waitlist <onboarding@resend.dev>', // Replace with your verified domain
    //   to: ['your-email@example.com'], // Replace with your email
    //   subject: 'New Waitlist Signup',
    //   html: `
    //     <h2>New waitlist signup!</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //   `,
    // });

    // For now, just log the signup and return success
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
