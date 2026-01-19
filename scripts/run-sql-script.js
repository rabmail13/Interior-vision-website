const { sql } = require('@vercel/postgres');
const fs = require('fs');
const path = require('path');

async function runSqlScript() {
  try {
    const sqlScript = fs.readFileSync(
      path.join(__dirname, 'create-waitlist-table.sql'),
      'utf8'
    );

    console.log('Running SQL script...');
    await sql.query(sqlScript);
    console.log('✓ Waitlist table created successfully!');
  } catch (error) {
    console.error('Error running SQL script:', error);
    process.exit(1);
  }
}

runSqlScript();
