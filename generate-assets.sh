#!/bin/bash

# Check if the logo argument is provided
if [ -z "$1" ]; then
  echo "Usage: $0 <path_to_logo.jpeg>"
  exit 1
fi

# Set the logo path from the input argument
LOGO_PATH="$1"

# Check if the provided logo file exists
if [ ! -f "$LOGO_PATH" ]; then
  echo "Error: File '$LOGO_PATH' not found!"
  exit 1
fi

# Run the PWA assets generator with the minimal-2023 preset using the provided logo file
pwa-assets-generator --preset minimal-2023 "$LOGO_PATH"

# Copy generated files to the desired locations
cp public/apple-touch-icon-180x180.png public/img/icons/

cp public/maskable-icon-512x512.png public/img/icons/maskable-icon-512x512-original.png

cp public/pwa-64x64.png public/img/icons/

# Copy and rename maskable icon
cp public/maskable-icon-512x512.png public/img/icons/android-chrome-maskable-512x512.png

# Resize maskable icon from 512x512 to 192x192 and copy/rename
# convert public/img/icons/android-chrome-maskable-512x512.png -resize 192x192 public/img/icons/android-chrome-maskable-192x192.png

# Copy and rename pwa-512x512.png to android-chrome-512x512.png
cp public/pwa-512x512.png public/img/icons/android-chrome-512x512.png

# Copy and rename pwa-192x192.png to android-chrome-192x192.png
cp public/pwa-192x192.png public/img/icons/android-chrome-192x192.png

# Remove all the images from the public folder after copying them
rm public/apple-touch-icon-180x180.png
rm public/maskable-icon-512x512.png
rm public/pwa-64x64.png
rm public/pwa-512x512.png
rm public/pwa-192x192.png

echo "Remember to convert public/img/icons/android-chrome-maskable-512x512.png -resize 192x192 public/img/icons/android-chrome-maskable-192x192.png"
echo "All operations completed successfully!"