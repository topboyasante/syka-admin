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

      return (
        <UserComponent
          email={rowItem.email}
          name={rowItem.first_name + ' ' + rowItem.last_name}
          img_url={`https://api.dicebear.com/9.x/notionists/svg?seed=${
            rowItem.first_name + ' ' + rowItem.last_name
          }`}
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
              onClick={() => navigator.clipboard.writeText(rowItem.ID)}
            >
              Copy User ID
            </DropdownMenuItem>
            <DropdownMenuItem>View customer</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
