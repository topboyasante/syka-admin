export type Transaction = {
  ID: string;
  sender_id: string;
  branch_id: string;
  teller_id: string;
  status: string;
  status_onramp: string;
  Status_offramp: string;
  quote_request: {
    recipient_country_code: string;
    recipient_currency: string;
    sender_amount: number;
    sender_country_code: string;
    sender_currency: string;
    sender_id: string;
    sender_payment_method_type: string;
    transaction_type: string;
  };
  third_party: unknown;
  created_at: string;
  updated_at: string;
};

export type Dispute = {
  dispute_id: string;
  user: {
    img_url: string;
    full_name: string;
    email: string;
  };
  dispute_amount: string;
  message: string;
  status: string;
};

export const DISPUTE_LIST: Dispute[] = [
  {
    dispute_id: '877569',
    user: {
      img_url: 'https://api.dicebear.com/9.x/open-peeps/svg?seed=Olivia',
      full_name: 'Olivia Rhye',
      email: 'olivia@gmail.com',
    },
    dispute_amount: 'GHc 340.00',
    message: 'Message',
    status: 'Pending',
  },
  {
    dispute_id: '877569',
    user: {
      img_url: 'https://api.dicebear.com/9.x/open-peeps/svg?seed=Phoenix',
      full_name: 'Phoenix Baker',
      email: 'phoenix@gmail.com',
    },
    dispute_amount: 'GHc 340.00',
    message: 'Message',
    status: 'Resolved',
  },
  {
    dispute_id: '877569',
    user: {
      img_url: 'https://api.dicebear.com/9.x/open-peeps/svg?seed=Lana',
      full_name: 'Lana Steiner',
      email: 'lana@gmail.com',
    },
    dispute_amount: 'GHc 340.00',
    message: 'Message',
    status: 'Opened',
  },
  {
    dispute_id: '877569',
    user: {
      img_url: 'https://api.dicebear.com/9.x/open-peeps/svg?seed=Demi',
      full_name: 'Demi Wilkinson',
      email: 'demi@gmail.com',
    },
    dispute_amount: 'GHc 340.00',
    message: 'Message',
    status: 'Resolved',
  },
  {
    dispute_id: '877569',
    user: {
      img_url: 'https://api.dicebear.com/9.x/open-peeps/svg?seed=Candice',
      full_name: 'Candice Wu',
      email: 'candice@gmail.com',
    },
    dispute_amount: 'GHc 340.00',
    message: 'Message',
    status: 'Resolved',
  },
  {
    dispute_id: '877569',
    user: {
      img_url: 'https://api.dicebear.com/9.x/open-peeps/svg?seed=Natali',
      full_name: 'Natali Craig',
      email: 'natali@gmail.com',
    },
    dispute_amount: 'GHc 340.00',
    message: 'Message',
    status: 'Resolved',
  },
  {
    dispute_id: '877569',
    user: {
      img_url: 'https://api.dicebear.com/9.x/open-peeps/svg?seed=Drew',
      full_name: 'Drew Cano',
      email: 'drew@gmail.com',
    },
    dispute_amount: 'GHc 340.00',
    message: 'Message',
    status: 'Resolved',
  },
];
