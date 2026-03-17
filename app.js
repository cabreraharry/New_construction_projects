// --- DATA EXTRACTED FROM GOOGLE SHEET & ENHANCED ---
const projectsData = [
    {
        id: 1,
        name: "Aventura Area Estate",
        location: "Florida",
        type: "Single Family",
        hoa: "N/A",
        contact: "Contact Agent via WhatsApp",
        startingPrice: "From $2,550,990",
        size: "4,324 - 5,828 Sq. Ft.",
        developer: "Exclusive Builder",
        architect: "Renowned Firm",
        delivery: "Q4 2026",
        description: "A boutique collection of ultra-luxury single-family homes nestled within a pristine gated community. Highlights: 
• Lush, manicured landscapes
• Massive open layouts
• Call us for direct floor plans and to schedule a private tour.",
        amenities: ["Gated Security", "Private Golf Course Access", "Resort-Style Club Pool", "Tennis Center"],
        images: [
            "https://www.dropbox.com/scl/fo/0m71qnjxbqdmyszzxkd4k/AEx94veF4A0p0iFXlv1wHVA/RENDERINGS/AMENITIES/Clubhouse%20Front%20View_LR%20REV1.jpg?rlkey=hnisv6lsp5dln8a5936pwr7as&raw=1",
            "https://www.dropbox.com/scl/fo/0m71qnjxbqdmyszzxkd4k/ALUyPpSKGjtBAObSPLloNuc/RENDERINGS/AMENITIES/Clubhouse%20Back%20View_LR%20REV1.jpg?rlkey=hnisv6lsp5dln8a5936pwr7as&raw=1",
            "https://www.dropbox.com/scl/fo/0m71qnjxbqdmyszzxkd4k/AKXiT3TXvomGl4dbLaQ1Dhc/RENDERINGS/AMENITIES/Future%20Clubhouse%20Aerial%20View.jpg?rlkey=hnisv6lsp5dln8a5936pwr7as&raw=1"
        ]
    },
    {
        id: 2,
        name: "Sunny Isles Tower 1",
        location: "Miami",
        type: "Condo",
        hoa: "$4,429-$4,742",
        contact: "Moran Schottenstein (786-508-7217)",
        startingPrice: "Contact Sales",
        size: "5,249 - 6,329 Sq. Ft.",
        developer: "Luxury Developer",
        architect: "Top Tier Architect",
        delivery: "2027",
        description: "The world's first branded residential tower of its kind. Highlights:
• Patented in-unit car elevator
• Private oceanfront pools per unit
• Unprecedented lifestyle overlooking the Atlantic Ocean
• Call for exact unit availability and our exclusive buyer incentives.",
        amenities: ["In-Unit Car Elevator (Dezervator)", "Private Oceanfront Pool per Unit", "Cigar Lounge", "Macallan Bar"],
        images: [
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=1600&q=80"
        ]
    },
    {
        id: 3,
        name: "Hallandale High-Rise",
        location: "Hallandale Beach",
        type: "Condo",
        hoa: "Contact for details",
        contact: "Daria Tumanova (305-776-0148)",
        startingPrice: "From $740,230",
        size: "894 - 4,756 Sq. Ft.",
        developer: "Premier Group",
        architect: "Award-Winning Firm",
        delivery: "Q2 2026",
        description: "A mixed-use destination featuring twin high-rise luxury towers spanning across 10 acres of prime real estate. Highlights:
• Sweeping ocean views
• Unparalleled on-site dining and retail
• Call us immediately for first-access pricing.",
        amenities: ["Six Pools & Cabanas", "State-of-the-Art Fitness Center", "Golf Simulator", "Valet Parking"],
        images: [
            "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=80"
        ]
    },
    {
        id: 4,
        name: "Brickell Oasis Residences",
        location: "Miami Brickell",
        type: "Condo",
        hoa: "$1.50 per sq ft",
        contact: "Giselle Vergara (786-302-2925)",
        startingPrice: "From $609,900",
        size: "485 - 1,286 Sq. Ft.",
        developer: "Leading Developer",
        architect: "International Architect",
        delivery: "2026",
        description: "Situated in the heart of Brickell, seamlessly blending the energetic atmosphere of Miami’s financial district with refined hospitality services. Highlights:
• Ultimate urban oasis
• Resort-style rooftop
• Call to discuss remaining inventory.",
        amenities: ["Viceroy Hotel Services", "Rooftop Pool Deck", "Billiards & Game Room", "Business Center"],
        images: [
            "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1542314831-c6a4d14eff62?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1600&q=80"
        ]
    },
    {
        id: 5,
        name: "Downtown Miami Suites",
        location: "Miami",
        type: "Condo",
        hoa: "Contact Sales",
        contact: "Elizabeth Garcia Mikulski",
        startingPrice: "From $900,000",
        size: "507 - 2,237 Sq. Ft.",
        developer: "Boutique Developer",
        architect: "Modern Design Firm",
        delivery: "2027",
        description: "An ethos of soulful living and exquisite culinary experiences. Highlights:
• Short-term rental approved (incredible ROI potential)
• Integrated dining and lounges
• Call us to secure a high-floor unit before they sell out.",
        amenities: ["Short-term Rental Approved", "Multiple Casa Tua Restaurants", "Wine Tasting Room", "Rooftop Lounge"],
        images: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80"
        ]
    },
    {
        id: 6,
        name: "Brickell Signature Tower",
        location: "Miami",
        type: "Condo",
        hoa: "$1.61 - $1.65 / sq ft",
        contact: "Contact Sales Team",
        startingPrice: "From $685,500",
        size: "479 - 2,106 Sq. Ft.",
        developer: "Signature Developer",
        architect: "Global Firm",
        delivery: "2027",
        description: "An aerodynamically inspired design defining the Miami skyline. Highlights:
• Lushly landscaped mobility hubs
• Striking silver finishes
• Call us for the verified price list and floor plans.",
        amenities: ["Mercedes-Benz Courtesy Cars", "EV Charging Stations", "Rooftop Observatory", "Wellness Spa"],
        images: [
            "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=1600&q=80"
        ]
    },
    {
        id: 7,
        name: "Boca Modern Estates",
        location: "Boca Raton",
        type: "Single Family",
        hoa: "$814 / month",
        contact: "Deysi Verona (305-419-0825)",
        startingPrice: "From $1,683,900",
        size: "3,561 - 6,934 Sq. Ft.",
        developer: "Luxury Builder",
        architect: "Custom Design",
        delivery: "Q3 2026",
        description: "Boca Raton's premier new ultra-modern luxury home community. Highlights:
• 100% contemporary aesthetic
• Massive open floor plans
• Sprawling clubhouse
• Call us today to tour the model homes privately.",
        amenities: ["39,000 Sq Ft Clubhouse", "Indoor Basketball Court", "Pickleball & Tennis Complex", "Bistro & Bar"],
        images: [
            "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80"
        ]
    },
    {
        id: 8,
        name: "Surfside Beach Townhomes",
        location: "Miami Beach",
        type: "Townhouse",
        hoa: "Contact for Details",
        contact: "Chelsea Werner (305-586-5711)",
        startingPrice: "From $1,375,000",
        size: "1,089 - 2,004 Sq. Ft.",
        developer: "Boutique Group",
        architect: "Renowned Designer",
        delivery: "Q4 2025",
        description: "An ultra-boutique collection of modern, custom-crafted townhomes steps away from the sand. Highlights:
• Enjoy the privacy of a single-family home
• High-end finishes and rooftop space
• Extremely limited supply - Call us now to reserve.",
        amenities: ["Private Rooftop Plunge Pools", "Summer Kitchens", "Beach Club Access", "Private Elevator Access"],
        images: [
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=80"
        ]
    },
    {
        id: 9,
        name: "Bay Harbor Waterfront 1",
        location: "Bay Harbor Islands",
        type: "Condo",
        hoa: "$1.77 / sq ft",
        contact: "Limaris Vargas",
        startingPrice: "From $1,554,000",
        size: "1,450 - 2,111 Sq. Ft.",
        developer: "Waterfront Developer",
        architect: "Luxury Architect",
        delivery: "2026",
        description: "A private waterfront harbor nestled within an exclusive, tranquil enclave. Highlights:
• Expansive residences with glass walls
• Sweeping vistas of Biscayne Bay
• Call for exact dockage details and unit sizes.",
        amenities: ["Private Boat Slips", "Waterfront Pool Deck", "Resident Dockside Lounge", "Kids Splash Pad"],
        images: [
            "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1542314831-c6a4d14eff62?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
        ]
    },
    {
        id: 10,
        name: "Bay Harbor Wellness Tower",
        location: "Bay Harbor Islands",
        type: "Condo",
        hoa: "$2.19 / sqft",
        contact: "Darcy Santos",
        startingPrice: "From $1,515,000",
        size: "946 - 2,293 Sq. Ft.",
        developer: "Wellness Developer",
        architect: "Holistic Design Firm",
        delivery: "2025",
        description: "Integrates holistic living directly into luxury real estate. Highlights:
• Purified air and water systems
• Restorative spas directly in the building
• Call our team to find the perfect wellness-focused residence for you.",
        amenities: ["World-Class Wellness Spa", "Halotherapy Salt Lounge", "IV Vitamin Therapy Access", "Aromatherapy Systems"],
        images: [
            "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80"
        ]
    },
    {
        id: 11,
        name: "Downtown Boca Glass Tower",
        location: "Boca Raton",
        type: "Condo",
        hoa: "Contact Sales",
        contact: "Bonnie Schwartz",
        startingPrice: "From $3,946,000",
        size: "3,085 - 3,685 Sq. Ft.",
        developer: "Premium Developer",
        architect: "Contemporary Architect",
        delivery: "2026",
        description: "A visionary glass masterpiece arriving in downtown Boca Raton. Highlights:
• Only 28 exclusive, half-floor and full-floor residences
• Seamless indoor-outdoor living
• Incredible city views
• Call us to secure one of the final remaining units.",
        amenities: ["Rooftop Pool & Cabanas", "Private Automated Parking", "Golf Cart Service to Beach", "Residents-Only Dining"],
        images: [
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?auto=format&fit=crop&w=1600&q=80"
        ]
    },
    {
        id: 12,
        name: "Bay Harbor Marina Residences",
        location: "Bay Harbor Islands",
        type: "Condo",
        hoa: "$1.56 / sq ft",
        contact: "Contact Sales Team",
        startingPrice: "From $4,504,000",
        size: "2,815 - 4,587 Sq. Ft.",
        developer: "Marina Developer",
        architect: "Waterfront Design",
        delivery: "Q1 2026",
        description: "A sanctuary of unparalleled exclusivity featuring wrap-around terraces and deep water marina access. Highlights:
• Corner flow-through residences
• Magnificent sunrise and sunset panoramas
• Call to confirm slip availability.",
        amenities: ["Flow-through Floorplans", "Private Deep Water Dockage", "Sunset Pool Deck", "Massage Treatment Rooms"],
        images: [
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1542314831-c6a4d14eff62?auto=format&fit=crop&w=1600&q=80"
        ]
    },
    {
        id: 13,
        name: "Las Olas Signature High Rise",
        location: "Las Olas",
        type: "Condo",
        hoa: "$1.50 / sq ft",
        contact: "Gigi Giusti",
        startingPrice: "From $2,216,900",
        size: "1,816 - 6,235 Sq. Ft.",
        developer: "High Rise Group",
        architect: "Italian Design Firm",
        delivery: "2027",
        description: "Seamlessly merges high-performance automotive sleekness with tropical architecture in the core of Fort Lauderdale's Las Olas district. Highlights:
• 10ft Floor-to-Ceiling Glass
• Chef's Exhibition Kitchen
• Call for our exclusive VIP viewing.",
        amenities: ["Pininfarina Curated Interiors", "10ft Floor-to-Ceiling Glass", "Two Rooftop Pools", "Chef's Exhibition Kitchen"],
        images: [
            "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80"
        ]
    },
    {
        id: 14,
        name: "Fort Lauderdale Riverfront",
        location: "Fort Lauderdale",
        type: "Condo",
        hoa: "$1.16 / sq ft",
        contact: "Brett Perry",
        startingPrice: "From $799,000",
        size: "742 - 2,296 Sq. Ft.",
        developer: "Riverfront Group",
        architect: "Local Architect",
        delivery: "Q1 2026",
        description: "A boutique, luxury condominium nestled directly on the edge of the lively New River. Highlights:
• Surrounded by historical charm
• Steps away from prime shopping
• Contact us for the full buyer's brochure.",
        amenities: ["Riverfront Promenade", "Resort Pool on the River", "Co-Working Suite", "Pet Spa"],
        images: [
            "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?auto=format&fit=crop&w=1600&q=80"
        ]
    },
    {
        id: 15,
        name: "North Bay Village Estates",
        location: "North Bay Village",
        type: "Condo",
        hoa: "$1.77 / SQ FT",
        contact: "Marla Cohen",
        startingPrice: "From $1,771,000",
        size: "Contact for details",
        developer: "Island Developer",
        architect: "Resort Architect",
        delivery: "2027",
        description: "Experience a curated resort lifestyle standing at the gateway of Miami, surrounded by glittering water on an exclusive island. Highlights:
• Beach Club Equivalent Experience
• Concierge Service
• Call us to discuss early-bird pricing options.",
        amenities: ["Beach Club Equivalent Experience", "Full Service Marina", "Olympic Length Lap Pool", "Concierge Service"],
        images: [
            "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80"
        ]
    },
    {
        id: 16,
        name: "North Bay Village Waterfront",
        location: "North Bay Village",
        type: "Condo",
        hoa: "$1.60 / sq Ft",
        contact: "Contact Sales Team",
        startingPrice: "From $941,000",
        size: "750 - 3,645 Sq. Ft.",
        developer: "Bay Developer",
        architect: "Modern Architect",
        delivery: "Q3 2025",
        description: "Beautifully integrates convenience with waterfront luxury. Highlights:
• Spacious layouts
• Panoramic vistas of the Miami Beach skyline
• Built-in high-end grocery and food hall
• Call us to tour the virtual reality model.",
        amenities: ["Shoma Bazaar Food Hall", "Resident Publix Access", "Rooftop Cinema", "Lounge & Library"],
        images: [
            "https://images.unsplash.com/photo-1542314831-c6a4d14eff62?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80"
        ]
    },
    {
        id: 17,
        name: "Aventura Ultra Luxury",
        location: "Aventura",
        type: "Condo",
        hoa: "Contact for details",
        contact: "Cindy Orlinsky",
        startingPrice: "From $5,450,000",
        size: "3,494 - 3,505 Sq. Ft.",
        developer: "Luxury Developer",
        architect: "Global Firm",
        delivery: "2026",
        description: "An incredibly exclusive enclave featuring interiors completely outfitted by a top Italian designer. Highlights:
• Limited to only the most discerning buyers
• Grand scale of living unseen anywhere else in the area
• STRICTLY confidential. Call us for the property brief.",
        amenities: ["FENDI Casa Finishings", "Private 4-Car Garages", "Infinity Pool overlooking Bay", "Private Yacht Charter Access"],
        images: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=80"
        ]
    }
];

