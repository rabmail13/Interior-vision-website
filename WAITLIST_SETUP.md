# Waitlist Setup Instructions

The waitlist implementation is now complete with database persistence and email notifications. Follow these steps to get it running.

## What's Been Implemented

- Database persistence with PostgreSQL (Vercel Postgres)
- Email confirmation to users via Resend
- Admin notification emails
- Duplicate email prevention
- Enhanced validation
- IP address and user agent tracking
- Professional email templates with branding

## Setup Steps

### 1. Create Vercel Postgres Database

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Navigate to the **Storage** tab
3. Click **Create Database**
4. Select **Postgres**
5. Choose a name (e.g., "interior-vision-db")
6. Select a region (choose closest to your users)
7. Click **Create**

### 2. Get Database Connection Strings

After creating the database:

1. Go to the **Settings** tab of your database
2. Under **Connection String**, click **Show secret**
3. Copy all the environment variables shown
4. Paste them into your `.env.local` file (they're already prepared, just need values)

The variables you need:
```env
POSTGRES_URL="postgres://default:xxxxx@xxxxx.postgres.vercel-storage.com:5432/verceldb"
POSTGRES_PRISMA_URL="postgres://default:xxxxx@xxxxx.postgres.vercel-storage.com:5432/verceldb?pgbouncer=true&connect_timeout=15"
POSTGRES_URL_NON_POOLING="postgres://default:xxxxx@xxxxx.postgres.vercel-storage.com:5432/verceldb"
POSTGRES_USER="default"
POSTGRES_HOST="xxxxx.postgres.vercel-storage.com"
POSTGRES_PASSWORD="xxxxx"
POSTGRES_DATABASE="verceldb"
```

### 3. Create the Database Table

#### Option A: Using Vercel Dashboard (Recommended)

1. In your Vercel Postgres dashboard, go to the **Query** tab
2. Copy the contents of `scripts/create-waitlist-table.sql`
3. Paste into the query editor
4. Click **Run Query**

#### Option B: Using Vercel CLI

```bash
# Install Vercel CLI if you haven't
npm i -g vercel

# Login to Vercel
vercel login

# Link your project
vercel link

# Run the SQL script
vercel env pull .env.development.local
psql $POSTGRES_URL -f scripts/create-waitlist-table.sql
```

### 4. Verify Resend Configuration

Your Resend API key is already configured in `.env.local`:
```env
RESEND_API_KEY="re_FGPKb2uy_4dpgFsmQtKtXUh7wjsx2bHuR"
```

**Important:** For production, you should:
1. Add and verify your custom domain in [Resend Dashboard](https://resend.com/domains)
2. Update the `from` field in `app/api/waitlist/route.ts` from:
   ```typescript
   from: 'Interior Vision <onboarding@resend.dev>'
   ```
   to:
   ```typescript
   from: 'Interior Vision <hello@yourdomain.com>'
   ```

### 5. Deploy to Vercel

1. Add the environment variables to your Vercel project:
   ```bash
   vercel env add POSTGRES_URL
   vercel env add POSTGRES_PRISMA_URL
   vercel env add POSTGRES_URL_NON_POOLING
   vercel env add POSTGRES_USER
   vercel env add POSTGRES_HOST
   vercel env add POSTGRES_PASSWORD
   vercel env add POSTGRES_DATABASE
   vercel env add RESEND_API_KEY
   vercel env add ADMIN_EMAIL
   ```

2. Deploy:
   ```bash
   vercel --prod
   ```

## Testing the Waitlist

### Local Testing

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Visit: `http://localhost:3000/waitlist`

3. Test the following scenarios:
   - Valid submission (should receive confirmation email)
   - Duplicate email (should show error message)
   - Invalid email format (should show validation error)
   - Missing fields (should show required field errors)

### Verify Database

Check that entries are being saved:

1. Go to your Vercel Postgres dashboard
2. Go to the **Data** tab
3. Click on the `waitlist` table
4. You should see your test entries

### Verify Emails

1. Check the email inbox you used for testing
2. You should receive a branded welcome email
3. Check your admin email (rachel@rhizomiclabs.ai)
4. You should receive admin notification emails

## Database Schema

The `waitlist` table includes:

| Column      | Type         | Description                          |
|-------------|--------------|--------------------------------------|
| id          | SERIAL       | Auto-incrementing primary key        |
| name        | VARCHAR(255) | User's name                          |
| email       | VARCHAR(255) | User's email (unique)                |
| created_at  | TIMESTAMP    | When they signed up                  |
| ip_address  | VARCHAR(45)  | User's IP address                    |
| user_agent  | TEXT         | Browser/device information           |

## Features Implemented

- **Data Persistence**: All signups are saved to PostgreSQL
- **Email Validation**: Format validation and duplicate prevention
- **User Confirmation Email**: Professional branded email template
- **Admin Notifications**: Get notified of new signups at rachel@rhizomiclabs.ai
- **Error Handling**: Graceful error messages for all scenarios
- **Duplicate Prevention**: Database-level unique constraint on email
- **Analytics Tracking**: IP address and user agent stored for insights

## API Endpoint

**POST** `/api/waitlist`

Request body:
```json
{
  "name": "John Doe",
  "email": "john@example.com"
}
```

Success response (200):
```json
{
  "message": "Successfully joined waitlist"
}
```

Error responses:
- 400: Invalid input or email format
- 409: Email already exists
- 500: Server error

## Next Steps (Optional Enhancements)

See `docs/waitlist-implementation-plan.md` for additional features you can add:

1. **Admin Dashboard** - View and manage waitlist entries
2. **CSV Export** - Export emails for marketing tools
3. **Rate Limiting** - Prevent spam submissions
4. **GDPR Compliance** - Add consent checkboxes and privacy policy
5. **Analytics** - Track conversion rates and user behavior

## Troubleshooting

### "Failed to save to database"
- Check that POSTGRES_URL is set correctly in .env.local
- Verify the table was created successfully
- Check Vercel Postgres dashboard for connection issues

### "Failed to send email"
- Verify RESEND_API_KEY is correct
- Check Resend dashboard for API limits
- For production, ensure domain is verified in Resend

### Emails going to spam
- Verify your domain in Resend
- Add SPF and DKIM records to your DNS
- Use your custom domain instead of resend.dev

## Support

For issues or questions:
- Check the [Vercel Postgres docs](https://vercel.com/docs/storage/vercel-postgres)
- Check the [Resend docs](https://resend.com/docs)
- Review `docs/waitlist-implementation-plan.md` for detailed implementation notes

---

**Status**: Ready for testing
**Last Updated**: 2026-01-18
