import { CustomersTable } from "@/app/_components/customers-table";

export default function CustomersPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold tracking-tight">Customers</h1>
      <CustomersTable />
    </div>
  )
}