// --- APP STATE ---
let currentProject = null;
let currentImageIndex = 0;
let activeType = 'All';
let activeLocation = 'All';

// Get unique filter options
const getOptions = (key) => ['All', ...new Set(projectsData.map(p => p[key]))].sort();

// --- RENDER FILTERS ---
const filterContainer = document.getElementById('filter-container');

const renderFilters = () => {
    if (!filterContainer) return;

    const types = getOptions('type');
    const locations = getOptions('location');

    let html = `
        <div class="flex flex-col sm:flex-row gap-4 w-full max-w-4xl justify-center items-center">
            
            <div class="relative w-full sm:w-1/2">
                <label class="block text-brand-gold text-xs font-bold mb-2 uppercase tracking-widest">Property Type</label>
                <div class="relative">
                    <select id="type-filter" class="w-full bg-brand-surface border border-white/20 text-white text-sm rounded-lg focus:ring-brand-gold focus:border-brand-gold block p-3 appearance-none font-medium cursor-pointer transition-colors hover:border-brand-gold/50" onchange="applyFilters()">
                        ${types.map(t => `<option value="${t}">${t}</option>`).join('')}
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white">
                        <svg class="fill-current h-4 w-4" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                    </div>
                </div>
            </div>

            <div class="relative w-full sm:w-1/2">
                <label class="block text-brand-gold text-xs font-bold mb-2 uppercase tracking-widest">Location</label>
                <div class="relative">
                    <select id="location-filter" class="w-full bg-brand-surface border border-white/20 text-white text-sm rounded-lg focus:ring-brand-gold focus:border-brand-gold block p-3 appearance-none font-medium cursor-pointer transition-colors hover:border-brand-gold/50" onchange="applyFilters()">
                        ${locations.map(l => `<option value="${l}">${l}</option>`).join('')}
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white">
                        <svg class="fill-current h-4 w-4" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                    </div>
                </div>
            </div>
            
        </div>
    `;
    filterContainer.innerHTML = html;
};

