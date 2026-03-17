import re

app_file = "app.js"

with open(app_file, "r") as f:
    text = f.read()

# Dictionary of Property ID to Image Array
phase_1_images = {
    2: [
        "https://18401collinsavenue.com/wp-content/uploads/2025/06/card_building.jpg",
        "https://18401collinsavenue.com/wp-content/uploads/2025/06/card_east_residence.jpg",
        "https://18401collinsavenue.com/wp-content/uploads/2025/07/card_penthouse-1.jpg"
    ],
    3: [
        "https://www.dropbox.com/scl/fo/mwv8m1mwsqdsnwm9d8o4a/ABt1Hi9POOa4XKvmzjz0jSo/Oasis%20Hallandale%20-%20Broker%20Assets/Renderings/Exterior/Oasis%20Hallandale%203D%20Escale%20I.jpg?rlkey=gu24gf8wxdgspn0v0a64tgdhv&dl=1",
        "https://www.dropbox.com/scl/fo/mwv8m1mwsqdsnwm9d8o4a/AAP83RU7FDL3ZTkcX_Dws5c/Oasis%20Hallandale%20-%20Broker%20Assets/Renderings/Exterior/Oasis%20Hallandale%203D%20Escale%20II.jpg?rlkey=gu24gf8wxdgspn0v0a64tgdhv&dl=1",
        "https://www.dropbox.com/scl/fo/mwv8m1mwsqdsnwm9d8o4a/ALlx5-0FUGcjXjPivNx218c/Oasis%20Hallandale%20-%20Broker%20Assets/Renderings/Exterior/Oasis%20Hallandale%203D%20Escale%20III.jpg?rlkey=gu24gf8wxdgspn0v0a64tgdhv&dl=1"
    ],
    4: [
        "https://www.dropbox.com/scl/fo/nu4qzeazadh6qza2yucl8/ABowoA7nJ0t8nMxh8w9iVPQ/8.%20Renderings/Hi%20Res%20Renderings/Billiard%20Lounge_Delivery.JPG?rlkey=mquo1lfk7gb3lluo2f9h9ncpg&dl=1",
        "https://www.dropbox.com/scl/fo/nu4qzeazadh6qza2yucl8/AJapXZXMgVJr5IVPk-ZiNZY/8.%20Renderings/Hi%20Res%20Renderings/Club%20Room_Delivery.JPG?rlkey=mquo1lfk7gb3lluo2f9h9ncpg&dl=1",
        "https://www.dropbox.com/scl/fo/nu4qzeazadh6qza2yucl8/AEaX1almehCNyeEpqGU0vzo/8.%20Renderings/Hi%20Res%20Renderings/Fitness.jpg?rlkey=mquo1lfk7gb3lluo2f9h9ncpg&dl=1"
    ],
    5: [
        "https://www.dropbox.com/scl/fo/cefldg7lub10uaeilbsjj/AELUPnrhu1OD9EEu1PeKzBw/Renderings/HERO%20%26%20SKYLINE/Hero%20Daytime%20-%20ORA%20by%20Casa%20Tua.jpg?rlkey=h02to28akb2zeotrdeghg1eql&dl=1",
        "https://www.dropbox.com/scl/fo/cefldg7lub10uaeilbsjj/ADdtGzxPPT9Sj1Mo0-fLPL8/Renderings/HERO%20%26%20SKYLINE/Hero%20Nighttime%20-%20ORA%20by%20Casa%20Tua.jpg?rlkey=h02to28akb2zeotrdeghg1eql&dl=1",
        "https://www.dropbox.com/scl/fo/cefldg7lub10uaeilbsjj/AEew8c3ONBdG4jBpKNYHP6g/Renderings/HERO%20%26%20SKYLINE/Skyline%20Hero%20-%20ORA%20by%20Casa%20Tua.jpg?rlkey=h02to28akb2zeotrdeghg1eql&dl=1"
    ],
    6: [
        "https://www.dropbox.com/scl/fo/5l8hpbn22mgdwpiho63cv/AOxuZCU61ChIc-Majv_IcfM/Renderings/1.%20Hero%20East%2C%20Mercedes%20Benz%20Places%20Miami%2C%20JDS%20Development%20Group%2C%20by%20The%20Boundary.jpg?rlkey=ctzawz2mzdzierdos0g80aeu6&dl=1",
        "https://www.dropbox.com/scl/fo/5l8hpbn22mgdwpiho63cv/ACTZmkwiVBaDDcer1KDOGWQ/Renderings/2.%20Upshot%2C%20Mercedes%20Benz%20Places%20Miami%2C%20JDS%20Development%20Group%2C%20by%20The%20Boundary.jpg?rlkey=ctzawz2mzdzierdos0g80aeu6&dl=1",
        "https://www.dropbox.com/scl/fo/5l8hpbn22mgdwpiho63cv/AMLPe1DmgmeOt9YC7DAmiP0/Renderings/3.%20Porte%20Cochere%2C%20Mercedes-Benz%20Places%20Miami%2C%20JDS%20Development%20Group%2C%20by%20The%20Boundary.jpg?rlkey=ctzawz2mzdzierdos0g80aeu6&dl=1"
    ]
}

for pid, images in phase_1_images.items():
    images_str = ',\n            '.join([f'"{img}"' for img in images])
    
    # Find Property by ID and replace its images array
    # Regex breakdown: match id: X, then everything up to images: [, then the array contents, then the closing ]
    regex = re.compile(rf'(id:\s*{pid},.*?images:\s*\[)(.*?)(\])', re.DOTALL)
    match = regex.search(text)
    
    if match:
        text = text[:match.start(2)] + "\n            " + images_str + "\n        " + text[match.end(2):]
        print(f"Injected images for property {pid}.")
    else:
        print(f"Failed to find property {pid} images array.")

with open(app_file, "w") as f:
    f.write(text)
print("Finished Phase 1 app.js update.")
