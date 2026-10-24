import { CategoryPage, categoryMetadata } from "@/components/catalog/CategoryPage";

export const metadata = categoryMetadata("upvc-windows");

export default function Page() {
  return <CategoryPage slug="upvc-windows" />;
}
