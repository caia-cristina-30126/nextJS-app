import { Product } from "@/app/Product";
import Link from "next/link";

interface Props {
  product: Product;
}
export default function ProductComponent({ product }: Props) {
  return (
    <div className="pt-6">
      <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
        {product.images.map((image) => (
          <>
            <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
              <img
                src={image}
                alt="Product image"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </>
        ))}
      </div>
      <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            {product.title}
          </h1>
        </div>

        <div className="mt-4 lg:row-span-3 lg:mt-0">
          <h2 className="sr-only">Product information</h2>
          <p className="text-3xl tracking-tight text-gray-900">
            ${product.price}
          </p>

          <div className="mt-10">
            <h3 className="text-md font-medium text-gray-900">Category</h3>
            <h3 className="text-sm font-medium text-gray-900 mt-2">
              {product.category.name}
            </h3>
          </div>
        </div>

        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
          <div>
            <h3 className="sr-only">Description</h3>

            <div className="space-y-6">
              <p className="text-base text-gray-900">{product.description}</p>
            </div>
          </div>
        </div>
        <Link className="bg-white" href={"/products"}>
          <button className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium hover:opacity-75">
            See all products
          </button>
        </Link>
      </div>
    </div>
  );
}
