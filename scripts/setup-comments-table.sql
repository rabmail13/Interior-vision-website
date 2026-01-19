-- Create comments table
CREATE TABLE IF NOT EXISTS comments (
  id SERIAL PRIMARY KEY,
  comment TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Optional: Add an index for better query performance
CREATE INDEX IF NOT EXISTS idx_comments_created_at ON comments(created_at DESC);
