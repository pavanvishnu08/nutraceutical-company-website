"use client"

import { useState } from "react"
import { Leaf } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProductImageProps {
  src: string
  alt: string
  className?: string
  fallbackLabel?: string
}

export function ProductImage({ src, alt, className, fallbackLabel }: ProductImageProps) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center bg-gradient-to-br from-primary/8 via-secondary to-primary/5",
          className,
        )}
        role="img"
        aria-label={alt}
      >
        <Leaf className="size-14 text-primary/25" aria-hidden="true" />
        {fallbackLabel && (
          <p className="mt-3 max-w-[12rem] text-center text-xs font-medium leading-snug text-foreground/35">
            {fallbackLabel}
          </p>
        )}
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
    />
  )
}
