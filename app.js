// --- DATA EXTRACTED FROM GOOGLE SHEET & ENHANCED ---
const projectsData = [
    {
        id: 1,
        name: "Greenview at Presidential",
        location: "Florida",
        type: "Single Family",
        hoa: "N/A",
        contact: "Contact Agent via WhatsApp",
        startingPrice: "From $2,550,990",
        size: "4,324 - 5,828 Sq. Ft.",
        developer: "Presidential Estates Group",
        architect: "Stantec Architecture",
        delivery: "Q4 2026",
        description: "Greenview at Presidential presents a boutique collection of ultra-luxury single-family homes nestled within a pristine gated community. Surrounded by lush, manicured landscapes, these expansive estates redefine modern suburban living with sophisticated elegance.",
        amenities: ["Gated Security", "Private Golf Course Access", "Resort-Style Club Pool", "Tennis Center"],
        images: [
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80"
        ]
    },
    {
        id: 2,
        name: "Bentley Residences",
        location: "Miami",
        type: "Condo",
        hoa: "$4,429-$4,742",
        contact: "Moran Schottenstein (786-508-7217)",
        startingPrice: "Contact Sales",
        size: "5,249 - 6,329 Sq. Ft.",
        developer: "Dezer Development",
        architect: "Sieger Suarez Architects",
        delivery: "2027",
        description: "The world's first Bentley-branded residential tower. Featuring a patented car elevator that brings vehicles directly to the residence, Bentley Residences offers an unprecedented lifestyle overlooking the Atlantic Ocean and Intracoastal waterways.",
        amenities: ["In-Unit Car Elevator (Dezervator)", "Private Oceanfront Pool per Unit", "Cigar Lounge", "Macallan Bar"],
        images: [
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=1600&q=80"
        ]
    },
    {
        id: 3,
        name: "Oasis Hallandale Beach",
        location: "Hallandale Beach",
        type: "Condo",
        hoa: "Contact for details",
        contact: "Daria Tumanova (305-776-0148)",
        startingPrice: "From $740,230",
        size: "894 - 4,756 Sq. Ft.",
        developer: "MGM Construction Group",
        architect: "Arquitectonica",
        delivery: "Q2 2026",
        description: "A mixed-use destination featuring twin high-rise luxury towers spanning across 10 acres of prime Hallandale real estate. The Oasis redefines city living with sweeping ocean views and unparalleled on-site dining and retail.",
        amenities: ["Six Pools & Cabanas", "State-of-the-Art Fitness Center", "Golf Simulator", "Valet Parking"],
        images: [
            "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=80"
        ]
    },
    {
        id: 4,
        name: "Viceroy Residences",
        location: "Miami Brickell",
        type: "Condo",
        hoa: "$1.50 per sq ft",
        contact: "Giselle Vergara (786-302-2925)",
        startingPrice: "From $609,900",
        size: "485 - 1,286 Sq. Ft.",
        developer: "Related Group",
        architect: "BMA Architects",
        delivery: "2026",
        description: "Situated in the heart of Brickell, Viceroy Residences seamlessly blends the energetic atmosphere of Miami’s financial district with the refined services of a world-renowned hospitality brand. Embrace the ultimate urban oasis.",
        amenities: ["Viceroy Hotel Services", "Rooftop Pool Deck", "Billiards & Game Room", "Business Center"],
        images: [
            "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1542314831-c6a4d14eff62?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1600&q=80"
        ]
    },
    {
        id: 5,
        name: "Ora by Casa Tua",
        location: "Miami",
        type: "Condo",
        hoa: "Contact Sales",
        contact: "Elizabeth Garcia Mikulski",
        startingPrice: "From $900,000",
        size: "507 - 2,237 Sq. Ft.",
        developer: "Fortune International Group",
        architect: "Arquitectonica",
        delivery: "2027",
        description: "Curated by the famed Casa Tua brand, Ora introduces an ethos of soulful living and exquisite culinary experiences. These residences allow short-term rentals, offering a spectacular mix of luxury and extreme flexibility.",
        amenities: ["Short-term Rental Approved", "Multiple Casa Tua Restaurants", "Wine Tasting Room", "Rooftop Lounge"],
        images: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80"
        ]
    },
    {
        id: 6,
        name: "Mercedes-Benz Places",
        location: "Miami",
        type: "Condo",
        hoa: "$1.61 - $1.65 / sq ft",
        contact: "Contact Sales Team",
        startingPrice: "From $685,500",
        size: "479 - 2,106 Sq. Ft.",
        developer: "JDS Development Group",
        architect: "SHoP Architects",
        delivery: "2027",
        description: "The first Mercedes-Benz branded real estate project in North America. These twin towers define the Miami skyline with aerodynamically inspired design, lushly landscaped mobility hubs, and striking silver finishes.",
        amenities: ["Mercedes-Benz Courtesy Cars", "EV Charging Stations", "Rooftop Observatory", "Wellness Spa"],
        images: [
            "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=1600&q=80"
        ]
    },
    {
        id: 7,
        name: "Lotus Edge",
        location: "Boca Raton",
        type: "Single Family",
        hoa: "$814 / month",
        contact: "Deysi Verona (305-419-0825)",
        startingPrice: "From $1,683,900",
        size: "3,561 - 6,934 Sq. Ft.",
        developer: "GL Homes",
        architect: "GL Design Build",
        delivery: "Q3 2026",
        description: "Boca Raton's premier new ultra-modern luxury home community. Lotus Edge brings a 100% contemporary aesthetic to suburban family living with striking architecture, massive open floor plans, and a sprawling clubhouse.",
        amenities: ["39,000 Sq Ft Clubhouse", "Indoor Basketball Court", "Pickleball & Tennis Complex", "Bistro & Bar"],
        images: [
            "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80"
        ]
    },
    {
        id: 8,
        name: "Surf Row",
        location: "Miami Beach",
        type: "Townhouse",
        hoa: "Contact for Details",
        contact: "Chelsea Werner (305-586-5711)",
        startingPrice: "From $1,375,000",
        size: "1,089 - 2,004 Sq. Ft.",
        developer: "Surf Row Development",
        architect: "Rene Gonzalez Architects",
        delivery: "Q4 2025",
        description: "An ultra-boutique collection of modern, custom-crafted townhomes steps away from the sand in the exclusive Surfside neighborhood. Enjoy the privacy of a single-family home with the effortless lifestyle of a luxury condo.",
        amenities: ["Private Rooftop Plunge Pools", "Summer Kitchens", "Beach Club Access", "Private Elevator Access"],
        images: [
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=80"
        ]
    },
    {
        id: 9,
        name: "La Baia North",
        location: "Bay Harbor Islands",
        type: "Condo",
        hoa: "$1.77 / sq ft",
        contact: "Limaris Vargas",
        startingPrice: "From $1,554,000",
        size: "1,450 - 2,111 Sq. Ft.",
        developer: "Continuum Company",
        architect: "Luis Revuelta",
        delivery: "2026",
        description: "A private waterfront harbor nestled within the exclusive, tranquil enclave of Bay Harbor Islands. These expansive residences feature spectacular glass-walls showcasing sweeping vistas of Biscayne Bay and the Atlantic Ocean.",
        amenities: ["Private Boat Slips", "Waterfront Pool Deck", "Resident Dockside Lounge", "Kids Splash Pad"],
        images: [
            "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1542314831-c6a4d14eff62?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
        ]
    },
    {
        id: 10,
        name: "THE WELL",
        location: "Bay Harbor Islands",
        type: "Condo",
        hoa: "$2.19 / sqft",
        contact: "Darcy Santos",
        startingPrice: "From $1,515,000",
        size: "946 - 2,293 Sq. Ft.",
        developer: "Terra Group",
        architect: "Arquitectonica",
        delivery: "2025",
        description: "Designed in collaboration with the globally recognized wellness brand, THE WELL integrates holistic living directly into luxury real estate. From purified air to restorative spas, every detail is engineered for your wellbeing.",
        amenities: ["World-Class Wellness Spa", "Halotherapy Salt Lounge", "IV Vitamin Therapy Access", "Aromatherapy Systems"],
        images: [
            "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80"
        ]
    },
    {
        id: 11,
        name: "Glass House",
        location: "Boca Raton",
        type: "Condo",
        hoa: "Contact Sales",
        contact: "Bonnie Schwartz",
        startingPrice: "From $3,946,000",
        size: "3,085 - 3,685 Sq. Ft.",
        developer: "280 E Palmetto Park Road LLC",
        architect: "Garcia Stromberg",
        delivery: "2026",
        description: "A visionary glass masterpiece arriving in downtown Boca Raton. Offering only 28 exclusive, half-floor and full-floor residences equipped with towering glass walls, seamless indoor-outdoor living, and incredible city views.",
        amenities: ["Rooftop Pool & Cabanas", "Private Automated Parking", "Golf Cart Service to Beach", "Residents-Only Dining"],
        images: [
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?auto=format&fit=crop&w=1600&q=80"
        ]
    },
    {
        id: 12,
        name: "Bay Harbor Towers",
        location: "Bay Harbor Islands",
        type: "Condo",
        hoa: "$1.56 / sq ft",
        contact: "Contact Sales Team",
        startingPrice: "From $4,504,000",
        size: "2,815 - 4,587 Sq. Ft.",
        developer: "PPG Development",
        architect: "Kobi Karp",
        delivery: "Q1 2026",
        description: "A sanctuary of unparalleled exclusivity featuring wrap-around terraces and deep water marina access. Every home is a corner flow-through residence capturing magnificent sunrise and sunset panoramas.",
        amenities: ["Flow-through Floorplans", "Private Deep Water Dockage", "Sunset Pool Deck", "Massage Treatment Rooms"],
        images: [
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1542314831-c6a4d14eff62?auto=format&fit=crop&w=1600&q=80"
        ]
    },
    {
        id: 13,
        name: "Andare by Pininfarina",
        location: "Las Olas",
        type: "Condo",
        hoa: "$1.50 / sq ft",
        contact: "Gigi Giusti",
        startingPrice: "From $2,216,900",
        size: "1,816 - 6,235 Sq. Ft.",
        developer: "Related Group",
        architect: "Pininfarina",
        delivery: "2027",
        description: "Branded and fully styled by the legendary Italian design firm Pininfarina, this high-rise in the core of Fort Lauderdale's Las Olas district seamlessly merges high-performance automotive sleekness with tropical architecture.",
        amenities: ["Pininfarina Curated Interiors", "10ft Floor-to-Ceiling Glass", "Two Rooftop Pools", "Chef's Exhibition Kitchen"],
        images: [
            "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80"
        ]
    },
    {
        id: 14,
        name: "Sixth & Rio",
        location: "Fort Lauderdale",
        type: "Condo",
        hoa: "$1.16 / sq ft",
        contact: "Brett Perry",
        startingPrice: "From $799,000",
        size: "742 - 2,296 Sq. Ft.",
        developer: "OceanLand Investments",
        architect: "FSMY Architects",
        delivery: "Q1 2026",
        description: "A boutique, luxury condominium nestled directly on the edge of Fort Lauderdale's lively New River. Surrounded by historical charm and steps away from Las Olas Boulevard's finest shopping.",
        amenities: ["Riverfront Promenade", "Resort Pool on the River", "Co-Working Suite", "Pet Spa"],
        images: [
            "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?auto=format&fit=crop&w=1600&q=80"
        ]
    },
    {
        id: 15,
        name: "Continuum Club",
        location: "North Bay Village",
        type: "Condo",
        hoa: "$1.77 / SQ FT",
        contact: "Marla Cohen",
        startingPrice: "From $1,771,000",
        size: "Contact for details",
        developer: "Continuum Company",
        architect: "Arquitectonica",
        delivery: "2027",
        description: "Extending the fabled Continuum legacy from South Beach to North Bay Village. Experience a curated resort lifestyle standing at the gateway of Miami, surrounded glittering water on an exclusive island.",
        amenities: ["Beach Club Equivalent Experience", "Full Service Marina", "Olympic Length Lap Pool", "Concierge Service"],
        images: [
            "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80"
        ]
    },
    {
        id: 16,
        name: "Shoma Bay",
        location: "North Bay Village",
        type: "Condo",
        hoa: "$1.60 / sq Ft",
        contact: "Contact Sales Team",
        startingPrice: "From $941,000",
        size: "750 - 3,645 Sq. Ft.",
        developer: "Shoma Group",
        architect: "MSA Architects",
        delivery: "Q3 2025",
        description: "Anchored by Shoma Bazaar and a sweeping Publix supermarket, Shoma Bay beautifully integrates convenience with waterfront luxury. Offering spacious layouts and panoramic vistas of Miami Beach skyline.",
        amenities: ["Shoma Bazaar Food Hall", "Resident Publix Access", "Rooftop Cinema", "Lounge & Library"],
        images: [
            "https://images.unsplash.com/photo-1542314831-c6a4d14eff62?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80"
        ]
    },
    {
        id: 17,
        name: "Avenia FENDI Casa",
        location: "Aventura",
        type: "Condo",
        hoa: "Contact for details",
        contact: "Cindy Orlinsky",
        startingPrice: "From $5,450,000",
        size: "3,494 - 3,505 Sq. Ft.",
        developer: "Aventura Development Group",
        architect: "Kobi Karp",
        delivery: "2026",
        description: "An incredibly exclusive enclave featuring interiors completely outfitted by FENDI Casa. Limited to only the most discerning buyers, Avenia provides a grand scale of living unseen anywhere else in Aventura.",
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
