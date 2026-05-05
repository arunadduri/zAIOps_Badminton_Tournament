-- Get all unique email IDs from registrations
-- Run this in your Supabase SQL Editor

-- Get unique primary registrant emails
SELECT DISTINCT email 
FROM registrations 
ORDER BY email;

-- Get unique partner emails (excluding nulls)
SELECT DISTINCT partner_email 
FROM registrations 
WHERE partner_email IS NOT NULL
ORDER BY partner_email;

-- Get ALL unique emails (both primary and partner emails combined)
SELECT DISTINCT email_address
FROM (
    SELECT email as email_address FROM registrations
    UNION
    SELECT partner_email as email_address FROM registrations WHERE partner_email IS NOT NULL
) AS all_emails
ORDER BY email_address;

-- Get count of unique individuals (primary + partners)
SELECT COUNT(DISTINCT email_address) as total_unique_people
FROM (
    SELECT email as email_address FROM registrations
    UNION
    SELECT partner_email as email_address FROM registrations WHERE partner_email IS NOT NULL
) AS all_emails;

-- Made with Bob
