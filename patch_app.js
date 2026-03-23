const fs = require('fs');

const links = require('./links.json');

const updates = {
    1: { realName: "Greenview at Presidential", commission: "" },
    2: { realName: "Bentley Residences in Miami", commission: "5%" },
    3: { realName: "Oasis Hallandale Beach", commission: "6%" },
    4: { realName: "Viceroy Brickell Residences", commission: "7%" },
    5: { realName: "Ora by Casa Tua", commission: "6%" },
    6: { realName: "Mercedes-Benz Places Miami", commission: "6%" },
    7: { realName: "Lotus Edge Community", commission: "3%" },
    8: { realName: "Surf Row Residences", commission: "5%" },
    9: { realName: "La Baia North", commission: "7% plus bonus $25,000" },
    10: { realName: "THE WELL Bay Harbor Islands", commission: "6%" },
    11: { realName: "Glass House Boca Raton", commission: "3%" },
    12: { realName: "Bay Harbor Towers", commission: "7%" },
    13: { realName: "Andare Residences by Pininfarina", commission: "5%" },
    14: { realName: "Sixth&Rio —Fort Lauderdale", commission: "5%" },
    15: { realName: "Continuum Club & Residences in North Bay Village", commission: "6% and $10k bonus" },
    16: { realName: "Shoma Bay", commission: "6%" },
    17: { realName: "Avenia FENDI Casa Residences", commission: "5%" }
};

let appStr = fs.readFileSync('app.js', 'utf8');

// We will use eval to parse the projectsData, then stringify and replace.
// But first we must extract just the projectsData string.
const startIdx = appStr.indexOf('const projectsData = [');
const endMarker = '];\n\n// --- APP STATE ---';
const endIdx = appStr.indexOf(endMarker) + 2;

const dataStr = appStr.substring(startIdx + 'const projectsData = '.length, endIdx);

// Evaluate it
let projectsData;
eval('projectsData = ' + dataStr);

// Modify
projectsData.forEach(p => {
    if (updates[p.id]) {
        p.name = updates[p.id].realName;
        p.commission = updates[p.id].commission;
    }
    if (links[p.id]) {
        p.resources = links[p.id];
    } else {
        p.resources = [];
    }
});

// Convert back to JS string
function escapeString(str) {
    if(!str) return '""';
    return '"' + str.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
}

let newJs = '[\n';
projectsData.forEach((p, i) => {
    newJs += '    {\n';
    newJs += `        id: ${p.id},\n`;
    newJs += `        name: ${escapeString(p.name)},\n`;
    newJs += `        location: ${escapeString(p.location)},\n`;
    newJs += `        type: ${escapeString(p.type)},\n`;
    newJs += `        hoa: ${escapeString(p.hoa)},\n`;
    newJs += `        contact: ${escapeString(p.contact)},\n`;
    newJs += `        startingPrice: ${escapeString(p.startingPrice)},\n`;
    newJs += `        size: ${escapeString(p.size)},\n`;
    newJs += `        developer: ${escapeString(p.developer)},\n`;
    newJs += `        architect: ${escapeString(p.architect)},\n`;
    newJs += `        delivery: ${escapeString(p.delivery)},\n`;
    newJs += `        description: \`${p.description}\`,\n`;
    
    newJs += `        commission: ${escapeString(p.commission)},\n`;
    
    newJs += `        amenities: ${JSON.stringify(p.amenities)},\n`;
    newJs += `        images: ${JSON.stringify(p.images, null, 12).replace(/\\n/g, '\n')},\n`;
    
    newJs += `        resources: ${JSON.stringify(p.resources, null, 12).replace(/\\n/g, '\n')}\n`;
    
    newJs += '    }' + (i < projectsData.length - 1 ? ',' : '') + '\n';
});
newJs += ']';

const updatedAppStr = appStr.substring(0, startIdx) + 'const projectsData = ' + newJs + appStr.substring(endIdx);
fs.writeFileSync('app.js', updatedAppStr);
console.log('Successfully patched app.js');
