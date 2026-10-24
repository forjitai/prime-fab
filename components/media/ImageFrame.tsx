import Image from "next/image";
import { ImageOff } from "lucide-react";

export type Ratio = "16/9" | "4/3" | "3/2" | "1/1" | "4/5";

/**
 * Fixed-ratio image box (prevents layout shift). If `src` is missing it renders a
 * clearly-marked "photo needed" slot — this must never reach production.
 */
export function ImageFrame({
  src,
  alt,
  ratio = "4/3",
  sizes = "(min-width: 1024px) 33vw, 100vw",
  priority = false,
  position = "center",
  chamfer = false,
  className = "",
}: {
  src?: string;
  alt: string;
  ratio?: Ratio;
  sizes?: string;
  priority?: boolean;
  position?: string;
  chamfer?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden bg-section ${chamfer ? "chamfer-lg" : ""} ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
          style={{ objectPosition: position }}
        />
      ) : (
        <div
          role="img"
          aria-label={`Photo needed: ${alt}`}
          className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-muted"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, transparent 0 14px, color-mix(in srgb, var(--color-secondary) 12%, transparent) 14px 15px)",
          }}
        >
          <ImageOff aria-hidden size={28} />
          <span className="t-caption px-4 text-center">Photo needed</span>
        </div>
      )}
    </div>
  );
}
