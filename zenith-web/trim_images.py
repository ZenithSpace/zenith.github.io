from PIL import Image, ImageChops

def trim(im):
    bg = Image.new(im.mode, im.size, im.getpixel((0,0)))
    diff = ImageChops.difference(im, bg)
    diff = ImageChops.add(diff, diff, 2.0, -100)
    bbox = diff.getbbox()
    if bbox:
        return im.crop(bbox)
    return im

def process_image(path):
    try:
        img = Image.open(path)
        trimmed_img = trim(img)
        trimmed_img.save(path)
        print(f"Trimmed {path}")
    except Exception as e:
        print(f"Error processing {path}: {e}")

if __name__ == "__main__":
    process_image("public/assets/partners/seoul_metro.png")
    process_image("public/assets/partners/seoul_institute.png")
