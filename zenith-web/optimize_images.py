import os
from PIL import Image

def optimize_images(directory):
    print(f"Scanning {directory}...")
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.lower().endswith(('.png', '.jpg', '.jpeg')):
                file_path = os.path.join(root, file)
                try:
                    with Image.open(file_path) as img:
                        # Calculate new size (max 1920px width/height)
                        max_size = 1920
                        ratio = min(max_size / img.width, max_size / img.height)
                        
                        # Only resize if larger than max_size
                        if ratio < 1:
                            new_size = (int(img.width * ratio), int(img.height * ratio))
                            img = img.resize(new_size, Image.Resampling.LANCZOS)
                            print(f"Resized {file} to {new_size}")
                        
                        # Convert to WebP
                        file_name_without_ext = os.path.splitext(file)[0]
                        new_file_path = os.path.join(root, file_name_without_ext + ".webp")
                        
                        img.save(new_file_path, "WEBP", quality=85, optimize=True)
                        print(f"Optimized: {file} -> {os.path.basename(new_file_path)}")
                        
                        # Optional: Remove original if successful? 
                        # For safety, let's keep originals for now, but we should update code to use webp.
                        # Actually, to save space, maybe we should delete? 
                        # Let's just create WebP versions first.
                except Exception as e:
                    print(f"Error processing {file}: {e}")

# Optimize public/assets
optimize_images('public/assets')
optimize_images('src/assets')
