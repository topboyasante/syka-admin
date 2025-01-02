import CustomTabs from '@/components/ui/custom-tabs';
import React from 'react';
import { TranasactionManagementTabs } from './transaction-tabs';

function TransactionMonitoring() {
  return (
    <div className="p-5">
      <div className="flex justify-between items-center gap-5">
        <h2 className="font-semibold text-lg lg:text-xl">
          Transaction Monitoring & Management
        </h2>
      </div>
      <div className="py-10">
        <CustomTabs content={TranasactionManagementTabs} />
      </div>
    </div>
  );
}

export default TransactionMonitoring;
