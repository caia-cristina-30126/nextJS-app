import Link from "next/link";
import { Category } from "../Product";
import { getAllEntities } from "./common/utils";

export default async function MainPage() {
  const categoriesResponse = await getAllEntities<Category>(
    "https://api.escuelajs.co/api/v1/categories"
  );

  return (
    <div className="relative isolate overflow-hidden  py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0"></div>
      </div>

      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">
              Welcome
            </h2>

            <div className="grid mt-10 grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-black sm:grid-cols-2 md:flex lg:gap-x-10">
              <Link href="/products">
                See all products <span aria-hidden="true">&rarr;</span>
              </Link>
              <Link href="/createProduct">
                Create new product <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
            <h2 className="text-2xl font-bold mt-5 text-gray-900">
              Collections
            </h2>
            <div className="mt-6 space-y-15 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {categoriesResponse.map((category) => (
                <div key={category.id} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={category.image}
                      alt="Image"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <p className="text-base font-semibold mt-2 mb-5 text-gray-900">
                    {category.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
