import React from 'react';
import { cn } from "@/lib/utils";

export const GradientText = ({ children, className }) => {
  return (
    <span 
      className={cn(
        "text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-teal-500", 
        className
      )}
    >
      {children}
    </span>
  );
};