import ProductDetailsPage from "@/app/components/product/ProductDetailsPage";

export default function ProductPage({ params }: { params: { id: number } }) {
  return <ProductDetailsPage id={params.id} />;
}
