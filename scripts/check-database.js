const { neon } = require('@neondatabase/serverless');
require('dotenv').config({ path: '.env.local' });

async function checkDatabase() {
  try {
    const sql = neon(process.env.DATABASE_URL);

    console.log('Checking database connection...');
    console.log('DATABASE_URL:', process.env.DATABASE_URL ? 'Set' : 'Not set');

    // List all tables in the database
    const tables = await sql`
      SELECT table_name
      FROM information_schema.tables
      WHERE table_schema = 'public'
      ORDER BY table_name
    `;

    console.log('\n=== Tables in database ===');
    if (tables.length === 0) {
      console.log('No tables found in the database!');
    } else {
      tables.forEach(table => {
        console.log(`- ${table.table_name}`);
      });
    }

    // Try to check if waitlist table exists specifically
    const waitlistExists = await sql`
      SELECT EXISTS (
        SELECT FROM information_schema.tables
        WHERE table_schema = 'public'
        AND table_name = 'waitlist'
      )
    `;

    console.log('\n=== Waitlist table check ===');
    console.log('Waitlist table exists:', waitlistExists[0].exists);

    if (waitlistExists[0].exists) {
      const count = await sql`SELECT COUNT(*) as count FROM waitlist`;
      console.log('Waitlist entries:', count[0].count);

      const entries = await sql`SELECT * FROM waitlist ORDER BY created_at DESC LIMIT 5`;
      console.log('\nRecent entries:');
      entries.forEach(entry => {
        console.log(`- ${entry.name} (${entry.email}) - ${entry.created_at}`);
      });
    }

  } catch (error) {
    console.error('Error checking database:', error);
    console.error('Error details:', error.message);
  }
}

checkDatabase();
