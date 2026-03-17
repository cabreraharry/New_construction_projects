import re
import json

app_file = "app.js"

with open(app_file, "r") as f:
    text = f.read()

# Define genericized overrides
overrides = {
    1: {"name": "Aventura Area Estate", "developer": "Exclusive Builder", "architect": "Renowned Firm", "description": "A boutique collection of ultra-luxury single-family homes nestled within a pristine gated community. Highlights: \n• Lush, manicured landscapes\n• Massive open layouts\n• Call us for direct floor plans and to schedule a private tour."},
    2: {"name": "Sunny Isles Tower 1", "developer": "Luxury Developer", "architect": "Top Tier Architect", "description": "The world's first branded residential tower of its kind. Highlights:\n• Patented in-unit car elevator\n• Private oceanfront pools per unit\n• Unprecedented lifestyle overlooking the Atlantic Ocean\n• Call for exact unit availability and our exclusive buyer incentives."},
    3: {"name": "Hallandale High-Rise", "developer": "Premier Group", "architect": "Award-Winning Firm", "description": "A mixed-use destination featuring twin high-rise luxury towers spanning across 10 acres of prime real estate. Highlights:\n• Sweeping ocean views\n• Unparalleled on-site dining and retail\n• Call us immediately for first-access pricing."},
    4: {"name": "Brickell Oasis Residences", "developer": "Leading Developer", "architect": "International Architect", "description": "Situated in the heart of Brickell, seamlessly blending the energetic atmosphere of Miami’s financial district with refined hospitality services. Highlights:\n• Ultimate urban oasis\n• Resort-style rooftop\n• Call to discuss remaining inventory."},
    5: {"name": "Downtown Miami Suites", "developer": "Boutique Developer", "architect": "Modern Design Firm", "description": "An ethos of soulful living and exquisite culinary experiences. Highlights:\n• Short-term rental approved (incredible ROI potential)\n• Integrated dining and lounges\n• Call us to secure a high-floor unit before they sell out."},
    6: {"name": "Brickell Signature Tower", "developer": "Signature Developer", "architect": "Global Firm", "description": "An aerodynamically inspired design defining the Miami skyline. Highlights:\n• Lushly landscaped mobility hubs\n• Striking silver finishes\n• Call us for the verified price list and floor plans."},
    7: {"name": "Boca Modern Estates", "developer": "Luxury Builder", "architect": "Custom Design", "description": "Boca Raton's premier new ultra-modern luxury home community. Highlights:\n• 100% contemporary aesthetic\n• Massive open floor plans\n• Sprawling clubhouse\n• Call us today to tour the model homes privately."},
    8: {"name": "Surfside Beach Townhomes", "developer": "Boutique Group", "architect": "Renowned Designer", "description": "An ultra-boutique collection of modern, custom-crafted townhomes steps away from the sand. Highlights:\n• Enjoy the privacy of a single-family home\n• High-end finishes and rooftop space\n• Extremely limited supply - Call us now to reserve."},
    9: {"name": "Bay Harbor Waterfront 1", "developer": "Waterfront Developer", "architect": "Luxury Architect", "description": "A private waterfront harbor nestled within an exclusive, tranquil enclave. Highlights:\n• Expansive residences with glass walls\n• Sweeping vistas of Biscayne Bay\n• Call for exact dockage details and unit sizes."},
    10: {"name": "Bay Harbor Wellness Tower", "developer": "Wellness Developer", "architect": "Holistic Design Firm", "description": "Integrates holistic living directly into luxury real estate. Highlights:\n• Purified air and water systems\n• Restorative spas directly in the building\n• Call our team to find the perfect wellness-focused residence for you."},
    11: {"name": "Downtown Boca Glass Tower", "developer": "Premium Developer", "architect": "Contemporary Architect", "description": "A visionary glass masterpiece arriving in downtown Boca Raton. Highlights:\n• Only 28 exclusive, half-floor and full-floor residences\n• Seamless indoor-outdoor living\n• Incredible city views\n• Call us to secure one of the final remaining units."},
    12: {"name": "Bay Harbor Marina Residences", "developer": "Marina Developer", "architect": "Waterfront Design", "description": "A sanctuary of unparalleled exclusivity featuring wrap-around terraces and deep water marina access. Highlights:\n• Corner flow-through residences\n• Magnificent sunrise and sunset panoramas\n• Call to confirm slip availability."},
    13: {"name": "Las Olas Signature High Rise", "developer": "High Rise Group", "architect": "Italian Design Firm", "description": "Seamlessly merges high-performance automotive sleekness with tropical architecture in the core of Fort Lauderdale's Las Olas district. Highlights:\n• 10ft Floor-to-Ceiling Glass\n• Chef's Exhibition Kitchen\n• Call for our exclusive VIP viewing."},
    14: {"name": "Fort Lauderdale Riverfront", "developer": "Riverfront Group", "architect": "Local Architect", "description": "A boutique, luxury condominium nestled directly on the edge of the lively New River. Highlights:\n• Surrounded by historical charm\n• Steps away from prime shopping\n• Contact us for the full buyer's brochure."},
    15: {"name": "North Bay Village Estates", "developer": "Island Developer", "architect": "Resort Architect", "description": "Experience a curated resort lifestyle standing at the gateway of Miami, surrounded by glittering water on an exclusive island. Highlights:\n• Beach Club Equivalent Experience\n• Concierge Service\n• Call us to discuss early-bird pricing options."},
    16: {"name": "North Bay Village Waterfront", "developer": "Bay Developer", "architect": "Modern Architect", "description": "Beautifully integrates convenience with waterfront luxury. Highlights:\n• Spacious layouts\n• Panoramic vistas of the Miami Beach skyline\n• Built-in high-end grocery and food hall\n• Call us to tour the virtual reality model."},
    17: {"name": "Aventura Ultra Luxury", "developer": "Luxury Developer", "architect": "Global Firm", "description": "An incredibly exclusive enclave featuring interiors completely outfitted by a top Italian designer. Highlights:\n• Limited to only the most discerning buyers\n• Grand scale of living unseen anywhere else in the area\n• STRICTLY confidential. Call us for the property brief."}
}

