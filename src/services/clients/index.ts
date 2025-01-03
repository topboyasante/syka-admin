'use server';

import http from '@/lib/axios';
import { HandleApiError } from '..';
import { ClientFormValues } from '@/app/(system)/(main)/clients/edit-client';
import { revalidatePath } from 'next/cache';

export async function fetchClients() {
  try {
    const response = await http.get('/clients');

    return response.data.data;
  } catch (error) {
    HandleApiError(error);
  }
}

export async function fetchClient(id: string) {
  try {
    const response = await http.get(`/clients/${id}`);

    return response.data.data;
  } catch (error) {
    HandleApiError(error);
  }
}

export async function createClient(values: boolean) {
  try {
    const response = await http.post(`/clients`, values);

    return response.data.data;
  } catch (error) {
    HandleApiError(error);
  }
}

export async function updateClient(values: ClientFormValues, id: string) {
  try {
    await http.patch(`/clients/${id}`, values);
    revalidatePath('/clients');
  } catch (error) {
    HandleApiError(error);
  }
}

export async function searchClient(query: string) {
  try {
    const response = await http.get(`/clients/search?q=${query}`);

    return response.data.data;
  } catch (error) {
    HandleApiError(error);
  }
}

export async function verifyClient(values: boolean) {
  try {
    const response = await http.post(`/clients/upload-image`, values);

    return response.data.data;
  } catch (error) {
    HandleApiError(error);
  }
}
