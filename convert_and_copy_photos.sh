#!/bin/bash

# Script to convert HEIC photos to JPG and copy to Photos-2026 folder
# This will convert photos from Downloads/Photos-2026 to the repository

SOURCE_DIR="$HOME/Downloads/Photos-2026"
DEST_DIR="/Users/arunadduri/Documents/GitHub/zAIOps_Badminton_Tournament/Photos-2026"

echo "Converting HEIC photos to JPG..."
echo "Source: $SOURCE_DIR"
echo "Destination: $DEST_DIR"
echo ""

# Counter
count=0
total=$(ls "$SOURCE_DIR"/*.heic "$SOURCE_DIR"/*.HEIC 2>/dev/null | wc -l)

echo "Found $total HEIC files to convert"
echo ""

# Convert each HEIC file to JPG
for file in "$SOURCE_DIR"/*.heic "$SOURCE_DIR"/*.HEIC; do
    if [ -f "$file" ]; then
        filename=$(basename "$file")
        name="${filename%.*}"
        
        # Convert to JPG using sips (macOS built-in tool)
        sips -s format jpeg "$file" --out "$DEST_DIR/${name}.jpg" > /dev/null 2>&1
        
        count=$((count + 1))
        
        # Show progress every 10 files
        if [ $((count % 10)) -eq 0 ]; then
            echo "Converted $count / $total files..."
        fi
    fi
done

echo ""
echo "✅ Conversion complete! Converted $count photos"
echo ""
echo "Now generating images.json file..."

# Generate images.json with all JPG filenames
cd "$DEST_DIR"
echo "[" > images.json
ls *.jpg 2>/dev/null | sort | while read img; do
    echo "  \"$img\"," >> images.json
done
# Remove last comma and close array
sed -i '' '$ s/,$//' images.json
echo "]" >> images.json

echo "✅ images.json created with $(ls *.jpg 2>/dev/null | wc -l) photos"
echo ""
echo "Done! Your photos are ready to be committed to GitHub."

# Made with Bob
