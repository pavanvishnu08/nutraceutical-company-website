import { cn } from "@/lib/utils"

type Props = {
  eyebrow: string
  title: string
  description?: string
  align?: "left" | "center"
  className?: string
  tone?: "default" | "inverse"
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  tone = "default",
}: Props) {
  const inverse = tone === "inverse"
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      <span
        className={cn(
          "text-xs font-semibold uppercase tracking-[0.18em]",
          inverse ? "text-accent" : "text-primary",
        )}
      >
        {eyebrow}
      </span>
      <h2
        className={cn(
          "mt-3 text-pretty font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl",
          inverse ? "text-primary-foreground" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-pretty text-base leading-relaxed sm:text-lg",
            inverse ? "text-primary-foreground/75" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
