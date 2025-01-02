// import CrossBorderPayments from './cross-border-payments/cross-border-payments';
// import DisputeResolutions from './dispute-resolutions/dispute-resolutions';

import AllTransactions from './all-transactions/all-transactions';

export const TranasactionManagementTabs = [
  {
    id: 0,
    title: 'All Transactions',
    content: <AllTransactions />,
  },
  {
    id: 1,
    title: 'Percentages',
    content: <div>Percentages</div>,
  },
  //   {
  //     id: 1,
  //     title: 'Cross Border Payments',
  //     content: <CrossBorderPayments />,
  //   },
  //   {
  //     id: 2,
  //     title: 'Dispute Resolutions',
  //     content: <DisputeResolutions />,
  //   },
];
