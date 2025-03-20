"use client";
import { clientComponentApiEndpoints } from "@/app/_services/apiEndpoints";
import { useGetQuery } from "@/app/_services/networkRequestServices";
import { queryKeys } from "@/app/_services/queryKeys";
import React from "react";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";

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
      <Slider min={0} max={100} className="w-40 bg-red-600" />
      <Switch id="airplane-mode" />
    </>
  );
};

export default ClientComponentFetching;
