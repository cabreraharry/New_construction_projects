import re

app_file = "app.js"

with open(app_file, "r") as f:
    text = f.read()

# Dictionary of Property ID to Image Array
phase_2_images = {
    7: [
        "https://www.glhomes.com/contentassets/9bddf1b44528414eba8420de4d954eaa/loe-sumatra-grand-hero-d2.jpg",
        "https://www.glhomes.com/contentassets/0db3f5dd1e2a48b0a7ee5a2ffdfe7377/loe-sumatra-grand-gr-k.jpg",
        "https://www.glhomes.com/siteassets/communities/lotus-edge/custom-pages/lux-residences-boca/gallery/ultra-modern-clubhouse.jpg"
    ],
    8: [
        "https://www.surfrowresidences.com/wp-content/uploads/2025/07/Surf-Row-1Drone-morning_4-scaled.jpg",
        "https://www.surfrowresidences.com/wp-content/uploads/2025/07/Surf-Row_5-scaled.jpg",
        "https://www.surfrowresidences.com/wp-content/uploads/2024/10/Surf-Row_70-scaled.jpg"
    ],
    9: [
        "https://labaiabayharbor.com/wp-content/uploads/2025/07/Copy-of-Bay-Harbor-PO-La-Baia_North-Tower-06-Rear_View-5000-x-4700-01-2-scaled-1.jpg",
        "https://labaiabayharbor.com/wp-content/uploads/2025/03/Copy-of-La-Baia-North_Club-Room-Daylight-scaled.jpg",
        "https://labaiabayharbor.com/wp-content/uploads/2025/03/Copy-of-La-Baia-North_Rooftop-Pool-scaled.jpg"
    ],
    10: [
        "https://i0.wp.com/www.thewellbayharbor.com/wp-content/uploads/TEA2314_KaneConcourse_S210_INT_GroundLobby_Final_2k-1.jpg?w=1600&quality=89&ssl=1",
        "https://i0.wp.com/www.thewellbayharbor.com/wp-content/uploads/TEA2314_KaneConcourse2_S410_INT_Resi08_KitchenLiving_Final5000.jpg?w=690&quality=89&ssl=1",
        "https://i0.wp.com/www.thewellbayharbor.com/wp-content/uploads/22.07.12_TEA2314_Kane-Concourse_Phase-2_Selects_Page_03_Image_0004.jpg?fit=1677%2C943&quality=89&ssl=1"
    ],
    11: [
        "https://glasshouseboca.com/wp-content/uploads/2025/07/HERO-HOME-2.png",
        "https://glasshouseboca.com/wp-content/uploads/2024/09/Living-Room-1.webp",
        "https://glasshouseboca.com/wp-content/uploads/2024/09/Rooftop-Vignette.webp"
    ]
}

for pid, images in phase_2_images.items():
    images_str = ',\n            '.join([f'"{img}"' for img in images])
    
    # Find Property by ID and replace its images array
    regex = re.compile(rf'(id:\s*{pid},.*?images:\s*\[)(.*?)(\])', re.DOTALL)
    match = regex.search(text)
    
    if match:
        text = text[:match.start(2)] + "\n            " + images_str + "\n        " + text[match.end(2):]
        print(f"Injected images for property {pid}.")
    else:
        print(f"Failed to find property {pid} images array.")

with open(app_file, "w") as f:
    f.write(text)
print("Finished Phase 2 app.js update.")
