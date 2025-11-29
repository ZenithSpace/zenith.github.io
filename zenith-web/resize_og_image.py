from PIL import Image

def resize_and_pad_image(input_path, output_path, target_size=(1200, 630), background_color=(255, 255, 255)):
    try:
        img = Image.open(input_path)
        img_ratio = img.width / img.height
        target_ratio = target_size[0] / target_size[1]

        # Calculate new size to fit within target_size while maintaining aspect ratio
        # Leave minimal padding (e.g., 95% of the smaller dimension) - Maximum size
        padding_factor = 0.95
        
        if img_ratio > target_ratio:
            # Width is the limiting factor
            new_width = int(target_size[0] * padding_factor)
            new_height = int(new_width / img_ratio)
        else:
            # Height is the limiting factor
            new_height = int(target_size[1] * padding_factor)
            new_width = int(new_height * img_ratio)

        resized_img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)

        # Create new image with background color
        new_img = Image.new("RGB", target_size, background_color)
        
        # Paste resized image in the center
        paste_x = (target_size[0] - new_width) // 2
        paste_y = (target_size[1] - new_height) // 2
        
        # Handle transparency if original image has alpha channel
        if img.mode == 'RGBA':
            new_img.paste(resized_img, (paste_x, paste_y), resized_img)
        else:
            new_img.paste(resized_img, (paste_x, paste_y))

        new_img.save(output_path, quality=95)
        print(f"Successfully saved resized image to {output_path}")

    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    resize_and_pad_image("public/og-image-source.jpg", "public/og-image.jpg")
