with open("app.js", "r", encoding="utf-8", errors="ignore") as f:
    text = f.read()

# Instead of regex, let's just do a manual state machine or split
# to safely replace description: "..." with `...`

lines = text.split('\n')
in_description = False
for i in range(len(lines)):
    if 'description: "' in lines[i] and not lines[i].rstrip().endswith('",'):
        lines[i] = lines[i].replace('description: "', 'description: `')
        in_description = True
    elif in_description:
        if lines[i].rstrip().endswith('",'):
            # Replace the last `"` with ```
            last_quote = lines[i].rfind('"')
            lines[i] = lines[i][:last_quote] + "`" + lines[i][last_quote+1:]
            in_description = False

new_text = '\n'.join(lines)

with open("app.js", "w", encoding="utf-8") as f:
    f.write(new_text)

print("Fixed app.js multiline descriptions.")