// --- RENDER PROJECT CARDS ---
const projectGrid = document.getElementById('project-grid');

const applyFilters = () => {
    const typeSelect = document.getElementById('type-filter');
    const locationSelect = document.getElementById('location-filter');
    activeType = typeSelect ? typeSelect.value : 'All';
    activeLocation = locationSelect ? locationSelect.value : 'All';
    renderCards();
};

const renderCards = () => {
    if(!projectGrid) return;
    
    let filtered = projectsData;
    if (activeType !== 'All') filtered = filtered.filter(p => p.type === activeType);
    if (activeLocation !== 'All') filtered = filtered.filter(p => p.location === activeLocation);

    if (filtered.length === 0) {
        projectGrid.innerHTML = `
            <div class="col-span-full py-20 text-center">
                <h4 class="text-2xl text-white font-heading font-bold mb-3">No Projects Found</h4>
                <p class="text-gray-400">Try adjusting your filters to see more availabilities.</p>
                <button onclick="document.getElementById('type-filter').value='All'; document.getElementById('location-filter').value='All'; applyFilters();" class="mt-6 px-6 py-2 bg-brand-gold/10 border border-brand-gold text-brand-gold rounded hover:bg-brand-gold hover:text-black uppercase text-xs font-bold tracking-widest transition-colors">Clear Filters</button>
            </div>
        `;
        return;
    }

    projectGrid.innerHTML = filtered.map(project => `
        <div class="group relative bg-[#121214] rounded-xl border border-white/5 overflow-hidden transition-all duration-500 hover:border-brand-gold/30 hover:shadow-[0_10px_40px_rgba(212,175,55,0.1)] hover:-translate-y-2 flex flex-col h-full cursor-pointer" onclick="openModal(${project.id})">
            
            <div class="relative h-72 overflow-hidden bg-brand-darker">
                <div class="absolute inset-0 bg-brand-darker/20 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                <img src="${project.images[0]}" alt="${project.name}" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80'" />
                
                <!-- Type Tag -->
                <div class="absolute top-4 right-4 z-20 glass-panel px-3 py-1.5 rounded backdrop-blur-md border border-white/10 bg-black/40">
                    <span class="text-xs font-bold font-heading text-brand-gold tracking-widest uppercase">
                        ${project.type}
                    </span>
                </div>
            </div>
            
            <div class="p-8 flex flex-col flex-grow relative">
                <!-- Decorative top line -->
                <div class="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-brand-gold/0 via-brand-gold/50 to-brand-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div class="flex items-center text-gray-400 mb-3 text-xs font-semibold tracking-widest uppercase">
                    <svg class="w-3.5 h-3.5 mr-1.5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    ${project.location}
                </div>
                
                <h3 class="font-heading text-2xl font-bold text-white mb-4 group-hover:text-brand-gold transition-colors duration-300 line-clamp-1">${project.name}</h3>
                
                <div class="grid grid-cols-2 gap-4 mb-8 flex-grow">
                    <div class="border-l-2 border-brand-gold/50 pl-3">
                        <p class="text-[10px] uppercase tracking-widest text-gray-500 mb-1">Starting Price</p>
                        <p class="font-bold text-white text-sm truncate">${project.startingPrice}</p>
                    </div>
                    <div class="border-l-2 border-brand-gold/50 pl-3">
                        <p class="text-[10px] uppercase tracking-widest text-gray-500 mb-1">Total Size</p>
                        <p class="font-medium text-gray-300 text-sm truncate">${project.size}</p>
                    </div>
                </div>
                
                <button class="w-full text-center py-4 bg-white/5 group-hover:bg-brand-gold text-white group-hover:text-black uppercase tracking-widest text-xs font-bold rounded transition-all duration-300 border border-white/5 group-hover:border-brand-gold">
                    View Grand Showcase
                </button>
            </div>
        </div>
    `).join('');
};

