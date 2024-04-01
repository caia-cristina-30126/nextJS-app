import Link from "next/link";

export default function MainPage() {
  return (
    <div className="relative isolate overflow-hidden  py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">
            Welcome
          </h2>
          <p className="mt-6 text-lg leading-8 text-black">Explore our shop</p>
        </div>

        <div className="grid mt-10 grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-black sm:grid-cols-2 md:flex lg:gap-x-10">
          <Link href="/products">
            See all products <span aria-hidden="true">&rarr;</span>
          </Link>
          <Link href="/createProduct">
            Create new product <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
