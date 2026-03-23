const https = require('https');
const fs = require('fs');

const gids = [
    { id: 1, gid: "663355277" },
    { id: 2, gid: "1188350320" },
    { id: 3, gid: "379807544" },
    { id: 4, gid: "0" },
    { id: 5, gid: "1816198720" },
    { id: 6, gid: "226778465" },
    { id: 7, gid: "1658655984" },
    { id: 8, gid: "74827399" },
    { id: 9, gid: "835301348" },
    { id: 10, gid: "301637759" },
    { id: 11, gid: "1306770244" },
    { id: 12, gid: "582641399" },
    { id: 13, gid: "1436209573" },
    { id: 14, gid: "1472196663" },
    { id: 15, gid: "725196234" },
    { id: 16, gid: "864482029" },
    { id: 17, gid: "10456786" }
];

async function fetchHtml(gid) {
    return new Promise((resolve, reject) => {
        const url = `https://docs.google.com/spreadsheets/d/1w6dytvpkaIEG1D0K09C76hzZhxJDfvBc6fgcGw-jk1g/htmlview/sheet?headers=true&gid=${gid}`;
        https.get(url, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', reject);
    });
}

function extractLinks(html) {
    const linkRegex = /<a[^>]+href="([^"]+)"[^>]*>(.*?)<\/a>/g;
    let match;
    const links = [];
    while ((match = linkRegex.exec(html)) !== null) {
        let url = match[1];
        if (url.includes('google.com/url?q=')) {
            url = decodeURIComponent(url.split('q=')[1].split('&')[0]);
        }
        const text = match[2].replace(/<\/?[^>]+(>|$)/g, "").trim();
        // Skip irrelevant links
        if (url && text && text.trim() !== '' && !text.includes('1w6dytvpkaIEG')) {
            links.push({ title: text, url: url });
        }
    }
    return links;
}

async function main() {
    const results = {};
    for (const item of gids) {
        try {
            const html = await fetchHtml(item.gid);
            const links = extractLinks(html);
            results[item.id] = links;
        } catch(e) {
            results[item.id] = [];
            console.error("error for gid", item.gid, e);
        }
    }
    fs.writeFileSync('C:\\Users\\harrycabrera\\Projects\\USPR New Construction Project\\links.json', JSON.stringify(results, null, 2));
    console.log("Done extracting links!");
}

main();
