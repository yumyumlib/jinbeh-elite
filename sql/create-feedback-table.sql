-- Create feedback_submissions table for the /api/feedback route.
-- Run on the VPS PostgreSQL instance (gov1_orchestrator or jinbeh_forms database).
--
-- psql -U jinbeh -d jinbeh_forms -f create-feedback-table.sql

CREATE TABLE IF NOT EXISTS feedback_submissions (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    visit_date DATE,
    rating VARCHAR(20) NOT NULL,
    dining_type VARCHAR(50),
    message TEXT NOT NULL,
    location VARCHAR(50) DEFAULT 'Not specified',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index for querying by location and date
CREATE INDEX IF NOT EXISTS idx_feedback_location ON feedback_submissions(location);
CREATE INDEX IF NOT EXISTS idx_feedback_created ON feedback_submissions(created_at DESC);
