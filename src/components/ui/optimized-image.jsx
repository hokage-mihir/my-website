// src/components/ui/optimized-image.jsx
import React from 'react';
import { cn } from "@/lib/utils";

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  ...props
}) => {
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