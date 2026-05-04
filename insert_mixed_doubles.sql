-- Insert 2 Mixed Doubles registrations
-- Run this in your Supabase SQL Editor

-- Registration 1: Riju KK with Manju Nair
INSERT INTO "public"."registrations" ("name", "email", "gender", "category", "category_label", "partner_name", "partner_email", "created_at") 
VALUES (
    'Riju KK', 
    'riju.kk@ibm.com', 
    'Male', 
    'mixedDoubles', 
    'Mixed Doubles', 
    'Manju Nair', 
    'manju.nair@ibm.com', 
    NOW()
);

-- Registration 2: Arya Raj with Sandeep Ambekar
INSERT INTO "public"."registrations" ("name", "email", "gender", "category", "category_label", "partner_name", "partner_email", "created_at") 
VALUES (
    'Arya Raj', 
    'arya.raj3@ibm.com', 
    'Female', 
    'mixedDoubles', 
    'Mixed Doubles', 
    'Sandeep Ambekar', 
    'sandeep.ambekar@in.ibm.com', 
    NOW()
);

-- Made with Bob
