"use server";

export type EnquiryState =
  | { status: "idle" }
  | { status: "invalid"; errors: Partial<Record<EnquiryField, string>>; values: Record<EnquiryField, string> }
  | { status: "unavailable"; message: string; values: Record<EnquiryField, string> }
  | { status: "sent" };

export type EnquiryField = "name" | "phone" | "email" | "type" | "message";

const PHONE_RE = /^(?:\+?91[\s-]?)?[6-9]\d{4}[\s-]?\d{5}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitEnquiry(_prev: EnquiryState, formData: FormData): Promise<EnquiryState> {
  const values = {
    name: String(formData.get("name") ?? "").trim(),
    phone: String(formData.get("phone") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    type: String(formData.get("type") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
  };

  // Honeypot: bots fill hidden fields.
  if (String(formData.get("company_website") ?? "")) return { status: "sent" };

  const errors: Partial<Record<EnquiryField, string>> = {};
  if (values.name.length < 2) errors.name = "Enter your name.";
  if (!PHONE_RE.test(values.phone)) errors.phone = "Enter a 10-digit Indian mobile number.";
  if (values.email && !EMAIL_RE.test(values.email)) errors.email = "Enter a valid email, or leave it blank.";
  if (values.message.length < 10) errors.message = "Tell us a little about your requirement (10+ characters).";
  if (values.message.length > 2000) errors.message = "Keep the message under 2000 characters.";
  if (Object.keys(errors).length) return { status: "invalid", errors, values };

  // Delivery: set ENQUIRY_ENDPOINT (e.g. a Web3Forms/Formspree/Resend relay) on the server.
  const endpoint = process.env.ENQUIRY_ENDPOINT;
  if (!endpoint) {
    return {
      status: "unavailable",
      message: "Online enquiries aren't connected yet. Please call or WhatsApp us and we'll respond directly.",
      values,
    };
  }

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ ...values, access_key: process.env.ENQUIRY_ACCESS_KEY, source: "website" }),
    });
    if (!res.ok) throw new Error(String(res.status));
    return { status: "sent" };
  } catch {
    return {
      status: "unavailable",
      message: "Your enquiry couldn't be sent. Please try again, or call or WhatsApp us.",
      values,
    };
  }
}
