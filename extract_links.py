import urllib.request
import re
import json

url = "https://docs.google.com/spreadsheets/d/1QFHqjVchOxsOqpQcW3sXEPO6hNhB_-3E6-2ld6W7s9k/htmlview?gid=1859065171"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})

try:
    with urllib.request.urlopen(req) as response:
        html = response.read().decode('utf-8')
        
        # In Google Sheets HTML output, links are usually within an <a> tag inside a table cell.
        # We can look for patterns like <td ...>...<a href="URL">TEXT</a>...</td>
        
        links = []
        # Find all a tags
        a_tags = re.findall(r'<a.*?href="(.*?)".*?>(.*?)</a>', html)
        for href, text in a_tags:
            # Clean up the google redirect URLs
            # They usually look like https://www.google.com/url?q=ACTUAL_URL&...
            if 'google.com/url?q=' in href:
                actual_url = href.split('q=')[1].split('&')[0]
                actual_url = urllib.parse.unquote(actual_url)
                if not actual_url.startswith('https://docs.google.com/spreadsheets'):
                    links.append({"text": text.strip(), "url": actual_url})
        
        # Deduplicate and print
        unique_links = []
        seen = set()
        for idx, l in enumerate(links):
            if l['url'] not in seen and l['text']:
                seen.add(l['url'])
                unique_links.append(l)
                print(f"{idx+1}. {l['text']}: {l['url']}")
                
except Exception as e:
    print(f"Error: {e}")
