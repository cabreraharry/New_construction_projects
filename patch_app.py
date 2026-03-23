import json
import re

with open('links.json', 'r', encoding='utf-8') as f:
    links = json.load(f)

updates = {
    1: {"realName": "Greenview at Presidential", "commission": ""},
    2: {"realName": "Bentley Residences in Miami", "commission": "5%"},
    3: {"realName": "Oasis Hallandale Beach", "commission": "6%"},
    4: {"realName": "Viceroy Brickell Residences", "commission": "7%"},
    5: {"realName": "Ora by Casa Tua", "commission": "6%"},
    6: {"realName": "Mercedes-Benz Places Miami", "commission": "6%"},
    7: {"realName": "Lotus Edge Community", "commission": "3%"},
    8: {"realName": "Surf Row Residences", "commission": "5%"},
    9: {"realName": "La Baia North", "commission": "7% plus bonus $25,000"},
    10: {"realName": "THE WELL Bay Harbor Islands", "commission": "6%"},
    11: {"realName": "Glass House Boca Raton", "commission": "3%"},
    12: {"realName": "Bay Harbor Towers", "commission": "7%"},
    13: {"realName": "Andare Residences by Pininfarina", "commission": "5%"},
    14: {"realName": "Sixth&Rio —Fort Lauderdale", "commission": "5%"},
    15: {"realName": "Continuum Club & Residences in North Bay Village", "commission": "6% and $10k bonus"},
    16: {"realName": "Shoma Bay", "commission": "6%"},
    17: {"realName": "Avenia FENDI Casa Residences", "commission": "5%"}
}

with open('app.js', 'r', encoding='utf-8') as f:
    app_str = f.read()

# Instead of parsing the whole JS object, let's just use regex to replace specific properties for each id
for pid in range(1, 18):
    id_str = f"id: {pid},"
    
    # Check if id exists
    if id_str in app_str:
        start_idx = app_str.find(id_str)
        end_idx = app_str.find("},", start_idx)
        if end_idx == -1:
            end_idx = app_str.find("}\n];", start_idx)
            
        block = app_str[start_idx:end_idx]
        
        real_name = updates[pid]["realName"].replace('"', '\\"')
        commission = updates[pid]["commission"].replace('"', '\\"')
        res = json.dumps(links.get(str(pid), []))
        
        # Replace name
        block = re.sub(r'name:\s*".*?",', f'name: "{real_name}",', block)
        # Add commission right after location or name
        if 'commission:' not in block:
            block = re.sub(r'(name:\s*".*?",)', r'\1\n        commission: "'+commission+'",', block)
        
        # Add resources right after images array
        if 'resources:' not in block:
            # find images: [...]
            # this is easier to just append before the end of the block
            # we can just append it to the end of the block
            pass # wait, images is an array, it might span multiple lines.
            
        app_str = app_str[:start_idx] + block + app_str[end_idx:]
        
        # To handle resources cleanly, let's insert it before the closing brace of the object
        # Since end_idx is the closing brace... Wait.
        # Let's just do a regex replace for the whole `images: [...]` to also append resources.
        
with open('app.js', 'w', encoding='utf-8') as f:
    f.write(app_str)