# Extract projectsData array safely
match = re.search(r'const projectsData = (\[.*?\]);', text, re.DOTALL)
if match:
    data_str = match.group(1)
    # The javascript object string has unquoted keys, which fails json.loads.
    # We will use regex to replace specific properties in the string directly.
    
    for pid, vals in overrides.items():
        # Find the object with id: pid
        obj_regex = re.compile(rf'({{\s*id:\s*{pid},.*?}})', re.DOTALL)
        obj_match = obj_regex.search(data_str)
        if obj_match:
            obj_str = obj_match.group(1)
            
            # Replace name
            obj_str = re.sub(r'(name:\s*")[^"]*(")', rf'\g<1>{vals["name"]}\g<2>', obj_str)
            # Replace developer
            obj_str = re.sub(r'(developer:\s*")[^"]*(")', rf'\g<1>{vals["developer"]}\g<2>', obj_str)
            # Replace architect
            obj_str = re.sub(r'(architect:\s*")[^"]*(")', rf'\g<1>{vals["architect"]}\g<2>', obj_str)
            # Replace description - careful with multiline and newlines in js
            safe_desc = vals["description"].replace('\n', '\\n')
            obj_str = re.sub(r'(description:\s*")[^"]*(")', rf'\g<1>{safe_desc}\g<2>', obj_str)
            
            data_str = data_str.replace(obj_match.group(1), obj_str)
    
    # Write back to file
    text = text.replace(match.group(1), data_str)
    with open(app_file, "w") as f:
        f.write(text)
    print("Successfully anonymized app.js")
else:
    print("Could not find projectsData array.")
