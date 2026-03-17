import re

with open("app.js", "r", encoding="utf-8") as f:
    text = f.read()

# Instead of regex matching the entire multiline string safely in python (which can be tricky),
# Let's just do a string replacement for the exact prefix "description: \""
def repl(match):
    # Match group 1 is the content of the description
    # We replace the surrounding "" with ``
    content = match.group(1)
    return f"description: `{content}`"

# Match "description: \"...\"" where ... can be multiline.
new_text = re.sub(r'description:\s*"([^"]*)"', repl, text, flags=re.DOTALL)

with open("app.js", "w", encoding="utf-8") as f:
    f.write(new_text)

print("Fixed descriptions in app.js")