// --- MODAL & CAROUSEL LOGIC ---
const modal = document.getElementById('project-modal');
const modalContainer = document.getElementById('modal-container');

const openModal = (projectId) => {
    currentProject = projectsData.find(p => p.id === projectId);
    if (!currentProject) return;

    currentImageIndex = 0;
    
    // Header Info
    document.getElementById('modal-title').textContent = currentProject.name;
    document.getElementById('modal-location').textContent = currentProject.location;
    
    // Fast Facts
    document.getElementById('modal-type').textContent = currentProject.type;
    document.getElementById('modal-price').textContent = currentProject.startingPrice;
    document.getElementById('modal-size').textContent = currentProject.size;
    document.getElementById('modal-delivery').textContent = currentProject.delivery;
    document.getElementById('modal-developer').textContent = currentProject.developer;
    document.getElementById('modal-architect').textContent = currentProject.architect;
    
    // Rich Description
    document.getElementById('modal-description').textContent = currentProject.description;
    
    // Amenities
    const amenitiesList = document.getElementById('modal-amenities');
    amenitiesList.innerHTML = currentProject.amenities.map(a => `
        <li class="flex items-center text-gray-300 text-sm">
            <svg class="w-4 h-4 text-brand-gold mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
            ${a}
        </li>
    `).join('');

    updateCarousel();

    modal.classList.remove('hidden');
    document.body.classList.add('modal-open');

    // Animation trigger
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        modalContainer.classList.remove('scale-95');
        modalContainer.classList.add('scale-100');
    }, 10);
};

