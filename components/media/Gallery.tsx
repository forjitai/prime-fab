"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { ImageFrame } from "./ImageFrame";

export type GalleryItem = { src?: string; alt: string; caption?: string };

/** Grid of photos that opens a keyboard-accessible lightbox (native <dialog>). */
export function Gallery({ items }: { items: GalleryItem[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(0);
  const viewable = items.filter((i) => i.src);

  const open = (i: number) => {
    setIndex(i);
    dialogRef.current?.showModal();
  };
  const step = useCallback(
    (d: number) => setIndex((i) => (i + d + viewable.length) % viewable.length),
    [viewable.length],
  );

  useEffect(() => {
    const dlg = dialogRef.current;
    if (!dlg) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    dlg.addEventListener("keydown", onKey);
    return () => dlg.removeEventListener("keydown", onKey);
  }, [step]);

  const current = viewable[index];

  return (
    <>
      <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
        {items.map((item, i) => (
          <li key={i}>
            {item.src ? (
              <button
                type="button"
                onClick={() => open(viewable.indexOf(item))}
                className="block w-full"
                aria-label={`Enlarge photo: ${item.alt}`}
              >
                <ImageFrame src={item.src} alt={item.alt} ratio="1/1" sizes="(min-width:1024px) 33vw, 50vw" />
              </button>
            ) : (
              <ImageFrame alt={item.alt} ratio="1/1" />
            )}
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        aria-label="Photo viewer"
        className="m-auto h-full max-h-none w-full max-w-none bg-black/95 p-0 text-white backdrop:bg-black/80"
        onClick={(e) => e.target === dialogRef.current && dialogRef.current?.close()}
      >
        {current?.src && (
          <figure className="flex h-full flex-col items-center justify-center p-4 sm:p-12">
            <div className="relative h-full w-full">
              <Image src={current.src} alt={current.alt} fill sizes="100vw" className="object-contain" />
            </div>
            {current.caption && <figcaption className="mt-4 text-center text-white/80">{current.caption}</figcaption>}
          </figure>
        )}
        <button type="button" onClick={() => dialogRef.current?.close()} aria-label="Close" className="absolute right-4 top-4 p-2">
          <X size={28} aria-hidden />
        </button>
        {viewable.length > 1 && (
          <>
            <button type="button" onClick={() => step(-1)} aria-label="Previous photo" className="absolute left-2 top-1/2 -translate-y-1/2 p-3">
              <ChevronLeft size={32} aria-hidden />
            </button>
            <button type="button" onClick={() => step(1)} aria-label="Next photo" className="absolute right-2 top-1/2 -translate-y-1/2 p-3">
              <ChevronRight size={32} aria-hidden />
            </button>
          </>
        )}
      </dialog>
    </>
  );
}
