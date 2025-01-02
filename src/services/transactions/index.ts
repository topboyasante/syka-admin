'use server';

import http from '@/lib/axios';
import { HandleApiError } from '..';

export async function fetchTransactions() {
  try {
    const response = await http.get('/transactions');

    return response.data.data;
  } catch (error) {
    return HandleApiError(error);
  }
}

export async function fetchTransactionByBranchId(id: string) {
  try {
    const response = await http.get(`/transactions/branch/${id}`);

    return response.data.data;
  } catch (error) {
    return HandleApiError(error);
  }
}

export async function fetchTransactionByClientId(id: string) {
  try {
    const response = await http.get(`/transactions/client/${id}`);

    return response.data.data;
  } catch (error) {
    return HandleApiError(error);
  }
}

export async function fetchTransactionByTellerId(id: string) {
  try {
    const response = await http.get(`/transactions/teller/${id}`);

    return response.data.data;
  } catch (error) {
    return HandleApiError(error);
  }
}

export async function getQuote(values: boolean) {
  try {
    const response = await http.post('/transactions/get-quote', values);

    return response.data.data;
  } catch (error) {
    return HandleApiError(error);
  }
}

export async function processOfframp(values: boolean) {
  try {
    const response = await http.post('/transactions/process-offramp', values);

    return response.data.data;
  } catch (error) {
    return HandleApiError(error);
  }
}

export async function processOnramp(values: boolean) {
  try {
    const response = await http.post('/transactions/process-onramp', values);

    return response.data.data;
  } catch (error) {
    return HandleApiError(error);
  }
}
