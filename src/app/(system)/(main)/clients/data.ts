interface Identity {
  selfie: string;
}

export interface Client {
  ID: string;
  first_name: string;
  last_name: string;
  dob: string;
  sex: 'male' | 'female' | 'other' | 'prefer_not_to_say';
  identity: Identity;
  email: string;
  phone: string;
  city: string;
  country_code: string;
  country: string;
  created_by: string;
  branch_id: string;
  created_at: string;
  updated_at: string;
  company_name: string;
}

export interface CreateClient {
  first_name: string;
  last_name: string;
  dob: string;
  sex: string;
  email: string;
  phone: string;
  city: string;
  country_code: string;
  country: string;
  branch_id: string;
}
