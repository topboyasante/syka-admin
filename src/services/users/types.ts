export type UsersType = {
  user: {
    img_url: string;
    full_name: string;
    email: string;
  };
  role: string;
  country: string;
  registration_date: string;
  documents_uploaded: string;
  permissions: string[];
  activity_type: string;
  fraud_rate: number;
};
