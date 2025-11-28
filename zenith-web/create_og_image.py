from PIL import Image
import os

def create_og_image(source_path, output_path):
    try:
        # Open the source image
        img = Image.open(source_path)
        
        # Target dimensions for Open Graph
        target_width = 1200
        target_height = 630
        
        # Create a new white background image
        # Assuming the logo has a white background since it's a JPG. 
        # If it was transparent PNG we might use a different color, but white is safe for logos.
        new_img = Image.new("RGB", (target_width, target_height), "white")
        
        # Calculate resizing to fit within the canvas with some padding
        # Let's leave 10% padding on top/bottom
        max_h = target_height * 0.8
        max_w = target_width * 0.8
        
        # Resize maintaining aspect ratio
        img.thumbnail((max_w, max_h), Image.Resampling.LANCZOS)
        
        # Calculate position to center the image
        x = (target_width - img.width) // 2
        y = (target_height - img.height) // 2
        
        # Paste the resized logo onto the background
        new_img.paste(img, (x, y))
        
        # Save the result
        new_img.save(output_path, quality=95)
        print(f"Successfully created OG image at {output_path}")
        
    except Exception as e:
        print(f"Error creating OG image: {e}")

if __name__ == "__main__":
    source = r"C:/Users/dbsrn/.gemini/antigravity/brain/17ad2e83-d4b1-4daa-a310-b7c0ef163460/uploaded_image_1764290805319.jpg"
    output = "c:/Zenith/zenith-web/public/assets/og_image.jpg"
    create_og_image(source, output)
