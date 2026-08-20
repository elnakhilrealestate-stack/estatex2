-- Seed data for EstateX Real Estate Solutions
DELETE FROM projects;
DELETE FROM testimonials;
DELETE FROM courses;

INSERT INTO projects (name, location, developer, "priceFrom", "downPayment", installments, tag, description, image, featured, sort) VALUES
('Dar Misr El Obour (دار مصر العبور)', 'Obour City (مدينة العبور)', 'EstateX Resales', 'EGP 1.85M', 'Cash / Inst', 'Immediate', 'Ready',
 'شقة سكنية مميزة للبيع في دار مصر العبور بمساحة 100م٢. تتميز بموقعها الإستراتيجي المميز (موقع 1) بجوار مسجد الحبيب المصطفى. تسليم فوري وتشطيب فاخر جاهز للسكن مباشرة، فرصة استثمارية وسكنية لا تتكرر.',
 'https://images.pexels.com/photos/8082227/pexels-photo-8082227.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200', true, 1),

('The Crown Residences', 'New Cairo', 'SODIC', 'EGP 8.4M', '10%', '8 Years', 'Off-Plan',
 'Luxury double-height apartments with sweeping green ridge views, walking tracks, and world-class retail spaces at the prestigious SODIC New Cairo expansion corridor.',
 'https://images.pexels.com/photos/18549956/pexels-photo-18549956.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200', true, 2),

('Elite Garden Villas', 'Obour City — 5th District', 'EstateX Exclusive', 'EGP 12.2M', '20%', '5 Years', 'Ready',
 'Exclusive standby smart villas with independent solar power systems, private pool courts, and high boundary security fences. Absolute luxury in city heart.',
 'https://images.pexels.com/photos/27626185/pexels-photo-27626185.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200', true, 3),

('Skyline Landmark Tower', 'New Capital', 'Palm Hills', 'EGP 6.9M', '5%', '10 Years', 'Off-Plan',
 'Soaring luxury condos with smart-automation, automated waste chutes, rooftop health clubs, and direct walkable links to the central monorail terminal.',
 'https://images.pexels.com/photos/17007766/pexels-photo-17007766.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200', true, 4),

('Obour City Heights', 'Obour City', 'First Capital', 'EGP 3.2M', '15%', '6 Years', 'Ready',
 'Ready-to-move-in apartments featuring spacious master suites, landscaped parking courts, and close proximity to schools, hospitals, and sports zones.',
 'https://images.pexels.com/photos/1248513/pexels-photo-1248513.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200', true, 5),

('Mountain View iCity Park', 'New Cairo', 'Mountain View', 'EGP 7.2M', '10%', '9 Years', 'Off-Plan',
 'Modern signature i-villas with double-volume glass facades overlooking the lagoon, private gardens, and walking corridors in New Cairo''s most popular family compound.',
 'https://images.pexels.com/photos/17007767/pexels-photo-17007767.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200', true, 6);

INSERT INTO testimonials (name, role, company, quote, rating, sort) VALUES
('Sherif El-Ghandour', 'Property Investor', 'Obour Trade Corp',
 'Excellent experience buy/sell with EstateX. They completed the resale of my apartment in Dar Misr Obour with maximum speed and at a superb valuation. Highly professional service.', 5, 1),
('Amr Abdel-Fattah', 'Business Owner', 'Alex Logistics',
 'EstateX Real Estate Solutions helped me secure a premium commercial unit in New Cairo with an incredibly comfortable payment plan. Truly trusted advisors.', 5, 2),
('Yasmin Mansour', 'Project Director', 'Cairo Finance Hub',
 'We bought our luxury smart villa through EstateX and the entire process was smooth. The 24/7 client updates and coordination are exceptional.', 5, 3),
('Hassan Hegazi', 'Consultant', 'Private Portfolio',
 'The best part about EstateX is their realistic market reports. They told me honestly which developers to avoid and where the delivery risks actually lie.', 5, 4),
('Rawia Soliman', 'Resident', 'Dar Misr',
 'We found our dream family apartment in Obour City in record time. Excellent coordination and complete help with the complex contract transfer paperwork.', 5, 5);

INSERT INTO courses (title, category, duration, lessons, level, description, accent, sort) VALUES
('Obour City Real Estate Landscape', 'Local Market', '1h 45m', 8, 'Beginner',
 'Pricing benchmarks, zoning laws, and upcoming major infrastructure developments in Obour City and neighborhood zones.', '#33260f', 1),
('Off-Plan Property Risk Assessment', 'Investing', '3h 10m', 15, 'Intermediate',
 'Checking Egyptian developer license status, construction milestones, and contract escape clauses to protect your capital.', '#1c2733', 2),
('Resale Mathematics for Egyptian Investors', 'Valuation', '2h 20m', 11, 'Advanced',
 'Calculating genuine net-of-tax yields on resales, maintenance fees, transfer commissions, and inflation effects.', '#2c1f2b', 3),
('Premium Compound Comparisons', 'New Cairo', '1h 50m', 10, 'All Levels',
 'A granular head-to-head comparison of Sodic, Emaar, and Palm Hills compounds in the New Cairo and Golden Square zones.', '#1f2b22', 4),
('Commercial Property Sourcing', 'Investing', '2h 15m', 9, 'Advanced',
 'How to source retail spaces with high footfall anchors and negotiate long-term triple-net corporate leases.', '#33261c', 5),
('Egypt Real Estate Q1 Market Update', 'Market', '1h 05m', 6, 'All Levels',
 'A quick analytical summary of interest rate shifts, housing demands, and developer absorption rates this quarter.', '#232333', 6);
