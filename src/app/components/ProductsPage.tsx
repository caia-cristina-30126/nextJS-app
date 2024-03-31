import Link from "next/link";
import { Product } from "../Product";
import ProductButton from "./common/ProductButton";

async function getAllProducts() {
  const response = await fetch("https://api.escuelajs.co/api/v1/products");
  return response.json() as Promise<Product[]>;
}

export default async function ProductsPage() {
  const productsResponse = await getAllProducts();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Products
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {productsResponse.map((product) => (
            <div key={product.id}>
              <div className="group relative">
                <div className="aspect-h-1 aspect-w-1  overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.images[0]}
                    alt="Product Image"
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm ml-2 text-gray-700">
                      <div>{product.title}</div>
                    </h3>
                  </div>
                  <p className="text-sm font-medium mr-2 text-gray-900 ">
                    {product.price} $
                  </p>
                </div>
              </div>
              <Link href={`/products/${product.id}`} key={product.id}>
                <ProductButton />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
