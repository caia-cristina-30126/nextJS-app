import { Product } from "../../Product";
import ProductComponent from "./ProductComponent";

async function getData(id: number) {
  console.log(`IDDD HERE : ${id}`);
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);

  if (!res.ok) {
    console.error(`Response not ok: ${res.status}`);
    console.error(`Response not ok: ${res.statusText}`);
    throw new Error(`Product with id ${id} not found...`);
  }

  return res.json() as Promise<Product>;
}

interface Props {
  id: number;
}

export default async function ProductDetailsPage({ id }: Props) {
  const product = await getData(id);

  return <ProductComponent product={product} />;
}
