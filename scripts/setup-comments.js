const { neon } = require('@neondatabase/serverless');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });

async function setupCommentsTable() {
  try {
    const sql = neon(process.env.DATABASE_URL);

    console.log('Creating comments table...');

    // Create the table using tagged template syntax
    await sql`
      CREATE TABLE IF NOT EXISTS comments (
        id SERIAL PRIMARY KEY,
        comment TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    console.log('✓ Comments table created successfully!');

    // Create index
    await sql`CREATE INDEX IF NOT EXISTS idx_comments_created_at ON comments(created_at DESC)`;
    console.log('✓ Index created successfully!');

    // Test the connection by selecting from the table
    const result = await sql`SELECT COUNT(*) as count FROM comments`;
    console.log(`✓ Table verified. Current comment count: ${result[0].count}`);

    process.exit(0);
  } catch (error) {
    console.error('Error setting up comments table:', error);
    process.exit(1);
  }
}

setupCommentsTable();
