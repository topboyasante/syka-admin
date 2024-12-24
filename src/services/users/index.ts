'use server';

import http from '@/lib/axios';
import { HandleApiError } from '..';
import { ErrorResponse } from '../types';
import { UsersType } from './types';

export async function fetchUsers(): Promise<UsersType[] | ErrorResponse> {
  try {
    const response = await http.get('/users');

    return response.data.data;
  } catch (error) {
    return HandleApiError(error);
  }
}

export async function fetchUser(id: string) {
  try {
    const response = await http.get(`/users/${id}`);

    return response.data.data;
  } catch (error) {
    return HandleApiError(error);
  }
}

export async function updateUser(id: string) {
  try {
    const response = await http.patch(`/users/${id}`);

    return response.data.data;
  } catch (error) {
    return HandleApiError(error);
  }
}
