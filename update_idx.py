import re

with open("index.html", "r", encoding="utf-8") as f:
    text = f.read()

# 1. Add Filter container
old_grid = '''            <!-- Project Grid -->
            <div id="project-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-14">'''

new_grid = '''            <!-- Filters -->
            <div id="filter-container" class="mb-12 flex flex-col md:flex-row items-center justify-center gap-4 flex-wrap">
                <!-- Filters injected via JS -->
            </div>

            <!-- Project Grid -->
            <div id="project-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-14">'''

text = text.replace(old_grid, new_grid)

# 2. Update Modal 
# From: <!-- Modal Header with Image --> down to modal body close.
modal_regex = re.compile(r'<!-- Modal Header with Image -->.*?(?=</div>\s*</div>\s*</div>\s*<!-- Application Logic -->)', re.DOTALL)

match = modal_regex.search(text)
if match:
    old_modal = match.group(0)
    new_modal = """<!-- Modal Header with Image Carousel -->
            <div class="relative h-64 sm:h-80 w-full flex-shrink-0 group">
                <img id="modal-image" src="" alt="Project" class="w-full h-full object-cover transition-opacity duration-300" />
                <div class="absolute inset-0 bg-gradient-to-t from-brand-surface via-brand-surface/40 to-transparent pointer-events-none"></div>

                <!-- Carousel Controls -->
                <button onclick="prevImage()" class="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-brand-gold text-white hover:text-black rounded-full flex items-center justify-center backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                </button>
                <button onclick="nextImage()" class="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-brand-gold text-white hover:text-black rounded-full flex items-center justify-center backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </button>

                <!-- Carousel Indicators -->
                <div id="modal-indicators" class="absolute bottom-28 left-0 right-0 flex justify-center gap-2"></div>

                <div class="absolute bottom-6 left-6 right-6 pointer-events-none">
                    <span id="modal-location"
                        class="inline-flex items-center px-3 py-1 rounded bg-black/60 border border-white/10 text-brand-gold text-xs font-semibold uppercase tracking-widest backdrop-blur-md mb-3">
                        <svg class="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
                            </path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        Location
                    </span>
                    <h2 id="modal-title" class="font-heading text-3xl sm:text-5xl font-bold text-white drop-shadow-lg">
                        Project Name</h2>
                </div>
            </div>

            <!-- Modal Body (Scrollable) -->
            <div class="p-6 sm:p-10 overflow-y-auto custom-scrollbar flex-grow bg-brand-surface">
                <div class="max-w-4xl mx-auto space-y-8 text-center">
                    
                    <h4 class="font-heading font-bold text-white uppercase tracking-widest text-lg md:text-xl flex items-center justify-center">
                        <span class="w-2 h-2 bg-brand-gold rounded-full mr-3"></span>
                        Basic Specifics
                        <span class="w-2 h-2 bg-brand-gold rounded-full ml-3"></span>
                    </h4>

                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-left">
                        <div class="glass-panel p-4 md:p-6 rounded-lg border border-white/5">
                            <p class="text-xs text-gray-500 uppercase tracking-widest mb-2 font-medium">Property Type</p>
                            <p id="modal-type" class="text-white font-medium text-lg"></p>
                        </div>
                        <div class="glass-panel p-4 md:p-6 rounded-lg border border-white/5">
                            <p class="text-xs text-gray-500 uppercase tracking-widest mb-2 font-medium">Starting At</p>
                            <p id="modal-price" class="text-brand-gold font-bold text-xl drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]"></p>
                        </div>
                        <div class="glass-panel p-4 md:p-6 rounded-lg border border-white/5">
                            <p class="text-xs text-gray-500 uppercase tracking-widest mb-2 font-medium">Size</p>
                            <p id="modal-size" class="text-white font-medium text-sm"></p>
                        </div>
                        <div class="glass-panel p-4 md:p-6 rounded-lg border border-white/5 overflow-hidden">
                            <p class="text-xs text-gray-500 uppercase tracking-widest mb-2 font-medium">HOA Details</p>
                            <p id="modal-hoa" class="text-white font-medium text-sm truncate" title="Hover to see full text"></p>
                        </div>
                    </div>

                    <div class="mt-12 p-8 bg-gradient-to-r from-brand-darker via-brand-gold/5 to-brand-darker rounded-xl border border-brand-gold/20 flex flex-col items-center">
                        <h5 class="text-2xl font-heading font-bold text-white mb-4">Interested in <span id="modal-cta-title" class="text-brand-gold"></span>?</h5>
                        <p class="text-gray-400 mb-8 max-w-lg mx-auto">Contact us to receive comprehensive floor plans, exact pricing for available units, and a private tour of the development.</p>
                        <div class="flex flex-col sm:flex-row gap-4">
                            <a href="https://usprimerealty.com/south-florida-real-estate/agents/" target="_blank" class="px-8 py-4 bg-gold-gradient text-black font-semibold tracking-wider text-sm uppercase rounded hover:shadow-[0_4px_25px_rgba(212,175,55,0.4)] transition-all duration-300">
                                Contact Sales Agent
                            </a>
                        </div>
                    </div>
                </div>"""
    text = text.replace(old_modal, new_modal)
    
    with open("index.html", "w", encoding="utf-8") as f:
        f.write(text)
else:
    print("Could not find modal section.")
