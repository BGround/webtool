/*
  # Create websites table

  1. New Tables
    - `websites`
      - `id` (uuid, primary key)
      - `title` (text, not null)
      - `url` (text, not null)
      - `description` (text, not null)
      - `category` (text, not null)
      - `created_at` (timestamp with time zone, default: now())

  2. Security
    - Enable RLS on `websites` table
    - Add policies for:
      - Anyone can read websites
      - Only authenticated users can insert websites
*/

CREATE TABLE IF NOT EXISTS websites (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  url text NOT NULL,
  description text NOT NULL,
  category text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE websites ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read websites
CREATE POLICY "Anyone can read websites"
  ON websites
  FOR SELECT
  TO public
  USING (true);

-- Allow authenticated users to insert websites
CREATE POLICY "Authenticated users can insert websites"
  ON websites
  FOR INSERT
  TO authenticated
  WITH CHECK (true);