import os
from PIL import Image

src = r"c:\Users\dbsrn\.gemini\antigravity\brain\a14185f2-f42b-464b-ab5e-96c15903d6ab\media__1774839057933.png"
dest = r"c:\Zenith\zenith-web\public\assets\team\hanryung_shin.webp"

try:
    os.makedirs(os.path.dirname(dest), exist_ok=True)
    with Image.open(src) as img:
        img.save(dest, 'WEBP', quality=90)
        print(f"Saved: {dest}")
except Exception as e:
    print(f"Error: {e}")
