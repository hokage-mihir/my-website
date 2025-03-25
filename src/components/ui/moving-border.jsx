import React from 'react';
import { cn } from "@/lib/utils";

export const MovingBorder = ({
  children,
  duration = 2000,
  className,
  containerClassName,
  size = 400,
  borderWidth = 2,
  borderColor = "white",
  bgColor = "black"
}) => {
  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      <div
        className={cn(
          "relative z-10 p-[1px] overflow-hidden flex items-center justify-center rounded-xl",
          className
        )}
      >
        <div
          className="absolute inset-0 rounded-xl"
          style={{
            background: bgColor,
          }}
        />
        
        <div
          className="absolute inset-px z-10 rounded-xl"
          style={{
            background: bgColor,
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            borderRadius: "inherit",
            background: `
              conic-gradient(
                from 0deg at 50% 50%,
                ${borderColor} 0%,
                transparent 10%,
                transparent 90%,
                ${borderColor} 100%
              )
            `,
            animation: `spin ${duration}ms linear infinite`,
            width: `${size}%`,
            height: `${size}%`,
            margin: `-${(size - 100) / 2}% 0 0 -${(size - 100) / 2}%`,
          }}
        />

        <div className="relative z-10">{children}</div>
      </div>
    </div>
  );
};