import os
from PIL import Image

src = r"c:\Users\dbsrn\.gemini\antigravity\brain\a14185f2-f42b-464b-ab5e-96c15903d6ab\media__1774839057933.png"
dest = r"c:\Zenith\zenith-web\public\assets\team\hanryung_shin.webp"

try:
    img = Image.open(src).convert("RGBA")
    
    # Increase the canvas size by 25% to act as white margins
    pad_factor = 1.25
    new_w = int(img.width * pad_factor)
    new_h = int(img.height * pad_factor)
    
    # Create a white background canvas
    bg = Image.new("RGBA", (new_w, new_h), (255, 255, 255, 255))
    
    # Calculate centering offsets
    offset_x = (new_w - img.width) // 2
    offset_y = (new_h - img.height) // 2
    
    # Paste the original image in the center
    bg.paste(img, (offset_x, offset_y), img)
    
    os.makedirs(os.path.dirname(dest), exist_ok=True)
    bg.convert("RGB").save(dest, 'WEBP', quality=95)
    print(f"Saved padded image to: {dest}")
except Exception as e:
    print(f"Error: {e}")
