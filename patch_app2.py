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

# We need to add 'commission' and 'resources' to each project object.
import ast

def process_block(block, pid):
    real_name = updates[pid]["realName"].replace('"', '\\"')
    commission = updates[pid]["commission"].replace('"', '\\"')
    res = json.dumps(links.get(str(pid), []), indent=12)
    
    # Replace name
    block = re.sub(r'name:\s*".*?",', f'name: "{real_name}",', block)
    
    # Add commission
    if 'commission:' not in block:
        block = re.sub(r'(name:\s*".*?",)', r'\1\n        commission: "'+commission+'",', block)
        
    return block

new_app_str = ""
parts = app_str.split("id: ")
new_app_str += parts[0]
for part in parts[1:]:
    pid_str = part.split(",")[0].strip()
    try:
        pid = int(pid_str)
        # the part goes until the end of the object
        # we can just find the end of the array inside it (images: [...]\n    })
        # let's just use string replace on `name:` and append `resources` before the end `    }`
        
        # Replace name and add commission
        real_name = updates[pid]["realName"].replace('"', '\\"')
        commission = updates[pid]["commission"].replace('"', '\\"')
        res = json.dumps(links.get(str(pid), []), indent=12)
        res = res.replace('\n', '\n        ')
        
        part = re.sub(r'name:\s*".*?",', f'name: "{real_name}",', part)
        part = re.sub(r'(name:\s*".*?",)', r'\1\n        commission: "'+commission+'",', part)
        
        # Now add resources. We look for images: [\n ... \n        ]
        # and replace it with images: [\n ... \n        ],\n        resources: [...]
        part = re.sub(r'(images:\s*\[[\s\S]*?\])', r'\1,\n        resources: ' + res, part)
        
        new_app_str += "id: " + part
    except Exception as e:
        new_app_str += "id: " + part

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(new_app_str)
print("done")
