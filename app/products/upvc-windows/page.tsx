import { ProductDetail, productMetadata } from "@/components/products/ProductDetail";

const SLUG = "upvc-windows";

export const metadata = productMetadata(SLUG);

export default function Page() {
  return <ProductDetail slug={SLUG} />;
}