const closeModal = () => {
    modal.classList.add('opacity-0');
    modalContainer.classList.remove('scale-100');
    modalContainer.classList.add('scale-95');

    setTimeout(() => {
        modal.classList.add('hidden');
        document.body.classList.remove('modal-open');
        currentProject = null;
    }, 300);
};

// Listen for escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

const updateCarousel = () => {
    if(!currentProject) return;
    
    const imgElement = document.getElementById('modal-image');
    if(imgElement) {
        // Fade out
        imgElement.style.opacity = '0.5';
        setTimeout(() => {
            imgElement.src = currentProject.images[currentImageIndex];
            imgElement.style.opacity = '1';
        }, 150);
    }

    const thumbnails = document.getElementById('modal-thumbnails');
    if(thumbnails) {
        thumbnails.innerHTML = currentProject.images.map((img, idx) => `
            <div onclick="setCarouselImage(${idx})" class="w-20 h-14 rounded overflow-hidden cursor-pointer border-2 transition-all duration-300 ${idx === currentImageIndex ? 'border-brand-gold scale-110' : 'border-transparent opacity-60 hover:opacity-100'}">
                <img src="${img}" class="w-full h-full object-cover pointer-events-none" />
            </div>
        `).join('');
    }
};

window.prevImage = () => {
    if(!currentProject) return;
    currentImageIndex = (currentImageIndex - 1 + currentProject.images.length) % currentProject.images.length;
    updateCarousel();
};

window.nextImage = () => {
    if(!currentProject) return;
    currentImageIndex = (currentImageIndex + 1) % currentProject.images.length;
    updateCarousel();
};

window.setCarouselImage = (index) => {
    if(!currentProject) return;
    currentImageIndex = index;
    updateCarousel();
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    renderFilters();
    renderCards();

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIconPath = document.getElementById('menu-icon-path');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.contains('hidden');
            if (isHidden) {
                mobileMenu.classList.remove('hidden');
                menuIconPath.setAttribute('d', 'M6 18L18 6M6 6l12 12');
            } else {
                mobileMenu.classList.add('hidden');
                menuIconPath.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
            }
        });

        const mobileLinks = mobileMenu.querySelectorAll('.mobile-link');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                menuIconPath.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
            });
        });
    }
});
