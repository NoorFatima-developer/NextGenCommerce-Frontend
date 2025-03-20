import { serverComponentApiEndpoints } from "@/app/_services/apiEndpoints";
import React from "react";
import BasicForm from "./components/BasicForm";

async function fetchProducts() {
  return await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_DUMMY_URL}${serverComponentApiEndpoints.PRODUCTS.ALL_PRODUCTS}`
  );
}

const ServerComponentExample = async () => {
  const response = await fetchProducts();
  const data = await response.json();

  return (
    <>
      <h1 className="text-4xl">Data is rendering inside server component</h1>
      <ul>
        {data?.map((item) => (
          <li key={item?.id}>{item?.title}</li>
        ))}
      </ul>
      <BasicForm />
    </>
  );
};

export default ServerComponentExample;
