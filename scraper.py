import requests
from bs4 import BeautifulSoup
import csv

# 1. Ana səhifədən HTML-i al
url = 'https://www.trend.az/'
response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')

# 2. Xəbər linklərini tap
xeber_linkler = soup.find_all('a')
xeberler = [ "https://www.trend.az/azerbaijan/politics/3834567.html",
    "https://www.trend.az/azerbaijan/society/3834559.html",
    "https://www.trend.az/business/economy/3834552.html",
    "https://www.trend.az/azerbaijan/incident/3834544.html",
    "https://www.trend.az/world/other/3834538.html",
    "https://www.trend.az/azerbaijan/politics/3834531.html",
    "https://www.trend.az/azerbaijan/society/3834525.html",
    "https://www.trend.az/business/economy/3834519.html",
    "https://www.trend.az/azerbaijan/incident/3834512.html",
    "https://www.trend.az/world/other/3834505.html",
    "https://www.trend.az/azerbaijan/politics/3834498.html",
    "https://www.trend.az/azerbaijan/society/3834491.html",
    "https://www.trend.az/business/economy/3834484.html",
    "https://www.trend.az/azerbaijan/incident/3834477.html",
    "https://www.trend.az/world/other/3834470.html",
    "https://www.trend.az/azerbaijan/politics/3834463.html",
    "https://www.trend.az/azerbaijan/society/3834456.html",
    "https://www.trend.az/business/economy/3834449.html",
    "https://www.trend.az/azerbaijan/incident/3834442.html",
    "https://www.trend.az/world/other/3834435.html"
]


for link in xeber_linkler:
    href = link.get('href')
    if (
        href and
        href.startswith('https://www.trend.az/') and
        '/az/' in href and
        href.count('/') > 4 and
        href.endswith('.html')
    ):
        xeberler.append(href)

print(f"🔗 Tapılan link sayı: {len(xeberler)}")

# 3. Hər linkdən başlıq və məzmunu çıxar
titles = []
contents = []

for xeber in xeberler:
    try:
        r = requests.get(xeber)
        s = BeautifulSoup(r.text, 'html.parser')
        title_tag = s.find('h1')
        content_tag = s.find('div', class_='article-content')
        if title_tag and content_tag:
            titles.append(title_tag.text.strip())
            contents.append(content_tag.text.strip())
        else:
            print(f"❌ Content tapılmadı: {xeber}")
    except Exception as e:
        print(f"⚠️ Xəta baş verdi: {xeber} → {e}")
        continue

# 4. CSV faylına yaz
with open('xeberler.csv', 'w', newline='', encoding='utf-8') as f:
    writer = csv.writer(f)
    writer.writerow(['title', 'content'])
    for t, c in zip(titles, contents):
        writer.writerow([t, c])

print("✅ xeberler.csv faylı yaradıldı!")