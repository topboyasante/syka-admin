'use server';

import http from '@/lib/axios';
import { AxiosResponse } from 'axios';
import { HandleApiError } from '..';
import { ApiResponse, ErrorResponse } from '../types';
import { Branch, BranchResponse } from './types';
import { BranchFormValues } from '@/app/(system)/(main)/components/branches/create-branch';

/**
 * Fetches all branches
 * @returns Promise with array of branches or error response
 */
export async function fetchBranches(): Promise<Branch[] | ErrorResponse> {
  try {
    const response: AxiosResponse<ApiResponse<Branch[]>> = await http.get(
      '/branches'
    );
    return response.data.data;
  } catch (error) {
    return HandleApiError(error);
  }
}

/**
 * Fetches a single branch by ID
 * @param id - Branch ID
 * @returns Promise with branch data or error response
 */
export async function fetchBranch(id: string): Promise<Branch | ErrorResponse> {
  try {
    const response: AxiosResponse<ApiResponse<Branch>> = await http.get(
      `/branches/${id}`
    );
    return response.data.data;
  } catch (error) {
    return HandleApiError(error);
  }
}

/**
 * Creates a new branch
 * @param values - Branch data
 * @returns Promise with success/error response
 */
export async function createBranch(
  values: Omit<BranchFormValues, 'id'>
): Promise<BranchResponse> {
  try {
    const response: AxiosResponse<ApiResponse<Branch>> = await http.post(
      '/branches',
      values
    );
    return {
      error: false,
      message: response.data.message,
      data: response.data.data,
    };
  } catch (error) {
    return HandleApiError(error);
  }
}

/**
 * Updates an existing branch
 * @param values - Updated branch data
 * @param id - Branch ID
 * @returns Promise with success/error response
 */
export async function editBranch(
  values: Partial<BranchFormValues>,
  id: string
): Promise<BranchResponse> {
  try {
    const response: AxiosResponse<ApiResponse<Branch>> = await http.patch(
      `/branches/${id}`,
      values
    );
    return {
      error: false,
      message: response.data.message,
      data: response.data.data,
    };
  } catch (error) {
    return HandleApiError(error);
  }
}
