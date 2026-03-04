import os
import sys
from PIL import Image

def optimize_images(directory, max_width=1600, quality=80):
    """
    Optimizes all .jpg and .png images in the given directory by:
    1. Resizing them so their width does not exceed max_width (maintaining aspect ratio).
    2. Re-saving them with the specified quality (for JPEGs).
    """
    if not os.path.exists(directory):
        print(f"Directory {directory} does not exist.")
        return

    saved_bytes = 0
    processed_count = 0

    for filename in os.listdir(directory):
        if not (filename.lower().endswith('.jpg') or filename.lower().endswith('.jpeg') or filename.lower().endswith('.png')):
            continue

        filepath = os.path.join(directory, filename)
        original_size = os.path.getsize(filepath)
        
        try:
            with Image.open(filepath) as img:
                # Calculate new dimensions if image is larger than max_width
                if img.width > max_width:
                    ratio = max_width / float(img.width)
                    new_height = int(float(img.height) * float(ratio))
                    img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
                
                # Save the optimized image, overwriting the original
                if filename.lower().endswith('.png'):
                    img.save(filepath, optimize=True)
                else:
                    img.save(filepath, "JPEG", optimize=True, quality=quality)
            
            new_size = os.path.getsize(filepath)
            savings = original_size - new_size
            
            if savings > 0:
                saved_bytes += savings
            
            processed_count += 1
            print(f"Optimized: {filename} ({original_size/1024/1024:.2f} MB -> {new_size/1024/1024:.2f} MB)")

        except Exception as e:
            print(f"Error processing {filename}: {e}")

    print(f"\nOptimization complete.")
    print(f"Processed {processed_count} images.")
    print(f"Total space saved: {saved_bytes / (1024 * 1024):.2f} MB")

if __name__ == "__main__":
    catalog_dir = os.path.join(os.getcwd(), 'public', 'images', 'catalog')
    optimize_images(catalog_dir)
