import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  CalendarDays,
  User,
  Building2,
  CreditCard,
  ArrowRightLeft,
} from 'lucide-react';

async function TransactionDetail({ params }: { params: { ID: string } }) {
  console.log(params.ID);
  //   const transaction = await fetchTransaction(params.ID)
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
    }).format(amount);
  };
  return <h1>Page</h1>;

  //   return (
  //     <Card className="w-full max-w-2xl">
  //       <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
  //         <CardTitle className="text-2xl font-bold">
  //           Transaction Details
  //         </CardTitle>
  //         <Badge>{transaction.status}</Badge>
  //       </CardHeader>
  //       <CardContent className="space-y-6">
  //         {/* Transaction IDs Section */}
  //         <div className="space-y-4">
  //           <div className="flex items-center space-x-2">
  //             <User className="h-4 w-4 text-gray-500" />
  //             <span className="font-medium">Transaction ID:</span>
  //             <span className="font-mono">{transaction.ID}</span>
  //           </div>
  //           <div className="flex items-center space-x-2">
  //             <Building2 className="h-4 w-4 text-gray-500" />
  //             <span className="font-medium">Branch ID:</span>
  //             <span className="font-mono">{transaction.branch_id}</span>
  //           </div>
  //         </div>

  //         {/* Status Section */}
  //         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50 p-4 rounded-lg">
  //           <div>
  //             <span className="text-sm text-gray-500">Status</span>
  //             <p className="font-medium">{transaction.status}</p>
  //           </div>
  //           <div>
  //             <span className="text-sm text-gray-500">Onramp Status</span>
  //             <p className="font-medium">{transaction.status_onramp}</p>
  //           </div>
  //           <div>
  //             <span className="text-sm text-gray-500">Offramp Status</span>
  //             <p className="font-medium">{transaction.Status_offramp}</p>
  //           </div>
  //         </div>

  //         {/* Quote Details */}
  //         <div className="space-y-4">
  //           <h3 className="text-lg font-semibold flex items-center gap-2">
  //             <ArrowRightLeft className="h-5 w-5" />
  //             Quote Details
  //           </h3>
  //           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  //             <div className="space-y-2">
  //               <h4 className="text-sm font-medium text-gray-500">
  //                 Sender Details
  //               </h4>
  //               <div className="space-y-1">
  //                 <p>
  //                   Amount:{' '}
  //                   {formatCurrency(
  //                     transaction.quote_request.sender_amount,
  //                     transaction.quote_request.sender_currency
  //                   )}
  //                 </p>
  //                 <p>Country: {transaction.quote_request.sender_country_code}</p>
  //                 <p>
  //                   Payment Method:{' '}
  //                   {transaction.quote_request.sender_payment_method_type}
  //                 </p>
  //               </div>
  //             </div>
  //             <div className="space-y-2">
  //               <h4 className="text-sm font-medium text-gray-500">
  //                 Recipient Details
  //               </h4>
  //               <div className="space-y-1">
  //                 <p>
  //                   Country: {transaction.quote_request.recipient_country_code}
  //                 </p>
  //                 <p>Currency: {transaction.quote_request.recipient_currency}</p>
  //               </div>
  //             </div>
  //           </div>
  //         </div>

  //         {/* Timestamps */}
  //         <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t">
  //           <div className="flex items-center gap-1">
  //             <CalendarDays className="h-4 w-4" />
  //             Created: {formatDate(transaction.created_at)}
  //           </div>
  //           <div className="flex items-center gap-1">
  //             <CalendarDays className="h-4 w-4" />
  //             Updated: {formatDate(transaction.updated_at)}
  //           </div>
  //         </div>
  //       </CardContent>
  //     </Card>
  //   );
}

export default TransactionDetail;
