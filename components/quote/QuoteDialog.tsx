"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { catalog } from "@/content/catalog";
import { contact } from "@/content/pages";
import { EnquiryForm } from "@/components/forms/EnquiryForm";

const EVENT = "primefab:open-quote";

/** Opens the shared quote dialog, optionally pre-selecting a product. */
export function openQuote(product = "") {
  window.dispatchEvent(new CustomEvent(EVENT, { detail: product }));
}

/** One dialog per page (mounted in the root layout). Every Get Best Quote button opens it. */
export function QuoteDialog() {
  const ref = useRef<HTMLDialogElement>(null);
  const [product, setProduct] = useState("");
  const [nonce, setNonce] = useState(0); // remount form so the selection updates

  useEffect(() => {
    const onOpen = (e: Event) => {
      setProduct((e as CustomEvent<string>).detail ?? "");
      setNonce((n) => n + 1);
      ref.current?.showModal();
    };
    window.addEventListener(EVENT, onOpen);
    return () => window.removeEventListener(EVENT, onOpen);
  }, []);

  return (
    <dialog
      ref={ref}
      aria-labelledby="quote-title"
      className="m-auto max-h-[92dvh] w-[calc(100%-2rem)] max-w-xl overflow-y-auto bg-card p-0 text-body shadow-2xl backdrop:bg-primary/70"
      onClick={(e) => e.target === ref.current && ref.current?.close()}
    >
      <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-line bg-card px-6 py-4">
        <div>
          <h2 id="quote-title" className="t-h3 text-2xl">
            Get Best Quote
          </h2>
          {product && <p className="t-caption mt-1">For: {product}</p>}
        </div>
        <button type="button" onClick={() => ref.current?.close()} aria-label="Close" className="-mr-2 p-2 text-heading">
          <X aria-hidden />
        </button>
      </div>
      <div className="p-6">
        <EnquiryForm key={nonce} idPrefix="quote" compact inquiryTypes={catalog.map((c) => c.name)} defaultType={product} messagePlaceholder={contact.messagePlaceholder} />
      </div>
    </dialog>
  );
}
