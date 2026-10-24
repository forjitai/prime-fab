"use client";

import type { ReactNode } from "react";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { openQuote } from "./QuoteDialog";

export function QuoteButton({
  product = "",
  children = "Get Best Quote",
  variant = "primary",
  className = "",
}: {
  product?: string;
  children?: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "onDark";
  className?: string;
}) {
  return (
    <Button
      type="button"
      variant={variant}
      className={className}
      icon={<FileText aria-hidden size={18} />}
      onClick={() => openQuote(product)}
      data-event="cta_click"
      aria-haspopup="dialog"
    >
      {children}
    </Button>
  );
}
