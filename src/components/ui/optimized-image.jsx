// src/components/ui/optimized-image.jsx
// Enhanced image component with WebP support and automatic fallback
import React from 'react';
import { cn } from "@/lib/utils";

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  webpSrc = null,
  ...props
}) => {
  // Auto-generate WebP source if webpSrc is not provided but src is a supported format
  const autoWebpSrc = webpSrc || (
    src && (src.endsWith('.png') || src.endsWith('.jpg') || src.endsWith('.jpeg'))
      ? src.replace(/\.(png|jpg|jpeg)$/i, '.webp')
      : null
  );

  // If WebP source is available, use picture element for modern format support
  if (autoWebpSrc) {
    return (
      <picture>
        <source srcSet={autoWebpSrc} type="image/webp" />
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={cn("", className)}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          {...props}
        />
      </picture>
    );
  }

  // Fallback to regular img tag if no WebP version
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cn("", className)}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      {...props}
    />
  );
};

export default OptimizedImage;