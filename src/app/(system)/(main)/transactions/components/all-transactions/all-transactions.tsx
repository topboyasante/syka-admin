import DataTable from '@/components/ui/data-table';
import React from 'react';
// import { TRANSACTIONS_LIST } from '../../data';
import { TransactionTableColumns } from './columns';
import { fetchTransactions } from '@/services/transactions';

async function AllTransactions() {
  const TRANSACTIONS_LIST = await fetchTransactions();
  return (
    <div className="p-3 bg-white border border-[#EAECF0] rounded-md">
      <DataTable data={TRANSACTIONS_LIST} columns={TransactionTableColumns} />
    </div>
  );
}

export default AllTransactions;
