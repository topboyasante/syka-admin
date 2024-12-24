'use client';

import { ColumnDef } from '@tanstack/react-table';
import UserComponent from './user-component';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal } from 'lucide-react';
import { UsersType } from '@/services/users/types';

export const UserListTableColumns: ColumnDef<UsersType>[] = [
  {
    accessorKey: 'user',
    header: 'User',
    cell: ({ row }) => {
      const rowItem = row.original;
      console.log(rowItem);
      return (
        <UserComponent
          email={rowItem.user?.email}
          name={rowItem.user?.full_name}
          img_url={rowItem.user?.img_url}
        />
      );
    },
  },
  {
    accessorKey: 'role',
    header: 'Role',
  },
  {
    accessorKey: 'country',
    header: 'Country',
  },
  {
    accessorKey: 'registration_date',
    header: 'Registration Date',
  },
  {
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) => {
      const rowItem = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(rowItem.user.email)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
