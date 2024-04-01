"use client";

import ButtonComponent from "@/app/components/common/ButtonComponent";
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
      <h2 className="ml-2">Something went wrong!</h2>
      <div className="ml-2">{error.message}</div>

      <ButtonComponent actionText="Try again" />
      <div className="ml-2">or</div>
      <Link className="bg-white" href={"/products"}>
        <ButtonComponent actionText=" Go back to products page" />
      </Link>
    </div>
  );
}
