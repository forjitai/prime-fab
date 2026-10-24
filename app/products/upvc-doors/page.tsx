import { CategoryPage, categoryMetadata } from "@/components/catalog/CategoryPage";

export const metadata = categoryMetadata("upvc-doors");

export default function Page() {
  return <CategoryPage slug="upvc-doors" />;
}
