"use client";

import { useActionState } from "react";
import { CheckCircle2, AlertTriangle } from "lucide-react";
import { submitEnquiry, type EnquiryState, type EnquiryField } from "@/app/actions/enquiry";
import { Button } from "@/components/ui/Button";

const initial: EnquiryState = { status: "idle" };

const inputCls =
  "block w-full border border-line bg-card px-4 py-3 text-heading placeholder:text-muted focus:border-primary aria-[invalid=true]:border-error";

export function EnquiryForm({ inquiryTypes = [] }: { inquiryTypes?: string[] }) {
  const [state, action, pending] = useActionState(submitEnquiry, initial);

  if (state.status === "sent") {
    return (
      <div role="status" className="flex gap-3 border-l-4 border-success bg-section p-6">
        <CheckCircle2 aria-hidden className="shrink-0 text-success" />
        <p>Enquiry sent. We&apos;ll call you back on the number you gave.</p>
      </div>
    );
  }

  const values = "values" in state ? state.values : undefined;
  const errors = state.status === "invalid" ? state.errors : {};

  const field = (name: EnquiryField) => ({
    id: `enq-${name}`,
    name,
    defaultValue: values?.[name] ?? "",
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `enq-${name}-err` : undefined,
  });
  const err = (name: EnquiryField) =>
    errors[name] ? (
      <p id={`enq-${name}-err`} className="mt-1.5 text-sm text-error">
        {errors[name]}
      </p>
    ) : null;

  return (
    <form action={action} noValidate className="grid gap-5">
      {state.status === "unavailable" && (
        <div role="alert" className="flex gap-3 border-l-4 border-accent bg-section p-4">
          <AlertTriangle aria-hidden className="shrink-0 text-accent-strong" />
          <p>{state.message}</p>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="enq-name" className="mb-1.5 block font-medium text-heading">Name</label>
          <input {...field("name")} type="text" autoComplete="name" required className={inputCls} />
          {err("name")}
        </div>
        <div>
          <label htmlFor="enq-phone" className="mb-1.5 block font-medium text-heading">Mobile number</label>
          <input {...field("phone")} type="tel" inputMode="tel" autoComplete="tel" required className={inputCls} />
          {err("phone")}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="enq-email" className="mb-1.5 block font-medium text-heading">
            Email <span className="font-normal text-muted">(optional)</span>
          </label>
          <input {...field("email")} type="email" autoComplete="email" className={inputCls} />
          {err("email")}
        </div>
        <div>
          <label htmlFor="enq-type" className="mb-1.5 block font-medium text-heading">Enquiry about</label>
          {inquiryTypes.length > 0 ? (
            <select {...field("type")} className={inputCls}>
              <option value="">Choose one</option>
              {inquiryTypes.map((t) => (
                <option key={t}>{t}</option>
              ))}
              <option>Something else</option>
            </select>
          ) : (
            <input {...field("type")} type="text" placeholder="e.g. new order, quote" className={inputCls} />
          )}
        </div>
      </div>

      <div>
        <label htmlFor="enq-message" className="mb-1.5 block font-medium text-heading">Your requirement</label>
        <textarea {...field("message")} rows={5} required maxLength={2000} className={inputCls} />
        {err("message")}
      </div>

      {/* Honeypot — hidden from people and assistive tech */}
      <div aria-hidden className="absolute -left-[9999px]">
        <label>
          Leave empty <input name="company_website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div>
        <Button type="submit" disabled={pending} data-event="form_submit">
          {pending ? "Sending enquiry…" : "Send enquiry"}
        </Button>
      </div>
    </form>
  );
}
