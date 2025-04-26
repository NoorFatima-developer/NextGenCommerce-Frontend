import { OrdersTable } from "@/app/_components/orders-table";

export default function OrdersPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold tracking-tight">Orders</h1>
      <OrdersTable />
    </div>
  )
}
