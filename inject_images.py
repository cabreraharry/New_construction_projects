import re

app_file = "app.js"

with open(app_file, "r") as f:
    text = f.read()

real_images = [
    "https://www.dropbox.com/scl/fo/0m71qnjxbqdmyszzxkd4k/AEx94veF4A0p0iFXlv1wHVA/RENDERINGS/AMENITIES/Clubhouse%20Front%20View_LR%20REV1.jpg?rlkey=hnisv6lsp5dln8a5936pwr7as&raw=1",
    "https://www.dropbox.com/scl/fo/0m71qnjxbqdmyszzxkd4k/ALUyPpSKGjtBAObSPLloNuc/RENDERINGS/AMENITIES/Clubhouse%20Back%20View_LR%20REV1.jpg?rlkey=hnisv6lsp5dln8a5936pwr7as&raw=1",
    "https://www.dropbox.com/scl/fo/0m71qnjxbqdmyszzxkd4k/AKXiT3TXvomGl4dbLaQ1Dhc/RENDERINGS/AMENITIES/Future%20Clubhouse%20Aerial%20View.jpg?rlkey=hnisv6lsp5dln8a5936pwr7as&raw=1"
]

images_str = ',\n            '.join([f'"{img}"' for img in real_images])

# Find Property 1 and replace its images array
regex = re.compile(r'(id:\s*1,.*?images:\s*\[)(.*?)(\])', re.DOTALL)
match = regex.search(text)

if match:
    new_text = text[:match.start(2)] + "\n            " + images_str + "\n        " + text[match.end(2):]
    with open(app_file, "w") as f:
        f.write(new_text)
    print("Injected real Dropbox images for property 1.")
else:
    print("Failed to find property 1 images array.")

