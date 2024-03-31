"use client";

import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="ml-10 mt-10">
      <h2>Something went wrong!</h2>
      <div>{error.message}</div>

      <button
        className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium hover:opacity-75"
        onClick={() => reset()}
      >
        Try again
      </button>
      <div>or</div>
      <Link className="bg-white" href={"/products"}>
        <button className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium hover:opacity-75">
          Go back to products page
        </button>
      </Link>
    </div>
  );
}
