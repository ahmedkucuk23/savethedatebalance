import { cn } from "@/lib/utils"

interface GradientHeadingProps {
  children: React.ReactNode
  className?: string
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

export function GradientHeading({
  children,
  className,
  as: Component = "h2",
}: GradientHeadingProps) {
  return (
    <Component
      className={cn(
        "bg-gradient-to-br from-white to-white/40 bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </Component>
  )
}
