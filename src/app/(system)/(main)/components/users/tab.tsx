import { Alert, AlertDescription } from '@/components/ui/alert';
import React from 'react';
import Users from './users';
import { fetchUsers } from '@/services/users';

export default async function UsersTabComponent() {
  const usersResponse = await fetchUsers();

  // Handle error case
  if ('error' in usersResponse) {
    return (
      <Alert variant="destructive">
        <AlertDescription>
          {usersResponse.message || 'Failed to load branches'}
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="space-y-4">
      <Users initialUsers={usersResponse} />
    </div>
  );
}
