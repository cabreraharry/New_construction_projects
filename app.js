// --- DATA EXTRACTED FROM GOOGLE SHEET ---
const projectsData = [
    {
        id: 1,
        name: "Greenview at Presidential",
        location: "Florida",
        commission: "3% Domestic / 5% International",
        hoa: "N/A",
        contact: "Received thru WhatsApp",
        image: "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?auto=format&fit=crop&w=800&q=80",
        inventory: [
            { Type: "Single Family", Model: "NILE", Beds: "5 BED/3.5 BATHS", SqFt: "4,324 SF", Price: "FROM $2,550,990" },
            { Type: "Single Family", Model: "PIEDRA", Beds: "4 BED/4 BATHS", SqFt: "4,639 SF", Price: "FROM $2,675,990" },
            { Type: "Single Family", Model: "SOMMERSET", Beds: "5 BED/4 BATHS", SqFt: "5,081 SF", Price: "FROM $2,755,990" },
            { Type: "Single Family", Model: "RUBY", Beds: "5 BED/4.5 BATHS", SqFt: "5,149 Sq. Ft.", Price: "FROM $2,945,990" },
            { Type: "Single Family", Model: "SILVERSTONE", Beds: "5 BED/5.5 BATHS", SqFt: "5,377 Sq. Ft", Price: "FROM $3,148,990" },
            { Type: "Single Family", Model: "VICTORA", Beds: "6 BED/6.5 BATHS", SqFt: "5,828 Sq. Ft.", Price: "FROM $3,368,990" }
        ]
    },
    {
        id: 2,
        name: "Bentley Residences",
        location: "Miami",
        commission: "5%",
        hoa: "$4,429-$4,742",
        contact: "Moran Schottenstein (786-508-7217)",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
        inventory: [
            { Model: "RESIDENCE ARNAGE", Beds: "3 BEDS | 3.5 BATHS", Floors: "07-61", SqFt: "5,694 - 6,329", Price: "Contact Sales" },
            { Model: "RESIDENCE AZURE", Beds: "3 BEDS | 3.5 BATHS", Floors: "07-61", SqFt: "5,694 - 6,329", Price: "Contact Sales" },
            { Model: "RESIDENCE BACALAR", Beds: "3 BEDS | 3.5 BATHS", Floors: "07-61", SqFt: "5,275 - 6,046", Price: "Contact Sales" },
            { Model: "RESIDENCE BENTAYGA", Beds: "3 BEDS | 3.5 BATHS", Floors: "07-61", SqFt: "5,249 - 6,020", Price: "Contact Sales" }
        ]
    },
    {
        id: 3,
        name: "Oasis Hallandale Beach",
        location: "Hallandale",
        commission: "6%",
        hoa: "Contact for details",
        contact: "Daria Tumanova (305-776-0148)",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
        inventory: [
            { Unit: "East 306", Beds: "1BD+DEN/1.5B", SqFt: "894", Price: "$759,900" },
            { Unit: "East 1209", Beds: "2BD/2B", SqFt: "1,179", Price: "$1,120,050" },
            { Unit: "East 1001", Beds: "3BD/3.5B", SqFt: "1,824", Price: "$1,696,320" },
            { Unit: "West 404", Beds: "1BD+DEN/1.5B", SqFt: "937", Price: "$740,230" },
            { Unit: "West 1502", Beds: "2BD/2.5B", SqFt: "1,182", Price: "$1,063,800" },
            { Unit: "West PH 2504", Beds: "4BD/4.5B", SqFt: "4,756", Price: "$4,756,000" }
        ]
    },
    {
        id: 4,
        name: "Viceroy Residences",
        location: "Miami Brickell",
        commission: "7%",
        hoa: "$1.50 per sq ft",
        contact: "Giselle Vergara (786-302-2925)",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
        inventory: [
            { Type: "City Flats", Beds: "Studio / 1 Bath", SqFt: "485 - 548", Price: "From $609,900" },
            { Type: "City Flats", Beds: "1 BD / 1 Bath", SqFt: "686 - 896", Price: "From $775,900" },
            { Type: "PH Units", Beds: "1 - 2 Bedrooms", SqFt: "670 - 1,286", Price: "From $1,050,900" },
            { Type: "Tower Units", Beds: "2 Bedrooms", SqFt: "1,030 - 1,286", Price: "From $1,284,900" }
        ]
    },
    {
        id: 5,
        name: "Ora by Casa Tua",
        location: "Miami",
        commission: "6%",
        hoa: "Contact Sales",
        contact: "Elizabeth Garcia Mikulski",
        image: "https://images.unsplash.com/photo-1613490908677-2269a9b152ce?auto=format&fit=crop&w=800&q=80",
        inventory: [
            { Type: "Studios", Size: "507-510 S.F.", Price: "Starting $900,000" },
            { Type: "One-Bedroom", Size: "670-817 S.F.", Price: "Starting $1,250,000" },
            { Type: "Two-Bedroom", Size: "1,011-1,109 S.F.", Price: "Starting $1,800,000" },
            { Type: "Three-Bedroom + Lib", Size: "1,825 S.F.", Price: "Starting $3,350,000" },
            { Type: "Four-Bedroom + Den", Size: "2,237 S.F.", Price: "Starting $3,990,000" }
        ]
    },
    {
        id: 6,
        name: "Mercedes-Benz Places",
        location: "Miami",
        commission: "6%",
        hoa: "$1.61 - $1.65 / sq ft",
        contact: "Contact Sales Team",
        image: "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80",
        inventory: [
            { Tower: "Tower 1 (South)", Type: "Studio", SqFt: "598-604", Price: "$745,500 - $795,500" },
            { Tower: "Tower 1 (South)", Type: "1 Bed", SqFt: "748-938", Price: "$1,275,500 - $1,745,500" },
            { Tower: "Tower 1 (South)", Type: "3 Bed", SqFt: "1,640-2,106", Price: "$2,795,500 - $3,335,500" },
            { Tower: "Tower 2 (North)", Type: "Studio", SqFt: "479-683", Price: "$685,500 - $995,500" },
            { Tower: "Tower 2 (North)", Type: "2 Bed", SqFt: "959-1,321", Price: "$1,425,500 - $2,665,500" }
        ]
    },
    {
        id: 7,
        name: "Lotus Edge",
        location: "Boca Raton",
        commission: "3%",
        hoa: "$814 / month",
        contact: "Deysi Verona (305-419-0825)",
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
        inventory: [
            { Model: "BERMUDA / 501", Beds: "3 Beds, 3 Baths", SqFt: "3,561", Price: "From $1,683,900" },
            { Model: "SAMOA / 50", Beds: "4 Beds, 4.5 Baths", SqFt: "4,094", Price: "From $1,848,900" },
            { Model: "HONOLULU / 59", Beds: "5 Beds, 5 Baths", SqFt: "4,741", Price: "From $1,928,900" },
            { Model: "CORSICA / 508", Beds: "5 Beds, 6.5 Baths", SqFt: "6,050", Price: "From $2,128,900" },
            { Model: "SANTORINI / 624", Beds: "5 Beds, 6.5 Baths", SqFt: "6,934", Price: "From $2,760,900" }
        ]
    },
    {
        id: 8,
        name: "Surf Row",
        location: "Miami Beach",
        commission: "5%",
        hoa: "Contact for Details",
        contact: "Chelsea Werner (305-586-5711)",
        image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80",
        inventory: [
            { Unit: "208 / N", Beds: "1 Bed + Den", SqFt: "1,089", Price: "$1,375,000" },
            { Unit: "210 / NW", Beds: "2 Bed + Den", SqFt: "1,484", Price: "$1,998,000" },
            { Unit: "301 / SE", Beds: "2 Bed + Den", SqFt: "1,435", Price: "$2,790,000" },
            { Unit: "302 / NE", Beds: "3 Beds", SqFt: "2,004", Price: "$3,536,000" }
        ]
    },
    {
        id: 9,
        name: "La Baia North",
        location: "Bay Harbor Islands",
        commission: "7% + $25k bonus",
        hoa: "$1.77 / sq ft",
        contact: "Limaris Vargas",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
        inventory: [
            { Unit: "302 Sunset", Beds: "2 Beds + Den", SqFt: "1,450", Price: "$1,554,000" },
            { Unit: "403 Waterfront", Beds: "3 Beds + Den", SqFt: "1,811", Price: "$3,551,000" },
            { Unit: "609 Waterfront", Beds: "4 Beds", SqFt: "2,111", Price: "$3,890,000" },
            { Unit: "LPH01 Waterfront", Beds: "4 Beds", SqFt: "2,076", Price: "$3,975,000" }
        ]
    },
    {
        id: 10,
        name: "THE WELL",
        location: "Bay Harbor Islands",
        commission: "6%",
        hoa: "$2.19 / sqft",
        contact: "Darcy Santos",
        image: "https://images.unsplash.com/photo-1600566753086-00f18efc2291?auto=format&fit=crop&w=800&q=80",
        inventory: [
            { Unit: "606A NORTH", Beds: "1 Bed/1.5 Baths", SqFt: "946", Price: "$1,515,000" },
            { Unit: "507 NORTH", Beds: "2 Bed/2.5 Baths", SqFt: "1,701", Price: "$2,675,000" },
            { Unit: "608 NE", Beds: "3 Bed/3.5 Baths", SqFt: "2,293", Price: "$3,850,000" },
            { Unit: "308 NE", Beds: "3 Bed/3.5 Baths", SqFt: "2,293", Price: "$3,395,000" }
        ]
    },
    {
        id: 11,
        name: "Glass House",
        location: "Boca Raton",
        commission: "3%",
        hoa: "Contact Sales",
        contact: "Bonnie Schwartz",
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=800&q=80",
        inventory: [
            { Unit: "23", Beds: "3 Beds / 3.5 Baths", SqFt: "3,235", Price: "$3,946,000" },
            { Unit: "51", Beds: "3 Beds / 3.5 Baths", SqFt: "3,085", Price: "$4,975,000" },
            { Unit: "81", Beds: "4 Beds / 4.5 Baths", SqFt: "3,540", Price: "$6,445,000" },
            { Unit: "93", Beds: "4 Beds / 4.5 Baths", SqFt: "3,685", Price: "$7,572,000" }
        ]
    },
    {
        id: 12,
        name: "Bay Harbor Towers",
        location: "Bay Harbor Islands",
        commission: "7%",
        hoa: "$1.56 / sq ft",
        contact: "Contact Sales Team",
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80",
        inventory: [
            { Unit: "604 NORTH", Beds: "3 + DEN / 4", SqFt: "3,224", Price: "$4,858,498" },
            { Unit: "702 SOUTH", Beds: "3 + DEN / 4", SqFt: "2,815", Price: "$4,504,000" },
            { Unit: "301 SOUTH", Beds: "4 + DEN / 5", SqFt: "3,221", Price: "$5,490,000" },
            { Unit: "803 NORTH", Beds: "4 + DEN / 7", SqFt: "4,587", Price: "$9,999,660" }
        ]
    },
    {
        id: 13,
        name: "Andare by Pininfarina",
        location: "Las Olas",
        commission: "5%",
        hoa: "$1.50 / sq ft",
        contact: "Gigi Giusti",
        image: "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?auto=format&fit=crop&w=800&q=80",
        inventory: [
            { Unit: "Penthouse 4", Beds: "5 Beds / 5.5 Baths", SqFt: "6,235", Price: "$16,000,000" },
            { Unit: "3102/03", Beds: "4 Beds / 4.5 Baths", SqFt: "3,964", Price: "$5,456,100" },
            { Unit: "2401", Beds: "4 Beds / 4 Baths", SqFt: "2,502", Price: "$3,949,400" },
            { Unit: "3105", Beds: "3 Beds / 3.5 Baths", SqFt: "2,190", Price: "$3,063,000" },
            { Unit: "2002", Beds: "2 Beds / 2.5 Baths", SqFt: "1,816", Price: "$2,216,900" }
        ]
    },
    {
        id: 14,
        name: "Sixth & Rio",
        location: "Fort Lauderdale",
        commission: "5%",
        hoa: "$1.16 / sq ft",
        contact: "Brett Perry",
        image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=800&q=80",
        inventory: [
            { Unit: "314", Beds: "1 Bed / 1 Bath", SqFt: "742", Price: "$799,000" },
            { Unit: "216", Beds: "1 Bed / 1.5 Bath + DEN", SqFt: "970", Price: "$950,000" },
            { Unit: "211", Beds: "2 Beds / 2 Baths", SqFt: "1144", Price: "$1,150,000" },
            { Unit: "208", Beds: "3 Beds / 3.5 Baths", SqFt: "2076", Price: "$2,595,000" },
            { Unit: "203", Beds: "4 Beds / 3 Baths", SqFt: "2296", Price: "$2,990,000" }
        ]
    },
    {
        id: 15,
        name: "Continuum Club",
        location: "North Bay Village",
        commission: "6% + $10k bonus",
        hoa: "$1.77 / SQ FT",
        contact: "Marla Cohen",
        image: "https://images.unsplash.com/photo-1542314831-c6a4d14eff62?auto=format&fit=crop&w=800&q=80",
        inventory: [
            { Type: "1 Bed + Den / 2 baths", Price: "Starting from $1,771,000" },
            { Type: "2 Bed / 2.5 baths", Price: "Starting from $1,825,000" },
            { Type: "2 Bed + Den / 2.5 baths", Price: "Starting from $2,592,000" },
            { Type: "3 Bed / 3.5 baths", Price: "Starting from $2,946,000" }
        ]
    },
    {
        id: 16,
        name: "Shoma Bay",
        location: "North Bay Village",
        commission: "6%",
        hoa: "$1.60 / sq Ft",
        contact: "Contact Sales Team",
        image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80",
        inventory: [
            { Unit: "PH04", Beds: "2 BEDS / 2.5 BATHS + DEN", SqFt: "1,979", Price: "$3,424,000" },
            { Unit: "PH16", Beds: "4 BEDS / 4.5", SqFt: "3,645", Price: "$5,545,000" },
            { Unit: "LPH-2508", Beds: "3 BED / 3.5 BATH", SqFt: "2,299", Price: "$3,190,000" },
            { Unit: "608", Beds: "1 BED / 1 BATH", SqFt: "750", Price: "$941,000" },
            { Unit: "312", Beds: "3 BEDS / 2 BATHS", SqFt: "1,443", Price: "$1,657,000" }
        ]
    },
    {
        id: 17,
        name: "Avenia FENDI Casa",
        location: "Aventura",
        commission: "5%",
        hoa: "Contact for details",
        contact: "Cindy Orlinsky",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
        inventory: [
            { Unit: "6 EAST", Beds: "3 Beds - 4.5 Baths", SqFt: "3,505", Price: "$5,750,000" },
            { Unit: "8 EAST", Beds: "3 Beds - 4.5 Baths", SqFt: "3,505", Price: "$5,950,000" },
            { Unit: "7 WEST", Beds: "4 Beds - 4.5 Baths", SqFt: "3,494", Price: "$5,450,000" },
            { Unit: "10 WEST", Beds: "4 Beds - 4.5 Baths", SqFt: "3,494", Price: "$5,750,000" }
        ]
    }
];

