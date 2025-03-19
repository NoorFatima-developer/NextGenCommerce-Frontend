"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const ClientProvider = ({ children }) => {
  const client = new QueryClient();

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};
