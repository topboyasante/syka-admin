"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";

import { Branch } from "@/services/branches/types";
import { MoreHorizontal } from "lucide-react";

export const BranchesTableColumns: ColumnDef<Branch>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      const rowItem = row.original;
      return <h1>{rowItem.name}</h1>;
    },
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "country",
    header: "Country",
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => {
      const rowItem = row.original;
      return `${rowItem.email}`;
    },
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
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
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
