#!/bin/bash

# Run the PWA assets generator with the minimal-2023 preset
pwa-assets-generator --preset minimal-2023 public/logo.jpeg

# Copy generated files to the desired locations
cp public/apple-touch-icon-180x180.png public/img/icons/

cp public/maskable-icon-512x512.png public/img/icons/

cp public/pwa-64x64.png public/img/icons/

# Copy and rename maskable icon
cp public/maskable-icon-512x512.png public/img/icons/android-chrome-maskable-512x512.png

# Resize maskable icon from 512x512 to 192x192 and copy/rename
convert public/img/icons/android-chrome-maskable-512x512.png -resize 192x192 public/img/icons/android-chrome-maskable-192x192.png

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
rm public/maskable-icon-512x512.png

echo "All operations completed successfully!"
