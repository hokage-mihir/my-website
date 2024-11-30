import { cn } from "@/lib/utils"

export function Container({ children, className, ...props }) {
  return (
    <div 
      className={cn(
        "max-w-7xl mx-auto px-6",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}