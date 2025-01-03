"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import UserComponent from "../../(main)/components/users/user-component";
import Link from "next/link";
import { Client } from "@/services/clients/types";
import { ProgressBarLink } from "@/components/ui/progress-bar";

export const ClientsTableColumns: ColumnDef<Client>[] = [
  {
    accessorKey: "first_name",
    header: "User",
    cell: ({ row }) => {
      const client = row.original;
      return (
        <UserComponent
          email={client.email}
          name={`${client.first_name} ${client.last_name}`}
          img_url={`https://api.dicebear.com/9.x/notionists/svg?seed=${client.first_name} ${client.last_name}`}
        />
      );
    },
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "country",
    header: "Country",
  },
  {
    accessorKey: "city",
    header: "City",
  },
  {
    accessorKey: "company_name",
    header: "Company",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const client = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem asChild>
              <ProgressBarLink href={`/clients/${client.ID}`}>
                View Client Details
              </ProgressBarLink>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <ProgressBarLink href={`/clients/${client.ID}/edit`}>
                Edit Client
              </ProgressBarLink>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
