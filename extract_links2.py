import urllib.request
import re
import urllib.parse
from bs4 import BeautifulSoup # Might not be installed, let's use regex

url = "https://docs.google.com/spreadsheets/d/1QFHqjVchOxsOqpQcW3sXEPO6hNhB_-3E6-2ld6W7s9k/htmlview?gid=1859065171"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})

try:
    with urllib.request.urlopen(req) as response:
        html = response.read().decode('utf-8')
        
        # Output raw hrefs for debugging
        a_tags = re.findall(r'<a.*?href="(.*?)".*?>(.*?)</a>', html, flags=re.IGNORECASE)
        print(f"Found {len(a_tags)} links")
        for href, text in a_tags:
            print(f"HREF: {href}")
            print(f"TEXT: {text.strip()}")
            if 'q=' in href:
                try:
                    q = href.split('q=')[1].split('&')[0]
                    decoded = urllib.parse.unquote(q)
                    print(f"  -> {decoded}")
                except:
                    pass

except Exception as e:
    print(f"Error: {e}")