// --- RENDER PROJECT CARDS ---
const projectGrid = document.getElementById('project-grid');

const renderCards = () => {
    projectGrid.innerHTML = projectsData.map(project => `
        <div class="group relative bg-[#121214] rounded-xl border border-white/5 overflow-hidden transition-all duration-500 hover:border-brand-gold/30 hover:shadow-[0_10px_40px_rgba(212,175,55,0.1)] hover:-translate-y-2 flex flex-col h-full">
            
            <div class="relative h-72 overflow-hidden">
                <div class="absolute inset-0 bg-brand-darker/20 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                <img src="${project.image}" alt="${project.name}" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" loading="lazy" />
                
                <!-- Commission Tag -->
                <div class="absolute top-4 right-4 z-20 glass-panel px-3 py-1 rounded backdrop-blur-md border border-white/10">
                    <span class="text-xs font-bold font-heading text-brand-gold tracking-widest uppercase">
                        ${project.commission.includes('Domestic') ? '3%-5% Comm' : `Comm: ${project.commission}`}
                    </span>
                </div>

                <!-- Hover Action Indicator -->
                <div class="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40 backdrop-blur-[2px]">
                    <button onclick="openModal(${project.id})" class="px-6 py-3 border border-brand-gold text-brand-gold font-heading tracking-widest uppercase text-sm font-semibold hover:bg-brand-gold hover:text-black transition-colors rounded">
                        View Details
                    </button>
                </div>
            </div>
            
            <div class="p-8 flex flex-col flex-grow relative">
                <!-- Decorative top line -->
                <div class="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-brand-gold/0 via-brand-gold/50 to-brand-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div class="flex items-center text-gray-500 mb-3 text-xs font-semibold tracking-widest uppercase">
                    <svg class="w-3.5 h-3.5 mr-1.5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    ${project.location}
                </div>
                
                <h3 class="font-heading text-2xl font-bold text-white mb-6 group-hover:text-brand-gold transition-colors duration-300">${project.name}</h3>
                
                <div class="space-y-3 mb-8 flex-grow">
                    <div class="flex justify-between items-end border-b border-white/5 pb-2">
                        <span class="text-xs uppercase tracking-widest text-gray-500">Est. HOA</span>
                        <span class="font-medium text-gray-300 text-sm truncate max-w-[150px] text-right">${project.hoa}</span>
                    </div>
                </div>
                
                <button onclick="openModal(${project.id})" class="w-full text-center py-4 bg-white/5 hover:bg-brand-gold text-white hover:text-black uppercase tracking-widest text-xs font-bold rounded transition-all duration-300 border border-white/5 hover:border-brand-gold">
                    Inventory & Pricing
                </button>
            </div>
        </div>
    `).join('');
};

