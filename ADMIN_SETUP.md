# Admin System Setup Guide

Your website now has a secure admin login system for managing blog posts. This guide will help you set it up.

## Features

- Secure login with encrypted passwords (bcrypt)
- JWT-based session management
- HTTP-only cookies for security
- Complete blog post management (Create, Read, Update, Delete)
- Markdown editor with frontmatter support
- Protected admin routes

## Setup Instructions

### 1. Generate Admin Password Hash

Run the password hash generator script:

```bash
node scripts/generate-admin-hash.js
```

Follow the prompts to generate your password hash.

### 2. Configure Environment Variables

Create or update your `.env.local` file with the following variables:

```env
# Admin credentials
ADMIN_EMAIL=your-email@example.com
ADMIN_PASSWORD_HASH=<paste-the-hash-from-step-1>

# JWT secret for session encryption (use a long random string)
JWT_SECRET=<generate-a-random-secret-key>

# Existing variables
RESEND_API_KEY=your-resend-api-key
```

**Important:**
- Replace `your-email@example.com` with your actual email address
- Generate a strong random string for `JWT_SECRET` (at least 32 characters)
- Never commit `.env.local` to version control

### 3. Generate JWT Secret

You can generate a secure random secret using:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### 4. Restart Development Server

After setting up environment variables, restart your development server:

```bash
npm run dev
```

## Accessing the Admin Panel

Once configured, access the admin panel at:

```
http://localhost:3000/admin
```

Or in production:

```
https://yourdomain.com/admin
```

## Usage

### Logging In

1. Navigate to `/admin`
2. Enter your admin email and password
3. You'll be redirected to the admin dashboard

### Managing Blog Posts

**Create a New Post:**
1. Click "Create New Post"
2. Fill in the form:
   - **Slug:** URL-friendly identifier (e.g., `my-first-post`)
   - **Title:** Post title
   - **Date:** Publication date (optional)
   - **Author:** Author name (optional)
   - **Description:** Short description (optional)
   - **Cover Image:** Image URL (optional)
   - **Content:** Markdown content (required)
3. Click "Create Post"

**Edit a Post:**
1. Click "Edit" on any post
2. Modify the fields
3. Click "Update Post"

**Delete a Post:**
1. Click "Delete" on any post
2. Confirm the deletion

### Logging Out

Click the "Logout" button in the top navigation bar.

## Security Features

1. **Password Encryption:** Passwords are hashed using bcrypt with 10 salt rounds
2. **HTTP-Only Cookies:** Session tokens are stored in HTTP-only cookies, preventing XSS attacks
3. **JWT Sessions:** Sessions expire after 7 days
4. **Protected Routes:** All admin API endpoints verify authentication
5. **Secure in Production:** Cookies use the `secure` flag in production (HTTPS only)

## File Structure

```
/app
  /admin
    /page.tsx              # Admin UI (login + dashboard)
  /api
    /admin
      /login/route.ts      # Login endpoint
      /logout/route.ts     # Logout endpoint
      /verify/route.ts     # Session verification
      /posts
        /route.ts          # GET all posts, POST create post
        /[slug]/route.ts   # GET, PUT, DELETE individual posts

/lib
  /auth.ts                 # Authentication utilities

/scripts
  /generate-admin-hash.js  # Password hash generator

/content
  /blog                    # Blog post markdown files
```

## API Endpoints

All admin endpoints require authentication via session cookie.

### Authentication
- `POST /api/admin/login` - Login
- `POST /api/admin/logout` - Logout
- `GET /api/admin/verify` - Verify session

### Blog Posts
- `GET /api/admin/posts` - List all posts
- `POST /api/admin/posts` - Create new post
- `GET /api/admin/posts/[slug]` - Get single post
- `PUT /api/admin/posts/[slug]` - Update post
- `DELETE /api/admin/posts/[slug]` - Delete post

## Troubleshooting

### Cannot Log In

1. Verify your `.env.local` has all required variables
2. Check that `ADMIN_EMAIL` matches your login email exactly
3. Regenerate password hash if needed
4. Restart the development server

### Session Expires Immediately

1. Check that `JWT_SECRET` is set in `.env.local`
2. Clear browser cookies and try again
3. Check browser console for errors

### Posts Not Saving

1. Verify the `/content/blog/` directory exists
2. Check file permissions
3. Look for errors in the terminal/console

## Production Deployment

### Environment Variables

Make sure to set these environment variables in your hosting platform:

- `ADMIN_EMAIL`
- `ADMIN_PASSWORD_HASH`
- `JWT_SECRET`

### Security Recommendations

1. Use HTTPS in production (cookies will be marked `secure`)
2. Use a strong, unique password
3. Rotate your `JWT_SECRET` periodically
4. Consider adding rate limiting to login endpoint
5. Monitor login attempts
6. Keep dependencies updated

## Technology Stack

- **Authentication:** bcryptjs (password hashing) + jose (JWT)
- **Session Storage:** HTTP-only cookies
- **Backend:** Next.js API routes
- **Frontend:** React + TypeScript
- **Data Storage:** File-based markdown files

## Future Enhancements

Consider these optional improvements:

1. **Multi-user support:** Add a database for multiple admin users
2. **2FA:** Two-factor authentication
3. **Image upload:** Direct image upload functionality
4. **Markdown preview:** Live preview while editing
5. **Version control:** Git integration for post history
6. **Role-based access:** Different permission levels
7. **Rate limiting:** Prevent brute force attacks
8. **Email notifications:** Alert on new posts

## Support

If you encounter issues:

1. Check the browser console for errors
2. Check the terminal for server errors
3. Verify all environment variables are set correctly
4. Ensure you're using Node.js 18 or higher

---

**Important:** Keep your `.env.local` file secure and never commit it to version control. The `.gitignore` file should already exclude it.
