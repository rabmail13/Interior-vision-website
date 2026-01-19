const { neon } = require('@neondatabase/serverless');
require('dotenv').config({ path: '.env.local' });

async function setupWaitlistTable() {
  try {
    const sql = neon(process.env.DATABASE_URL);

    console.log('Creating waitlist table...');

    // Create the table
    await sql`
      CREATE TABLE IF NOT EXISTS waitlist (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        created_at TIMESTAMP DEFAULT NOW(),
        ip_address VARCHAR(45),
        user_agent TEXT
      )
    `;

    console.log('✓ Waitlist table created successfully!');

    // Create index on email for faster duplicate checking
    await sql`CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email)`;
    console.log('✓ Email index created!');

    // Create index on created_at for sorting
    await sql`CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON waitlist(created_at DESC)`;
    console.log('✓ Created_at index created!');

    // Test the connection by selecting from the table
    const result = await sql`SELECT COUNT(*) as count FROM waitlist`;
    console.log(`✓ Table verified. Current waitlist count: ${result[0].count}`);

    process.exit(0);
  } catch (error) {
    console.error('Error setting up waitlist table:', error);
    process.exit(1);
  }
}

setupWaitlistTable();
