import { ErrorResponse, SuccessResponse } from "../types";

export interface Branch {
  name: string;
  created_by: string;
  address: string;
  country: string;
  phone: string;
  email: string;
  ID: string;
  created_at: string;
  updated_at: string;
  parent_branch_id: string;
}

export type BranchResponse = ErrorResponse | SuccessResponse;
