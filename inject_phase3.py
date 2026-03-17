import re

app_file = "app.js"

with open(app_file, "r") as f:
    text = f.read()

# Dictionary of Property ID to Image Array
phase_3_images = {
    12: [
        "https://bayharbortowers.com/wp-content/uploads/2024/02/Canal.jpg",
        "https://bayharbortowers.com/wp-content/uploads/2024/01/BINYAN_PPG2747_BayHarborIsland_S320_EXT_HeroWater_Final_2K.jpg",
        "https://bayharbortowers.com/wp-content/uploads/2024/03/BINYAN_PPG2747_BayHarborIsland_S100_EXT_L3GardenExperience_Final3500.jpg"
    ],
    13: [
        "https://floridayimby.com/wp-content/uploads/2023/10/Related_Group-Andare-03-Hero_Night-02B-scaled.jpg",
        "https://floridayimby.com/wp-content/uploads/2023/10/Related_Group-Andare-02-Worms_Eye_View-02-scaled.jpg",
        "https://floridayimby.com/wp-content/uploads/2023/10/Related_Group-Andare-04-Hero_Day-02-scaled.jpg"
    ],
    14: [
        "https://sixthandrio.com/wp-content/uploads/2023/03/1031438580-Sixth-and-Rio-Full-Website-2023-Gallery-Renderings21-min.jpg",
        "https://sixthandrio.com/wp-content/uploads/2023/03/1031438580-Sixth-and-Rio-Full-Website-2023-Gallery-Renderings2-min.jpg",
        "https://sixthandrio.com/wp-content/uploads/2023/03/1031438580-Sixth-and-Rio-Full-Website-2023-Gallery-Renderings19-min.jpg"
    ],
    15: [
        "https://floridayimby.com/wp-content/uploads/2025/04/HERO-DUSK_Disclaimer-scaled.jpg",
        "https://floridayimby.com/wp-content/uploads/2023/12/ContinuumNBV_byWNY_v1-scaled.jpg",
        "https://floridayimby.com/wp-content/uploads/2023/12/ContinuumNBV_byWNY_v2-scaled.jpg"
    ],
    16: [
        "https://cdn.prod.website-files.com/60be753377a701a366693799/660c3585a3dee8f8301db16d_SBA1.jpg",
        "https://cdn.prod.website-files.com/60be753377a701a366693799/68ae109990191d3bbd399225_SHOMA%20NBV%20-%20POOL%20DECK%20AERIAL%20VIEW.webp",
        "https://cdn.prod.website-files.com/60be753377a701a366693799/68ae10c913fbab3f2e4b695f_SHOMA%20NBV%20-%20LOBBY-p-3200.webp"
    ],
    17: [
        "https://floridayimby.com/wp-content/uploads/2025/12/Avenia-Interiors-by-FENDI-Casa-Lobby-scaled.jpg",
        "https://floridayimby.com/wp-content/uploads/2025/12/Avenia-Interiors-by-FENDI-Casa-Lifestyle-Lounge-scaled.jpg",
        "https://floridayimby.com/wp-content/uploads/2025/12/Avenia-Interiors-by-FENDI-Casa-Card-Room-scaled.jpg"
    ]
}

for pid, images in phase_3_images.items():
    images_str = ',\n            '.join([f'"{img}"' for img in images])
    
    regex = re.compile(rf'(id:\s*{pid},.*?images:\s*\[)(.*?)(\])', re.DOTALL)
    match = regex.search(text)
    
    if match:
        text = text[:match.start(2)] + "\n            " + images_str + "\n        " + text[match.end(2):]
        print(f"Injected images for property {pid}.")
    else:
        print(f"Failed to find property {pid} images array.")

with open(app_file, "w") as f:
    f.write(text)
print("Finished Phase 3 app.js update. All 17 properties now have real custom images.")
