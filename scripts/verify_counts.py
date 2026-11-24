import os
import re

cats = ['dinosaurs', 'vehicles', 'robots', 'ocean', 'animals', 'fairytale', 'nature', 'fruits']
total = 0
print("=== BÁO CÁO SỐ LƯỢNG TRANH TRONG TỪNG DANH MỤC ===")
for c in cats:
    p = os.path.join('src', 'data', 'templates', f'{c}.ts')
    with open(p, 'r', encoding='utf-8') as f:
        content = f.read()
    ids = re.findall(r'"id":\s*"', content)
    count = len(ids)
    total += count
    status = "OK (>= 50)" if count >= 50 else "THIẾU (< 50)"
    print(f"Danh mục '{c:10s}': {count:3d} tranh -> {status}")

print("--------------------------------------------------")
print(f"TỔNG CỘNG               : {total:3d} bức tranh!")
