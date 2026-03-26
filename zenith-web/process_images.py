import os
import urllib.request
from PIL import Image

def convert_and_save(src, dest):
    try:
        os.makedirs(os.path.dirname(dest), exist_ok=True)
        with Image.open(src) as img:
            img.save(dest, 'WEBP', quality=90)
            print(f"Saved: {dest}")
    except Exception as e:
        print(f"Error saving {dest}: {e}")

# 1. Gallery Images
img1 = r"c:\Users\dbsrn\.gemini\antigravity\brain\a14185f2-f42b-464b-ab5e-96c15903d6ab\media__1774495247164.jpg"
img2 = r"c:\Users\dbsrn\.gemini\antigravity\brain\a14185f2-f42b-464b-ab5e-96c15903d6ab\media__1774495253159.jpg"

dest1_public = r"c:\Zenith\zenith-web\public\assets\gallery\group_2026_1.webp"
dest2_public = r"c:\Zenith\zenith-web\public\assets\gallery\group_2026_2.webp"

convert_and_save(img1, dest1_public)
convert_and_save(img2, dest2_public)

# 2. SAR Thumbnail
yt_url = "https://img.youtube.com/vi/yWl8IhGZf-s/maxresdefault.jpg"
yt_src = r"c:\Zenith\zenith-web\sar_thumb.jpg"
urllib.request.urlretrieve(yt_url, yt_src)

dest_yt_public = r"c:\Zenith\zenith-web\public\assets\journey\2026_sar.webp"
convert_and_save(yt_src, dest_yt_public)

print("Image processing complete!")
