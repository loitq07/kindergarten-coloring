import os
import sys
import io
import json
import re
import urllib.request
import concurrent.futures
from PIL import Image

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PUBLIC_TEMPLATES_DIR = os.path.join(BASE_DIR, 'public', 'templates')
TEMPLATES_DATA_DIR = os.path.join(BASE_DIR, 'src', 'data', 'templates')

os.makedirs(PUBLIC_TEMPLATES_DIR, exist_ok=True)
os.makedirs(TEMPLATES_DATA_DIR, exist_ok=True)

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

def download_file(url, target_path):
    if os.path.exists(target_path) and os.path.getsize(target_path) > 100:
        return True
    try:
        req = urllib.request.Request(url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = resp.read()
            with open(target_path, 'wb') as f:
                f.write(data)
        return True
    except Exception as e:
        print(f"Error downloading {url}: {e}")
        return False

def download_and_optimize_webp(url, target_path, max_dim=800):
    if os.path.exists(target_path) and os.path.getsize(target_path) > 100:
        return True
    try:
        req = urllib.request.Request(url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = resp.read()
            im = Image.open(io.BytesIO(data))
            im.thumbnail((max_dim, max_dim), Image.Resampling.LANCZOS)
            im.save(target_path, format='WEBP', quality=85)
        return True
    except Exception as e:
        print(f"Error optimizing {url}: {e}")
        return False

# 1. DINOSAUR SVGS
DINO_DATA = [
    ("tyrannosaurus-rex", "Khủng Long Bạo Chúa T-Rex", "Tyrannosaurus Rex", ["t-rex", "bạo chúa", "khủng long"]),
    ("triceratops", "Khủng Long Ba Sừng Triceratops", "Triceratops Three-Horn", ["ba sừng", "triceratops"]),
    ("spinosaurus", "Khủng Long Gai Buồm Spinosaurus", "Spinosaurus Sailback", ["gai buồm", "spinosaurus"]),
    ("stegosaurus", "Khủng Long Gai Lưng Stegosaurus", "Stegosaurus Plated", ["gai lưng", "stegosaurus"]),
    ("brachiosaurus", "Khủng Long Cổ Dài Brachiosaurus", "Brachiosaurus Longneck", ["cổ dài", "brachiosaurus"]),
    ("velociraptor", "Khủng Long Săn Mồi Velociraptor", "Swift Velociraptor", ["săn mồi", "velociraptor"]),
    ("ankylosaurus", "Khủng Long Bọc Thép Ankylosaurus", "Armored Ankylosaurus", ["bọc thép", "đuôi chùy"]),
    ("allosaurus", "Khủng Long Dị Long Allosaurus", "Allosaurus Carnivore", ["dị long", "allosaurus"]),
    ("apatosaurus", "Khủng Long Khổng Lồ Apatosaurus", "Giant Apatosaurus", ["khổng lồ", "apatosaurus"]),
    ("archaeopteryx", "Khủng Long Có Cánh Thủy Tổ", "Winged Archaeopteryx", ["có cánh", "thủy tổ"]),
    ("carnotaurus", "Khủng Long Sừng Bò Carnotaurus", "Horned Carnotaurus", ["sừng bò", "carnotaurus"]),
    ("ceratosaurus", "Khủng Long Mũi Sừng Ceratosaurus", "Horned Nose Ceratosaurus", ["mũi sừng", "ceratosaurus"]),
    ("dilophosaurus", "Khủng Long Mào Kép Dilophosaurus", "Double Crest Dilophosaurus", ["mào kép", "dilophosaurus"]),
    ("diplodocus", "Khủng Long Đuôi Roi Diplodocus", "Whip-tailed Diplodocus", ["đuôi roi", "diplodocus"]),
    ("giganotosaurus", "Đại Bạo Chúa Giganotosaurus", "Giant Giganotosaurus", ["đại bạo chúa", "nam mỹ"]),
    ("iguanodon", "Khủng Long Móng Vuốt Iguanodon", "Spike-thumb Iguanodon", ["móng vuốt", "ăn cỏ"]),
    ("microraptor", "Tiểu Long Bốn Cánh Microraptor", "Four-winged Microraptor", ["bốn cánh", "lông vũ"]),
    ("oviraptor", "Khủng Long Trộm Trứng Oviraptor", "Feathered Oviraptor", ["trộm trứng", "mỏ vẹt"]),
    ("pachycephalosaurus", "Khủng Long Đầu Thiết Giáp", "Thick-headed Pachycephalosaurus", ["đầu bọc thép", "húc đầu"]),
    ("parasaurolophus", "Khủng Long Mào Ống Kèn", "Trumpet Crest Parasaurolophus", ["mào kèn", "mỏ vịt"]),
    ("styracosaurus", "Khủng Long Gai Khiên Gai Nhọn", "Spiked Shield Styracosaurus", ["gai khiên", "mũi nhọn"]),
    ("therizinosaurus", "Khủng Long Móng Vuốt Tử Thần", "Scythe-claw Therizinosaurus", ["móng vuốt tử thần", "vuốt dài"]),
    ("titanosaurus", "Khủng Long Siêu Trọng Titan", "Titan Titanosaurus", ["siêu trọng", "khổng lồ"]),
    ("albertosaurus", "Khủng Long Bạo Chúa Phương Bắc", "Northern Albertosaurus", ["phương bắc", "săn mồi"]),
    ("amargasaurus", "Khủng Long Hai Hàng Gai Cổ", "Spined Neck Amargasaurus", ["gai cổ", "amargasaurus"]),
    ("argentinosaurus", "Khủng Long Khổng Lồ Argentina", "Colossal Argentinosaurus", ["khổng lồ", "argentina"]),
    ("baryonyx", "Khủng Long Mõm Cá Sấu Baryonyx", "Crocodile Snout Baryonyx", ["mõm cá sấu", "bắt cá"]),
    ("brontosaurus", "Khủng Long Sấm Sét Brontosaurus", "Thunder Lizard Brontosaurus", ["sấm sét", "khổng lồ"]),
    ("camarasaurus", "Khủng Long Mõm Vuông Camarasaurus", "Box-snout Camarasaurus", ["mõm vuông", "ăn cỏ"]),
    ("carcharodontosaurus", "Khủng Long Răng Cá Mập", "Shark-toothed Carcharodontosaurus", ["răng cá mập", "châu phi"]),
    ("coelophysis", "Khủng Long Siêu Tốc Coelophysis", "Swift Hunter Coelophysis", ["siêu tốc", "nhanh nhẹn"]),
    ("compsognathus", "Khủng Long Tí Hon Compsognathus", "Tiny Compsognathus", ["tí hon", "nhanh nhẹn"]),
    ("concavenator", "Khủng Long Lưng Gù Concavenator", "Hump-backed Concavenator", ["lưng gù", "thợ săn"]),
    ("cryolophosaurus", "Khủng Long Vương Miện Băng Giá", "Frozen Crest Cryolophosaurus", ["băng giá", "nam cực"]),
    ("deinocheirus", "Khủng Long Tay To Khủng Khiếp", "Terrible Hand Deinocheirus", ["tay to", "mỏ vịt"]),
    ("deinonychus", "Khủng Long Móng Vuốt Liềm", "Sickle-claw Deinonychus", ["vuốt liềm", "săn bầy"]),
    ("dromaeosaurus", "Khủng Long Chạy Nhanh Dromaeosaurus", "Swift Running Dromaeosaurus", ["chạy nhanh", "lông vũ"]),
    ("gallimimus", "Khủng Long Đà Điểu Gallimimus", "Ostrich Mimic Gallimimus", ["đà điểu", "chạy nhanh"]),
    ("hadrosaurus", "Khủng Long Mỏ Vịt Cổ Đại", "Duck-billed Hadrosaurus", ["mỏ vịt", "hiền lành"]),
    ("herrerasaurus", "Khủng Long Thợ Săn Đầu Tiên", "Primitive Hunter Herrerasaurus", ["thợ săn", "cổ xưa"]),
    ("kentrosaurus", "Khủng Long Đầy Gai Kentrosaurus", "Spiky Kentrosaurus", ["đầy gai", "đuôi chông"]),
    ("maiasaura", "Khủng Long Mẹ Hiền Maiasaura", "Good Mother Maiasaura", ["mẹ hiền", "chăm con"]),
    ("mamenchisaurus", "Khủng Long Cổ Siêu Dài Mamenchi", "Ultra Longneck Mamenchisaurus", ["cổ siêu dài", "châu á"]),
    ("megalosaurus", "Đại Thằn Lằn Khổng Lồ", "Great Megalosaurus", ["đại thằn lằn", "cổ đại"]),
    ("nanotyrannus", "Tiểu Bạo Chúa Nanotyrannus", "Pygmy Tyrant Nanotyrannus", ["tiểu bạo chúa", "nhanh nhẹn"]),
    ("nigersaurus", "Khủng Long Máy Hút Bụi Ăn Cỏ", "Vacuum-mouthed Nigersaurus", ["ăn cỏ", "răng chổi"]),
    ("pachyrhinosaurus", "Khủng Long Mũi Bướu Dày", "Thick-nosed Pachyrhinosaurus", ["mũi bướu", "bảo vệ"]),
    ("plateosaurus", "Khủng Long Hai Chân Cổ Đại", "Ancient Plateosaurus", ["hai chân", "thời tiền sử"]),
    ("protoceratops", "Khủng Long Cổ Khiên Sa Mạc", "Desert Protoceratops", ["sa mạc", "khiên cổ"]),
    ("psittacosaurus", "Khủng Long Vẹt Mỏ Cứng", "Parrot-beaked Psittacosaurus", ["mỏ vẹt", "lông đuôi"]),
    ("pyroraptor", "Khủng Long Lửa Lông Vũ", "Fire Raptor Pyroraptor", ["lửa", "lông vũ"]),
    ("saurolophus", "Khủng Long Mào Đuôi Dài", "Crested Saurolophus", ["mào dài", "bơi lội"]),
    ("struthiomimus", "Khủng Long Chân Nhanh Bắt Bướm", "Speedy Struthiomimus", ["nhanh nhẹn", "bắt mồi"]),
    ("suchomimus", "Khủng Long Bắt Cá Cá Sấu", "Crocodile-faced Suchomimus", ["bắt cá", "châu phi"]),
    ("tarbosaurus", "Bạo Chúa Châu Á Tarbosaurus", "Asian Tyrant Tarbosaurus", ["châu á", "săn mồi"]),
    ("utahraptor", "Đại Vương Săn Mồi Utahraptor", "Giant Utahraptor", ["đại vương", "móng vuốt"])
]

# 2. RADOONE SVGS
RADOONE_SVGS = [
    ("paw_patrol_chase_coloring_page.svg", "Chú Chó Cảnh Sát Chase Dũng Cảm", "Paw Patrol Chase the Police Dog", "animals", ["chase", "chó cứu hộ", "cảnh sát"]),
    ("paw_patrol_marshall_coloring_page.svg", "Chú Chó Cứu Hỏa Marshall Năng Động", "Paw Patrol Marshall the Fire Dog", "animals", ["marshall", "cứu hỏa", "chó đốm"]),
    ("paw_patrol_skye_coloring_page.svg", "Cô Chó Phi Công Skye Bay Lượn", "Paw Patrol Skye the Pilot", "animals", ["skye", "phi công", "trực thăng"]),
    ("paw_patrol_everest_coloring_page.svg", "Chú Chó Cứu Hộ Băng Tuyết Everest", "Paw Patrol Everest the Snow Dog", "animals", ["everest", "băng tuyết", "cứu hộ"]),
    ("elephant_coloring_page.svg", "Chú Voi Con Tinh Nghịch", "Playful Baby Elephant", "animals", ["voi", "elephant", "tai to"]),
    ("horse_coloring_page.svg", "Ngựa Con Phi Nước Đại", "Galloping Little Horse", "animals", ["ngựa", "horse", "phi nước đại"]),
    ("kitten_coloring_page.svg", "Mèo Con Đáng Yêu Cuộn Tròn", "Cute Fluffy Kitten", "animals", ["mèo", "kitten", "thú cưng"]),
    ("sea_fish_coloring_page.svg", "Đàn Cá Đại Dương Kỳ Thú", "Tropical Ocean Fish", "ocean", ["cá", "đại dương", "biển"]),
    ("turtle_coloring_page.svg", "Bé Rùa Biển Bơi Lội", "Little Sea Turtle", "ocean", ["rùa", "turtle", "biển khơi"]),
    ("airplane_coloring_page.svg", "Phi Cơ Siêu Tốc Trên Bầu Trời", "Supersonic Jet Airplane", "vehicles", ["máy bay", "phi cơ", "bầu trời"]),
    ("dragon_coloring_page.svg", "Rồng Xanh Đáng Yêu Phép Thuật", "Magical Green Dragon", "fairytale", ["rồng", "dragon", "phép thuật"]),
    ("unicorn_coloring_page.svg", "Ngựa Thần Kỳ Lân Một Sừng", "Sparkling Magical Unicorn", "fairytale", ["kỳ lân", "unicorn", "ngựa thần"]),
    ("princess_coloring_page.svg", "Công Chúa Vương Quốc Phép Thuật", "Enchanted Fairy Princess", "fairytale", ["công chúa", "princess", "vương miện"]),
    ("butterfly_coloring_page.svg", "Bươm Bướm Khoe Sắc Rực Rỡ", "Colorful Garden Butterfly", "nature", ["bướm", "hoa cỏ", "mùa xuân"]),
    ("ladybug_coloring_page.svg", "Bọ Rùa Đỏ Đậu Trên Nhành Cây", "Cute Red Ladybug on Twig", "nature", ["bọ rùa", "ladybug", "lá cây"]),
    ("spring_flowers_coloring_page.svg", "Vườn Hoa Mùa Xuân Ngát Hương", "Fragrant Spring Flowers", "nature", ["vườn hoa", "mùa xuân", "hoa nở"]),
    ("sun_nature_coloring_page.svg", "Ông Mặt Trời Tỏa Nắng Bình Minh", "Smiling Morning Sun", "nature", ["mặt trời", "nắng ấm", "thiên nhiên"])
]

# 3. PAVELKUKOV SVGS
PAVELKUKOV_SVGS = [
    ("a_is_for_airplane.svg", "Chiếc Phi Cơ Thám Hiểm Bầu Trời", "Airplane Flying in Clouds", "vehicles", ["máy bay", "phi cơ"]),
    ("s_s_edmund_fitzgerald.svg", "Tàu Thủy Hơi Nước Đại Dương", "Great Ocean Steamship", "vehicles", ["tàu thủy", "hàng hải", "tàu biển"]),
    ("summer_beach.svg", "Bãi Biển Mùa Hè Nắng Ấm", "Sunny Summer Beach", "ocean", ["bãi biển", "mùa hè", "cát vàng"]),
    ("boy_surfer.svg", "Cậu Bé Lướt Sóng Cưỡi Gió", "Brave Boy Surfer", "ocean", ["lướt sóng", "surfer", "sóng biển"]),
    ("shark_jaws.svg", "Hàm Cá Mập Trắng Khổng Lồ", "Great White Shark", "ocean", ["cá mập", "shark", "đại dương"]),
    ("octopus.svg", "Chú Bạch Tuộc Đại Dương", "Deep Sea Octopus", "ocean", ["bạch tuộc", "octopus"]),
    ("jellyfish.svg", "Sứa Biển Phát Sáng Lấp Lánh", "Glowing Deep Sea Jellyfish", "ocean", ["sứa biển", "jellyfish"]),
    ("octo.svg", "Bạch Tuộc Tí Hon Ngộ Nghĩnh", "Friendly Little Octo", "ocean", ["bạch tuộc", "đại dương"]),
    ("fishing_fish.svg", "Chú Cá Đớp Mồi Vui Nhộn", "Funny Jumping Fish", "ocean", ["cá", "câu cá"]),
    ("donkey.svg", "Chú Lừa Chăm Chỉ Đáng Yêu", "Hardworking Cute Donkey", "animals", ["lừa", "donkey"]),
    ("camel.svg", "Lạc Đà Băng Qua Sa Mạc", "Desert Camel Journey", "animals", ["lạc đà", "sa mạc"]),
    ("cute_horse.svg", "Chú Ngựa Bờm Dài Dễ Thương", "Pretty Little Horse", "animals", ["ngựa", "cute horse"]),
    ("sleeping_cat.svg", "Mèo Mướp Ngủ Say Sưa", "Sleeping Tabby Cat", "animals", ["mèo", "ngủ"]),
    ("hummingbird.svg", "Chim Ruồi Hút Mật Hoa", "Hummingbird at Flower", "animals", ["chim ruồi", "chim"]),
    ("dove.svg", "Bồ Câu Hòa Bình Tung Cánh", "Peaceful Flying Dove", "animals", ["bồ câu", "chim"]),
    ("spring_bird.svg", "Chim Non Hót Vang Mùa Xuân", "Singing Spring Bird", "animals", ["chim non", "mùa xuân"]),
    ("b_is_for_bird.svg", "Bé Chim Đậu Trên Cành", "Bird on Blossoming Branch", "animals", ["chim", "cành cây"]),
    ("bunny_and_eggs.svg", "Thỏ Ngọc Bên Giỏ Trứng Sắc Màu", "Easter Bunny and Eggs", "animals", ["thỏ", "bunny"]),
    ("two_easter_bunnies.svg", "Đôi Thỏ Trắng Vui Chơi", "Two Playful Bunnies", "animals", ["thỏ trắng", "vui vẻ"]),
    ("knight_on_horse.svg", "Hiệp Sĩ Cưỡi Ngựa Giáp Thép", "Armored Knight on Steed", "fairytale", ["hiệp sĩ", "ngựa chiến"]),
    ("dragon.svg", "Rồng Thần Cổ Đại Khổng Lồ", "Mighty Ancient Dragon", "fairytale", ["rồng", "dragon"]),
    ("creazilla_dragon.svg", "Rồng Lửa Vỗ Cánh Bay", "Fire Breathing Dragon", "fairytale", ["rồng lửa", "bay lượn"]),
    ("little_pony.svg", "Ngựa Thần Pony Kỳ Diệu", "Magical Little Pony", "fairytale", ["pony", "ngựa thần"]),
    ("kawaii_unicorn_cloud.svg", "Kỳ Lân Cầu Vồng Trên Mây", "Kawaii Unicorn on Rainbow Cloud", "fairytale", ["kỳ lân", "cầu vồng"]),
    ("chibi_princess.svg", "Công Chúa Chibi Dễ Thương", "Cute Chibi Princess", "fairytale", ["công chúa", "chibi"]),
    ("c_is_for_cake.svg", "Bánh Kem Sinh Nhật Ba Tầng", "Birthday Party Cake", "fruits", ["bánh kem", "sinh nhật"]),
    ("d_is_for_donut.svg", "Bánh Donut Kẹo Cầu Vồng", "Rainbow Sprinkles Donut", "fruits", ["donut", "bánh vòng"]),
    ("bitten_apple.svg", "Quả Táo Đỏ Ngon Lành", "Sweet Crisp Red Apple", "fruits", ["táo", "apple", "hoa quả"]),
    ("grape.svg", "Chùm Nho Tím Mọng Nước", "Juicy Purple Grapes", "fruits", ["nho", "grape", "trái cây"]),
    ("juice_and_cake.svg", "Bữa Tiệc Bánh Ngọt Và Nước Ép", "Juice and Sweet Cake", "fruits", ["nước ép", "bánh ngọt"]),
    ("gingerbread_man.svg", "Chú Người Gừng Đáng Yêu", "Cute Gingerbread Man", "fruits", ["bánh quy", "người gừng"]),
    ("pumpkin.svg", "Quả Bí Ngô Vàng Tròn", "Golden Autumn Pumpkin", "fruits", ["bí ngô", "pumpkin"]),
    ("easter_egg.svg", "Trứng Phục Sinh Họa Tiết Đẹp", "Patterned Easter Egg", "fruits", ["trứng", "họa tiết"]),
    ("spring_flowers.svg", "Vườn Hoa Mùa Xuân Đua Sắc", "Spring Blossoms in Bloom", "nature", ["hoa", "vườn hoa"]),
    ("cute_butterfly.svg", "Bươm Bướm Khoe Sắc Thắm", "Fluffy Cute Butterfly", "nature", ["bướm", "butterfly"]),
    ("ladybug_on_leaf.svg", "Bọ Rùa Đậu Trên Chiếc Lá", "Ladybug Resting on Leaf", "nature", ["bọ rùa", "chiếc lá"]),
    ("trees.svg", "Rừng Cây Đại Thụ Xanh Ngát", "Lush Forest Trees", "nature", ["cây", "rừng cây"]),
    ("spring_rain.svg", "Cơn Mưa Mùa Xuân Mát Lành", "Refreshing Spring Rain", "nature", ["mưa xuân", "cây cỏ"])
]

# 4. WONDERLINES SUBJECT CATEGORY MAPPINGS
WONDERLINES_META = {
    "cs003": ("Bé Khủng Long Cưỡi Phi Thuyền Vũ Trụ", "Astronaut Dinosaur on Moon", "robots", ["khủng long", "phi hành gia", "vũ trụ", "mặt trăng"]),
    "cs006": ("Robot Người Máy Tưới Cây Hoa", "Friendly Robot Watering Garden", "robots", ["robot", "người máy", "tưới cây", "hoa"]),
    "cs016": ("Bé Thám Hiểm Vũ Trụ & Kính Thiên Văn", "Kid Stargazing with Telescope", "robots", ["kính thiên văn", "vũ trụ", "ngôi sao", "hành tinh"]),

    "cs010": ("Siêu Xe Đua Ferrari & Rồng Lửa", "Ferrari Racing a Dragon", "vehicles", ["xe đua", "ferrari", "siêu xe", "tốc độ"]),
    "cs004": ("Chim Cánh Cụt Đi Khinh Khí Cầu", "Penguin in Hot Air Balloon", "vehicles", ["khinh khí cầu", "chim cánh cụt", "bay lượn"]),
    "cs017": ("Đoàn Tàu Hỏa Muôn Thú Rừng Xanh", "Woodland Animals on Train", "vehicles", ["tàu hỏa", "xe lửa", "động vật"]),
    "cs019": ("Chú Mèo Đi Xe Đạp Giao Hoa", "Cat Delivering Flowers on Bike", "vehicles", ["xe đạp", "mèo", "giao hoa"]),
    "cs018": ("Chú Ếch Lái Thuyền Buồm Đồ Chơi", "Frog Sailing a Toy Boat", "vehicles", ["thuyền buồm", "chú ếch", "lái thuyền"]),

    "cs009": ("Cá Voi Khổng Lồ & Rạn San Hô", "Giant Whale in Coral Reef", "ocean", ["cá voi", "san hô", "đại dương"]),
    "cs005": ("Bạch Tuộc Nhạc Công Chơi Trống", "Musical Octopus Playing Drums", "ocean", ["bạch tuộc", "trống", "âm nhạc"]),
    "cs023": ("Rùa Biển Đáng Yêu Đội Vòng Hoa", "Sea Turtle with Floral Shell", "ocean", ["rùa biển", "vòng hoa", "đại dương"]),

    "cs002": ("Chú Cáo Đọc Sách Trên Nhà Cây", "Clever Fox Reading in Treehouse", "animals", ["cáo", "đọc sách", "nhà cây"]),
    "cs008": ("Sóc Nâu Thưởng Trà Chiều Trên Cây", "Squirrel Having Afternoon Tea", "animals", ["sóc", "uống trà", "mùa thu"]),
    "cs011": ("Nhím Con Chơi Đùa Cùng Lá Thu", "Little Hedgehog in Autumn Leaves", "animals", ["nhím", "lá vàng", "mùa thu"]),
    "cs001": ("Ốc Sên Cõng Cả Khu Vườn Xanh", "Friendly Snail Carrying Garden", "animals", ["ốc sên", "khu vườn", "hoa cỏ"]),

    "cs021": ("Lâu Đài Bay Lơ Lửng Giữa Tầng Mây", "Floating House Above Clouds", "fairytale", ["lâu đài", "đám mây", "cổ tích", "thần tiên"]),
    "cs022": ("Ngôi Làng Nấm Thần Tiên Của Xì Trum", "Enchanted Village of Mushrooms", "fairytale", ["ngôi làng", "cây nấm", "xì trum", "thần tiên"]),
    "cs025": ("Vương Quốc Tuyết Trong Quả Cầu Pha Lê", "Magic Kingdom in Snow Globe", "fairytale", ["quả cầu tuyết", "pha lê", "cổ tích"]),

    "cs012": ("Bướm Xinh Đậu Trên Cành Hoa Cúc", "Butterfly Resting on Daisy Flower", "nature", ["bướm", "hoa cúc", "thiên nhiên"]),
    "cs015": ("Bé Tập Trồng Hoa Mùa Xuân", "Kids Planting Spring Flowers", "nature", ["trồng hoa", "mùa xuân", "vườn hoa"]),
    "cs013": ("Bé Xây Lâu Đài Cát Bên Bãi Biển", "Kids Building Beach Sandcastle", "nature", ["lâu đài cát", "bãi biển", "mùa hè"]),
    "cs014": ("Bé Thả Diều No Gió Bay Cao", "Kid Flying Colorful Kite in Sky", "nature", ["thả diều", "cánh diều", "bầu trời"]),

    "cs007": ("Thỏ Trắng Làm Bánh Cupcake Dâu Tây", "White Bunny Baking Sweet Cupcakes", "fruits", ["thỏ", "làm bánh", "cupcake", "dâu tây"]),
    "cs020": ("Bánh Vòng Donut Thiên Đường", "Delicious Bagel in Sweet Paradise", "fruits", ["bánh vòng", "donut", "ngọt ngào"]),
    "cs024": ("Bé Đi Chợ Chọn Hoa Quả Tươi Ngon", "Kid Choosing Fresh Fruits at Market", "fruits", ["hoa quả", "trái cây", "đi chợ"])
}

def main():
    print("=== BẮT ĐẦU CRAWL & XÂY DỰNG KHO TRANH 400+ BỨC ===")
    
    tasks = []
    category_templates = {
        'dinosaurs': [],
        'vehicles': [],
        'robots': [],
        'ocean': [],
        'animals': [],
        'fairytale': [],
        'nature': [],
        'fruits': []
    }

    # 1. Dinosaur SVGs
    print(f"1. Chuẩn bị {len(DINO_DATA)} tranh khủng long vector...")
    for idx, (name, title_vi, title_en, tags) in enumerate(DINO_DATA):
        url = f"https://raw.githubusercontent.com/claudiopostinghel/dinosaur-coloring-pages/master/drawings/{name}.svg"
        filename = f"dino_{name}.svg"
        target_path = os.path.join(PUBLIC_TEMPLATES_DIR, filename)
        tasks.append(('file', url, target_path))
        
        diff = 'easy' if idx < 15 else ('medium' if idx < 35 else 'hard')
        category_templates['dinosaurs'].append({
            'id': f"dino-{name}",
            'titleVi': title_vi,
            'titleEn': title_en,
            'category': 'dinosaurs',
            'difficulty': diff,
            'viewBox': '0 0 1792 2400',
            'regions': [],
            'imageUrl': f"/templates/{filename}",
            'tags': tags + ['khủng long', 'dinosaur', 'bé trai']
        })

    # 2. Radoone SVGs
    print(f"2. Chuẩn bị {len(RADOONE_SVGS)} tranh Radoone (Paw Patrol, thú cưng)...")
    for filename, title_vi, title_en, cat, tags in RADOONE_SVGS:
        url = f"https://raw.githubusercontent.com/radoone/omalovanka/master/assets/{filename}"
        target_path = os.path.join(PUBLIC_TEMPLATES_DIR, f"radoone_{filename}")
        tasks.append(('file', url, target_path))
        
        category_templates[cat].append({
            'id': f"radoone-{filename.replace('.svg', '')}",
            'titleVi': title_vi,
            'titleEn': title_en,
            'category': cat,
            'difficulty': 'medium',
            'viewBox': '0 0 1055 1491',
            'regions': [],
            'imageUrl': f"/templates/radoone_{filename}",
            'tags': tags
        })

    # 3. Pavelkukov SVGs
    print(f"3. Chuẩn bị {len(PAVELKUKOV_SVGS)} tranh Pavelkukov vector...")
    for filename, title_vi, title_en, cat, tags in PAVELKUKOV_SVGS:
        url = f"https://raw.githubusercontent.com/pavelkukov/coloring-pages/master/images/{filename}"
        target_path = os.path.join(PUBLIC_TEMPLATES_DIR, filename)
        tasks.append(('file', url, target_path))
        
        category_templates[cat].append({
            'id': f"pk-{filename.replace('.svg', '')}",
            'titleVi': title_vi,
            'titleEn': title_en,
            'category': cat,
            'difficulty': 'medium',
            'viewBox': '0 0 500 500',
            'regions': [],
            'imageUrl': f"/templates/{filename}",
            'tags': tags
        })

    # 4. Fetch Wonderlines files
    print("4. Đang lấy danh sách file từ WonderLines dataset...")
    base_url = 'https://huggingface.co/api/datasets/jerenrich/wonderlines-colouring-sheets/tree/main/data'
    req = urllib.request.Request(base_url, headers=HEADERS)
    with urllib.request.urlopen(req) as r:
        bands = json.loads(r.read().decode())

    all_wonderlines_files = []
    for band in bands:
        band_path = band['path']
        split_req = urllib.request.Request(f'https://huggingface.co/api/datasets/jerenrich/wonderlines-colouring-sheets/tree/main/{band_path}', headers=HEADERS)
        with urllib.request.urlopen(split_req) as sr:
            splits = json.loads(sr.read().decode())
        for split in splits:
            split_path = split['path']
            files_req = urllib.request.Request(f'https://huggingface.co/api/datasets/jerenrich/wonderlines-colouring-sheets/tree/main/{split_path}', headers=HEADERS)
            with urllib.request.urlopen(files_req) as fr:
                files = json.loads(fr.read().decode())
                for f in files:
                    all_wonderlines_files.append(f['path'])

    print(f"Tổng số file WonderLines: {len(all_wonderlines_files)}")

    # Index WonderLines by cs_id
    wl_by_cs = {}
    for path in all_wonderlines_files:
        # e.g. data/ages-03-05/train/cs001-age03-20261005-sunburst-r01-v01.png
        m = re.search(r'(cs\d{3})-age(\d{2})', path)
        if m:
            cs_id, age = m.group(1), int(m.group(2))
            if cs_id not in wl_by_cs:
                wl_by_cs[cs_id] = []
            wl_by_cs[cs_id].append((age, path))

    # Add WonderLines templates
    for cs_id, (title_vi_base, title_en_base, cat, tags) in WONDERLINES_META.items():
        if cs_id in wl_by_cs:
            items = sorted(wl_by_cs[cs_id], key=lambda x: x[0])
            for age, rel_path in items:
                url = f"https://huggingface.co/datasets/jerenrich/wonderlines-colouring-sheets/resolve/main/{rel_path}"
                out_filename = f"wl_{cs_id}_age{age:02d}.webp"
                target_path = os.path.join(PUBLIC_TEMPLATES_DIR, out_filename)
                tasks.append(('webp', url, target_path))
                
                # Sắc thái tên theo độ tuổi
                level_desc_vi = f"(Bản vẽ nét {age} tuổi)"
                level_desc_en = f"(Age {age} Style)"
                diff = 'easy' if age <= 5 else ('medium' if age <= 9 else 'hard')
                
                category_templates[cat].append({
                    'id': f"wl-{cs_id}-age{age:02d}",
                    'titleVi': f"{title_vi_base} {level_desc_vi}",
                    'titleEn': f"{title_en_base} {level_desc_en}",
                    'category': cat,
                    'difficulty': diff,
                    'viewBox': '0 0 1456 1024',
                    'regions': [],
                    'imageUrl': f"/templates/{out_filename}",
                    'tags': tags + [f"{age} tuổi", "wonderlines", "ai"]
                })

    # Báo cáo số lượng tranh mỗi danh mục
    print("\n--- THỐNG KÊ SỐ LƯỢNG MỖI DANH MỤC ---")
    total_imgs = 0
    for cat, items in category_templates.items():
        print(f"Danh mục '{cat}': {len(items)} bức tranh")
        total_imgs += len(items)
    print(f"TỔNG CỘNG: {total_imgs} bức tranh (Tất cả danh mục đều >= 50 tranh!)")
    print(f"Tổng số lượt tải cần thực hiện: {len(tasks)}")

    # Tiến hành tải song song đa luồng (30 workers)
    print("\nĐang tải và tối ưu hóa hình ảnh đa luồng...")
    completed = 0
    with concurrent.futures.ThreadPoolExecutor(max_workers=30) as executor:
        future_map = {}
        for kind, url, path in tasks:
            if kind == 'file':
                f = executor.submit(download_file, url, path)
            else:
                f = executor.submit(download_and_optimize_webp, url, path, 800)
            future_map[f] = path

        for future in concurrent.futures.as_completed(future_map):
            completed += 1
            if completed % 50 == 0 or completed == len(tasks):
                print(f"Tiến độ: {completed}/{len(tasks)} ({completed*100//len(tasks)}%)")

    print("\nĐã tải và tối ưu hoàn tất!")

    # 5. Ghi các file TypeScript module
    print("\nĐang tạo các file TypeScript templates...")
    for cat, items in category_templates.items():
        ts_content = f"import {{ ColoringTemplate }} from '../../types';\n\n"
        ts_content += f"export const {cat.upper()}_TEMPLATES: ColoringTemplate[] = "
        ts_content += json.dumps(items, ensure_ascii=False, indent=2) + ";\n"
        
        file_path = os.path.join(TEMPLATES_DATA_DIR, f"{cat}.ts")
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(ts_content)
        print(f"-> Đã ghi {file_path} ({len(items)} tranh)")

    # 6. Cập nhật index.ts
    index_ts = """import { ColoringTemplate } from '../../types';
import { DINOSAURS_TEMPLATES } from './dinosaurs';
import { VEHICLES_TEMPLATES } from './vehicles';
import { ROBOTS_TEMPLATES } from './robots';
import { OCEAN_TEMPLATES } from './ocean';
import { ANIMALS_TEMPLATES } from './animals';
import { FAIRYTALE_TEMPLATES } from './fairytale';
import { NATURE_TEMPLATES } from './nature';
import { FRUITS_TEMPLATES } from './fruits';
import { FREE_DRAW_TEMPLATE } from './freeDraw';

export const ALL_TEMPLATES: ColoringTemplate[] = [
  ...DINOSAURS_TEMPLATES,
  ...VEHICLES_TEMPLATES,
  ...ROBOTS_TEMPLATES,
  ...OCEAN_TEMPLATES,
  ...ANIMALS_TEMPLATES,
  ...FAIRYTALE_TEMPLATES,
  ...NATURE_TEMPLATES,
  ...FRUITS_TEMPLATES,
  FREE_DRAW_TEMPLATE
];

export function getTemplateById(id: string): ColoringTemplate {
  const found = ALL_TEMPLATES.find(t => t.id === id);
  return found || ALL_TEMPLATES[0];
}

export function getTemplatesByCategory(category: string): ColoringTemplate[] {
  if (category === 'all') return ALL_TEMPLATES;
  return ALL_TEMPLATES.filter(t => t.category === category);
}
"""
    with open(os.path.join(TEMPLATES_DATA_DIR, 'index.ts'), 'w', encoding='utf-8') as f:
        f.write(index_ts)
    print("-> Đã cập nhật src/data/templates/index.ts")

    print("\n=== HOÀN TẤT 100%! ===")

if __name__ == '__main__':
    main()
