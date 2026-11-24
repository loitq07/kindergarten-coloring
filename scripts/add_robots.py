import json

path = 'src/data/templates/robots.ts'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

prefix = 'export const ROBOTS_TEMPLATES: ColoringTemplate[] = '
start = content.index(prefix) + len(prefix)
end = content.rindex(';')
items = json.loads(content[start:end])

new_items = [
    {
        'id': 'openclipart-toy-rocket',
        'titleVi': 'Tên Lửa Đồ Chơi Khám Phá Sao Hỏa',
        'titleEn': 'Toy Space Rocket to Mars',
        'category': 'robots',
        'difficulty': 'easy',
        'viewBox': '0 0 500 500',
        'regions': [],
        'imageUrl': '/templates/toy-rocket.svg',
        'tags': ['tên lửa', 'vũ trụ', 'sao hỏa', 'bé trai']
    },
    {
        'id': 'openclipart-rakete',
        'titleVi': 'Tàu Vũ Trụ Phóng Vào Không Gian',
        'titleEn': 'Space Rocket Launching',
        'category': 'robots',
        'difficulty': 'medium',
        'viewBox': '0 0 500 500',
        'regions': [],
        'imageUrl': '/templates/Rakete-lineart.svg',
        'tags': ['tàu vũ trụ', 'không gian', 'phi thuyền']
    },
    {
        'id': 'openclipart-robot-ganson',
        'titleVi': 'Người Máy Chiến Binh Ganson',
        'titleEn': 'Ganson Battle Robot',
        'category': 'robots',
        'difficulty': 'medium',
        'viewBox': '0 0 500 500',
        'regions': [],
        'imageUrl': '/templates/robot_ganson.svg',
        'tags': ['robot', 'người máy', 'chiến binh', 'bé trai']
    },
    {
        'id': 'openclipart-mech-man',
        'titleVi': 'Người Máy Cơ Khí Tương Lai',
        'titleEn': 'Futuristic Mechanical Robot Man',
        'category': 'robots',
        'difficulty': 'medium',
        'viewBox': '0 0 500 500',
        'regions': [],
        'imageUrl': '/templates/johnny_mech_man.svg',
        'tags': ['robot', 'cơ khí', 'tương lai', 'bé trai']
    },
    {
        'id': 'openclipart-acme-robots',
        'titleVi': 'Biệt Đội Robot Thông Minh',
        'titleEn': 'Acme Smart Robots Team',
        'category': 'robots',
        'difficulty': 'hard',
        'viewBox': '0 0 500 500',
        'regions': [],
        'imageUrl': '/templates/acme-robots.svg',
        'tags': ['robot', 'biệt đội', 'người máy', 'bé trai']
    },
    {
        'id': 'openclipart-planet-striker',
        'titleVi': 'Phi Thuyền Thám Hiểm Thiên Hà',
        'titleEn': 'Galaxy Explorer Spaceship',
        'category': 'robots',
        'difficulty': 'easy',
        'viewBox': '0 0 500 500',
        'regions': [],
        'imageUrl': '/templates/planet_striker.svg',
        'tags': ['phi thuyền', 'thiên hà', 'vũ trụ', 'bé trai']
    }
]

items.extend(new_items)
print('New total in robots:', len(items))

header = "import { ColoringTemplate } from '../../types';\n\nexport const ROBOTS_TEMPLATES: ColoringTemplate[] = "
new_content = header + json.dumps(items, ensure_ascii=False, indent=2) + ";\n"
with open(path, 'w', encoding='utf-8') as f:
    f.write(new_content)
print('Updated robots.ts successfully')
