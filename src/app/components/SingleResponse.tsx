import { ApiResponse } from "../dashboard/ApiResponse";
import Link from "next/link";

async function getSingleResponse() {
  const response = await fetch("https://api.escuelajs.co/api/v1/products/4");
  return response.json() as Promise<ApiResponse>;
}

export default async function SingleResponse() {
  const singleResponse = await getSingleResponse();
  console.log(singleResponse);

  return (
    <div>
      <div>{singleResponse.description}</div>
    </div>
  );
}