// --- MODAL LOGIC ---
const modal = document.getElementById('project-modal');
const modalContainer = document.getElementById('modal-container');

const openModal = (projectId) => {
    const project = projectsData.find(p => p.id === projectId);
    if (!project) return;

    document.getElementById('modal-title').textContent = project.name;
    document.getElementById('modal-location').textContent = project.location;
    document.getElementById('modal-image').src = project.image;
    document.getElementById('modal-image').alt = project.name;
    document.getElementById('modal-commission').textContent = project.commission;
    document.getElementById('modal-hoa').textContent = project.hoa;
    document.getElementById('modal-contact').textContent = project.contact;

    const inventoryContainer = document.getElementById('modal-inventory-container');

    if (project.inventory && project.inventory.length > 0) {
        const headers = Object.keys(project.inventory[0]);

        let tableHTML = `
            <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="bg-black/40 border-b border-white/10">
                            ${headers.map(header => `<th class="px-6 py-4 text-xs font-heading font-bold uppercase tracking-widest text-gray-400 border-r border-white/5 last:border-r-0">${header}</th>`).join('')}
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-white/5">
                        ${project.inventory.map(item => `
                            <tr class="hover:bg-white/5 transition-colors group">
                                ${headers.map((header, idx) => `
                                    <td class="px-6 py-4 text-sm ${idx === headers.length - 1 ? 'text-brand-gold font-medium' : 'text-gray-300'} border-r border-white/5 last:border-r-0">
                                        ${item[header]}
                                    </td>
                                `).join('')}
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
        inventoryContainer.innerHTML = tableHTML;
    } else {
        inventoryContainer.innerHTML = `
            <div class="p-10 text-center text-gray-500 italic text-sm border border-dashed border-white/10 m-4 rounded">
                Inventory data currently unavailable. Access coming soon.
            </div>
        `;
    }

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
    }, 300); // match duration-300
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
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
                // Change icon to 'X' (close)
                menuIconPath.setAttribute('d', 'M6 18L18 6M6 6l12 12');
            } else {
                mobileMenu.classList.add('hidden');
                // Change icon to hamburger (menu)
                menuIconPath.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
            }
        });

        // Close menu when a link is clicked
        const mobileLinks = mobileMenu.querySelectorAll('.mobile-link');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                menuIconPath.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
            });
        });
    }
});
