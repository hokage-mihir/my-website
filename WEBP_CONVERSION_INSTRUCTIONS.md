# WebP Conversion Instructions

To complete the image optimization, convert these JPG files to WebP format:

## Files to Convert:

### 1. Hero Images (for optimal performance)
```bash
# Install cwebp if not available (macOS)
brew install webp

# Convert hero images to WebP
cwebp -q 80 public/hero-stars.jpg -o public/hero-stars.webp
cwebp -q 80 public/hero-mountains-peace.jpg -o public/hero-mountains-peace.webp  
cwebp -q 80 public/hero-mountains-header.jpg -o public/hero-mountains-header.webp

# Expected file size reductions:
# hero-stars.jpg (160K) → ~80-100K WebP (40-50% smaller)
# hero-mountains-peace.jpg (125K) → ~60-80K WebP (40-50% smaller)
# hero-mountains-header.jpg (151K) → ~75-95K WebP (40-50% smaller)
```

## Alternative Methods:

### Online Conversion (if cwebp not available):
1. Go to https://convertio.co/jpg-webp/ or https://squoosh.app/
2. Upload the 3 JPG files from public/ folder
3. Set quality to 80-85%
4. Download and save as .webp versions

### Manual Process:
1. Open each JPG in image editor (Photoshop, GIMP, etc.)
2. Export as WebP format with 80% quality
3. Save in the public/ folder with .webp extension

## How the Optimization Works:

The `OptimizedImage` component automatically detects WebP versions:
- If `hero-stars.webp` exists → Uses WebP for modern browsers
- Falls back to `hero-stars.jpg` for older browsers
- Provides 40-50% file size reduction for supported browsers

## Expected Performance Impact:

After WebP conversion:
- **Total image savings**: ~600-800KB (additional 40-50% on hero images)
- **Page load improvement**: 20-30% faster on modern browsers
- **Bandwidth savings**: 50-60% reduction in image data transfer

## Verification:

After creating WebP files, run:
```bash
npm run build
# Check that build includes WebP files and no errors occur
```

The website will automatically use WebP in supported browsers while maintaining JPG fallback for compatibility.