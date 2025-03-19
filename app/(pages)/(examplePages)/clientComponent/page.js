"use client";
import { clientComponentApiEndpoints } from "@/app/_services/apiEndpoints";
import { useGetQuery } from "@/app/_services/networkRequestServices";
import { queryKeys } from "@/app/_services/queryKeys";
import React from "react";

const ClientComponentFetching = () => {
  const { data, isLoading } = useGetQuery(
    queryKeys.PRODUCTS.ALL_PRODUCTS,
    clientComponentApiEndpoints.PRODUCTS.ALL_PRODUCTS
  );

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <>
      <h1 className="text-4xl">Data is rendering inside client component</h1>
      <ul>
        {data?.data?.map((item) => (
          <li key={item?.id}>{item?.title}</li>
        ))}
      </ul>
    </>
  );
};

export default ClientComponentFetching;
