import glob
import re
import os

tmpl_files = glob.glob('src/data/templates/*.ts')
missing = []
found = []

for tf in tmpl_files:
    if 'index.ts' in tf:
        continue
    content = open(tf, 'r', encoding='utf-8').read()
    # Match both "imageUrl": "..." and imageUrl: "..."
    urls = re.findall(r'["\']?imageUrl["\']?\s*:\s*[\'"]([^\'"]+)[\'"]', content)
    for u in urls:
        path = u.lstrip('/')
        full_path = os.path.join('public', path)
        if not os.path.exists(full_path):
            missing.append((tf, u))
        else:
            found.append((tf, u))

print(f"Total checked: {len(found) + len(missing)}")
print(f"Found: {len(found)}")
print(f"Missing: {len(missing)}")
if missing:
    for tf, u in missing[:10]:
        print(f"  Missing in {tf}: {u}")
