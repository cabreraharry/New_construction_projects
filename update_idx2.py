import re

with open("index.html", "r", encoding="utf-8") as f:
    text = f.read()

# Replace the modal container and its contents
modal_regex = re.compile(r'<!-- Modal Content -->.*?<!-- Application Logic -->', re.DOTALL)

match = modal_regex.search(text)
if match:
    old_modal = match.group(0)
    
    new_modal = """<!-- Modal Content (Grand Showcase Split) -->
        <div class="relative w-full h-[95vh] max-w-[1600px] bg-brand-surface border border-white/10 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col lg:flex-row transform scale-95 transition-transform duration-300"
            id="modal-container">

            <!-- Close Button (Always visible top right) -->
            <button onclick="closeModal()"
                class="absolute top-4 right-4 z-50 w-10 h-10 bg-black/50 hover:bg-brand-gold text-white hover:text-black rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-300 group shadow-xl"
                aria-label="Close modal">
                <svg class="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                    </path>
                </svg>
            </button>

            <!-- LEFT PANEL: Image Gallery (65%) -->
            <div class="relative w-full lg:w-[65%] h-[40vh] lg:h-full flex-shrink-0 group bg-black">
                <!-- Main Image - No Dark Gradient Overlay Here! Let it be bright! -->
                <img id="modal-image" src="" alt="Project" class="w-full h-full object-cover transition-opacity duration-300" />
                
                <!-- Gentle bottom gradient just for the thumbnails -->
                <div class="absolute inset-0 top-auto h-32 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>

                <!-- Carousel Controls -->
                <button onclick="prevImage()" class="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/40 hover:bg-white text-white hover:text-black rounded-full flex items-center justify-center backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/20">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                </button>
                <button onclick="nextImage()" class="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/40 hover:bg-white text-white hover:text-black rounded-full flex items-center justify-center backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/20">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </button>

                <!-- Thumbnails Array (Bottom Center) -->
                <div id="modal-thumbnails" class="absolute bottom-6 left-0 right-0 flex justify-center gap-3 px-4 overflow-x-auto">
                    <!-- Injected via JS -->
                </div>
            </div>

            <!-- RIGHT PANEL: Rich Details & Fast Facts (35%) -->
            <div class="w-full lg:w-[35%] h-[60vh] lg:h-full overflow-y-auto custom-scrollbar bg-[#0f0f11] flex flex-col">
                
                <!-- Details Header -->
                <div class="p-8 pb-6 border-b border-white/5 sticky top-0 bg-[#0f0f11]/95 backdrop-blur-md z-10 pt-10">
                    <span id="modal-location"
                        class="inline-flex items-center px-2.5 py-1 rounded bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-[10px] font-bold uppercase tracking-widest mb-3">
                        <svg class="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        Location
                    </span>
                    <h2 id="modal-title" class="font-heading text-3xl font-bold text-white leading-tight">Project Name</h2>
                </div>

                <!-- Details Body -->
                <div class="p-8 flex-grow space-y-10">
                    
                    <!-- Description text -->
                    <div>
                        <p id="modal-description" class="text-gray-400 font-light leading-relaxed text-sm"></p>
                    </div>

                    <!-- Fast Facts Grid -->
                    <div>
                        <h4 class="text-[11px] font-bold text-brand-gold uppercase tracking-widest mb-4 flex items-center gap-3">
                            Fast Facts <div class="h-px bg-white/10 flex-grow"></div>
                        </h4>
                        
                        <div class="grid grid-cols-2 gap-x-6 gap-y-6">
                            <div>
                                <p class="text-[10px] text-gray-500 uppercase tracking-widest mb-1.5">Starting At</p>
                                <p id="modal-price" class="text-white font-medium text-lg"></p>
                            </div>
                            <div>
                                <p class="text-[10px] text-gray-500 uppercase tracking-widest mb-1.5">Property Type</p>
                                <p id="modal-type" class="text-white font-medium text-[15px]"></p>
                            </div>
                            <div>
                                <p class="text-[10px] text-gray-500 uppercase tracking-widest mb-1.5">Total Size Range</p>
                                <p id="modal-size" class="text-white font-medium text-[15px]"></p>
                            </div>
                            <div>
                                <p class="text-[10px] text-gray-500 uppercase tracking-widest mb-1.5">Estimated Delivery</p>
                                <p id="modal-delivery" class="text-white font-medium text-[15px]"></p>
                            </div>
                            <div class="col-span-2">
                                <p class="text-[10px] text-gray-500 uppercase tracking-widest mb-1.5">Developer</p>
                                <p id="modal-developer" class="text-white font-medium text-[15px]"></p>
                            </div>
                            <div class="col-span-2">
                                <p class="text-[10px] text-gray-500 uppercase tracking-widest mb-1.5">Architect</p>
                                <p id="modal-architect" class="text-white font-medium text-[15px]"></p>
                            </div>
                        </div>
                    </div>

                    <!-- Amenities List -->
                    <div>
                        <h4 class="text-[11px] font-bold text-brand-gold uppercase tracking-widest mb-4 flex items-center gap-3">
                            Key Features & Amenities <div class="h-px bg-white/10 flex-grow"></div>
                        </h4>
                        <ul id="modal-amenities" class="space-y-3">
                            <!-- Injected via JS -->
                        </ul>
                    </div>

                </div>

                <!-- Sticky CTA Bottom -->
                <div class="p-8 border-t border-white/5 bg-[#0a0a0b] sticky bottom-0">
                    <p class="text-xs text-gray-500 mb-4 text-center">Contact us to receive comprehensive floor plans and exact pricing for available units.</p>
                    <a href="https://usprimerealty.com/south-florida-real-estate/agents/" target="_blank" class="block w-full text-center px-6 py-4 bg-gold-gradient text-black font-semibold tracking-wider text-sm uppercase rounded shadow-[0_4px_20px_rgba(212,175,55,0.2)] hover:shadow-[0_4px_30px_rgba(212,175,55,0.4)] transition-all duration-300">
                        Inquire About Property
                    </a>
                </div>

            </div>
        </div>
    </div>

    <!-- Application Logic -->"""

    text = text.replace(old_modal, new_modal)
    
    with open("index.html", "w", encoding="utf-8") as f:
        f.write(text)
else:
    print("Could not find modal section.")
