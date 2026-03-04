#!/bin/bash

# Directory containing images
DIR="public/images/catalog"
MAX_WIDTH=1600

echo "Optimizing images in $DIR..."

# Navigate to the directory
cd "$DIR" || exit

# Loop through all JPG/JPEG files
for file in *.{jpg,jpeg,JPG,JPEG}; do
    # Check if any files actually match to avoid errors
    if [ -f "$file" ]; then
        # Check current width
        width=$(sips -g pixelWidth "$file" | awk '/pixelWidth/ {print $2}')
        
        # Original size for reporting
        orig_size=$(ls -lh "$file" | awk '{print $5}')
        
        # If width is greater than MAX_WIDTH, resize
        if [ "$width" -gt "$MAX_WIDTH" ]; then
            sips -Z "$MAX_WIDTH" "$file" > /dev/null 2>&1
        fi
        
        # Compress the image by reducing quality to 80% (low/normal/high/best -> normal)
        sips -s formatOptions 80 "$file" --out "$file" > /dev/null 2>&1
        
        new_size=$(ls -lh "$file" | awk '{print $5}')
        echo "Optimized $file: $orig_size -> $new_size"
    fi
done

echo "Done optimizing images."
