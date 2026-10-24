import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ImageFrame } from "@/components/media/ImageFrame";

/** Product or service card. Whole card is one link target. */
export function ProductCard({
  title,
  summary,
  href,
  image,
  imageAlt,
}: {
  title: string;
  summary: string;
  href: string;
  image?: string;
  imageAlt: string;
}) {
  return (
    <article className="group relative flex flex-col border border-line bg-card transition-colors hover:border-primary">
      <ImageFrame src={image} alt={imageAlt} ratio="4/3" />
      <div className="flex flex-1 flex-col p-6">
        <h3 className="t-h3">
          <Link href={href} className="after:absolute after:inset-0">
            {title}
          </Link>
        </h3>
        <p className="mt-2 flex-1">{summary}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 font-semibold text-heading">
          View details
          <ArrowRight aria-hidden size={18} className="transition-transform group-hover:translate-x-1" />
        </span>
      </div>
      {/* Amber edge appears on hover — the only card motion on the site */}
      <span aria-hidden className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-accent transition-transform group-hover:scale-x-100" />
    </article>
  );
}

/** Image with caption — for gallery previews and about-page photos. */
export function ImageCard({
  image,
  alt,
  caption,
  ratio = "4/3",
}: {
  image?: string;
  alt: string;
  caption?: string;
  ratio?: "4/3" | "1/1" | "3/2";
}) {
  return (
    <figure>
      <ImageFrame src={image} alt={alt} ratio={ratio} />
      {caption && <figcaption className="t-caption mt-3">{caption}</figcaption>}
    </figure>
  );
}
