// src/components/ui/optimized-image.jsx
// Enhanced image component with WebP support and automatic fallback
import React, { useState } from 'react';
import { cn } from "@/lib/utils";

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  webpSrc = null,
  sizes = null,
  ...props
}) => {
  const [imageError, setImageError] = useState(false);
  const [webpError, setWebpError] = useState(false);

  // Auto-generate WebP source if webpSrc is not provided but src is a supported format
  const autoWebpSrc = webpSrc || (
    src && (src.endsWith('.png') || src.endsWith('.jpg') || src.endsWith('.jpeg'))
      ? src.replace(/\.(png|jpg|jpeg)$/i, '.webp')
      : null
  );

  // Handle image load errors
  const handleImageError = () => {
    setImageError(true);
  };

  const handleWebpError = () => {
    setWebpError(true);
  };

  // If both images fail to load, show a placeholder
  if (imageError) {
    return (
      <div 
        className={cn("bg-gray-200 flex items-center justify-center", className)}
        style={{ width, height }}
      >
        <span className="text-gray-400 text-sm">Image unavailable</span>
      </div>
    );
  }

  // If WebP source is available and hasn't errored, use picture element for modern format support
  if (autoWebpSrc && !webpError) {
    return (
      <picture>
        <source
          srcSet={autoWebpSrc}
          type="image/webp"
          sizes={sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
          onError={handleWebpError}
        />
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={cn("", className)}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          onError={handleImageError}
          {...props}
        />
      </picture>
    );
  }

  // Fallback to regular img tag if no WebP version or WebP failed
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cn("", className)}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      onError={handleImageError}
      {...props}
    />
  );
};

export default OptimizedImage;