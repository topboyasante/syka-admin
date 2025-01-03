import DataTable from '@/components/ui/data-table';
import { fetchClients } from '@/services/clients';
import React from 'react';
import { ClientsTableColumns } from './columns';

export default async function ClientsPage() {
  const Clients = await fetchClients();
  return (
    <div className="p-3 bg-white border border-[#EAECF0] rounded-md">
      <DataTable data={Clients} columns={ClientsTableColumns} />
    </div>
  );
}
