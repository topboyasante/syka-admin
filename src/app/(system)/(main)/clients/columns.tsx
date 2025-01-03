'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal } from 'lucide-react';
import { Client } from './data';
import UserComponent from '../components/users/user-component';
import { useState } from 'react';
import EditClient from './edit-client';

export const ClientsTableColumns: ColumnDef<Client>[] = [
  {
    accessorKey: 'email',
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
    accessorKey: 'phone',
    header: 'Phone',
  },
  {
    accessorKey: 'country',
    header: 'Country',
  },
  {
    accessorKey: 'city',
    header: 'City',
  },
  {
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) => {
      const client = row.original;

      const [showEditDialog, setShowEditDialog] = useState(false);

      return (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setShowEditDialog(true)}>
                Edit
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <EditClient
            client={client}
            open={showEditDialog}
            onClose={() => setShowEditDialog(false)}
          />
        </>
      );
    },
  },
];
