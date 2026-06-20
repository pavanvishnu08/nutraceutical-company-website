import { cn } from "@/lib/utils"

type Props = {
  index?: string
  eyebrow: string
  title: string
  description?: string
  align?: "left" | "center"
  className?: string
  tone?: "default" | "inverse"
}

export function SectionHeading({
  index,
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
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-3xl text-left",
        className,
      )}
    >
      <div
        className={cn(
          "flex items-center gap-4",
          align === "center" && "justify-center",
        )}
      >
        {index && (
          <span
            className={cn(
              "font-mono text-xs tabular-nums",
              inverse ? "text-accent" : "text-gold",
            )}
          >
            {index}
          </span>
        )}
        <span className={cn("eyebrow", inverse ? "text-accent" : "text-primary")}>
          {eyebrow}
        </span>
      </div>
      <h2
        className={cn(
          "display mt-5 text-pretty text-4xl sm:text-5xl",
          inverse ? "text-primary-foreground" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-pretty text-base leading-relaxed sm:text-lg",
            inverse ? "text-primary-foreground/75" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
