import json
import re
import urllib.request

url = "https://linktr.ee/mshservicosmedicos"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
html = urllib.request.urlopen(req).read().decode('utf-8')

# Find all {"title":"...","url":"..."} objects in the HTML
matches = re.findall(r'"title":"(.*?)","url":"(https://chat\.whatsapp\.com/.*?)"', html)
for title, url in matches:
    print(f"{title}: {url}")
