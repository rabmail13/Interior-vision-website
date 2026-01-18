const bcrypt = require('bcryptjs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('\n=== Admin Password Hash Generator ===\n');
console.log('This script will generate a bcrypt hash for your admin password.');
console.log('Add the generated hash to your .env.local file.\n');

rl.question('Enter your desired admin password: ', async (password) => {
  if (!password || password.length < 8) {
    console.error('\nError: Password must be at least 8 characters long.');
    rl.close();
    process.exit(1);
  }

  try {
    const hash = await bcrypt.hash(password, 10);

    console.log('\n✓ Password hash generated successfully!\n');
    console.log('Add these lines to your .env.local file:\n');
    console.log('ADMIN_EMAIL=your-email@example.com');
    console.log(`ADMIN_PASSWORD_HASH=${hash}`);
    console.log('JWT_SECRET=your-random-secret-key-here\n');
    console.log('Make sure to replace "your-email@example.com" with your actual email.');
    console.log('Generate a random JWT_SECRET (a long random string).\n');
  } catch (error) {
    console.error('Error generating hash:', error);
  }

  rl.close();
});
