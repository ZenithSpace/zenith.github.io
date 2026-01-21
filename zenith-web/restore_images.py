from PIL import Image
import os

# Paths
gallery_source_path = r"c:/Zenith/zenith-web/public/assets/gallery/education_volunteer_2025.webp"
education_target_path = r"c:/Zenith/zenith-web/public/assets/journey/2025_education.webp"

uploaded_award_path = r"C:/Users/dbsrn/.gemini/antigravity/brain/26ec71de-1732-4b39-8c22-11c3a78ea546/uploaded_image_1768971320477.png"
award_target_path = r"c:/Zenith/zenith-web/public/assets/journey/2025_minister_award.webp"

def process_education_image():
    try:
        if not os.path.exists(gallery_source_path):
            print(f"Error: Gallery source not found at {gallery_source_path}")
            return

        with Image.open(gallery_source_path) as img:
            width, height = img.size
            # Crop top 45%
            top = int(height * 0.45)
            box = (0, top, width, height)
            
            cropped_img = img.crop(box)
            cropped_img.save(education_target_path, "WEBP", quality=90)
            print(f"Successfully cropped and saved education image to {education_target_path}")
    except Exception as e:
        print(f"Error processing education image: {e}")

def process_award_image():
    try:
        if not os.path.exists(uploaded_award_path):
            print(f"Error: Uploaded award image not found at {uploaded_award_path}")
            return

        with Image.open(uploaded_award_path) as img:
            img.save(award_target_path, "WEBP", quality=90)
            print(f"Successfully converted and saved award image to {award_target_path}")
    except Exception as e:
        print(f"Error processing award image: {e}")

# Run processing
process_education_image()
process_award_image()
