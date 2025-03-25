import React from 'react';
import { cn } from "@/lib/utils";

export const AnimatedGradientBorder = ({ className, children }) => {
  return (
    <div className={cn("relative group", className)}>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-teal-500 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-300 animate-tilt"></div>
      <div className="relative bg-white dark:bg-slate-900 rounded-lg p-6">
        {children}
      </div>
    </div>
  );
};