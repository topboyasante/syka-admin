"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Branch } from "@/services/branches/types";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { useState } from "react";
import DeleteBranchDialog from "./delete-branch";
import { EditBranchModal } from "./edit-branch";
import ViewBranchDialog from "./view-branch";

export const BranchesTableColumns = (
  branches: Branch[]
): ColumnDef<Branch>[] => [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      const branch = row.original;
      return <h1>{branch.name}</h1>;
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
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const branch = row.original;
      const [showViewDialog, setShowViewDialog] = useState(false);
      const [showEditDialog, setShowEditDialog] = useState(false);
      const [showDeleteDialog, setShowDeleteDialog] = useState(false);

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
              <DropdownMenuItem onClick={() => setShowViewDialog(true)}>
                View
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setShowEditDialog(true)}>
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setShowDeleteDialog(true)}
                className="text-destructive"
              >
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <ViewBranchDialog
            branch={branch}
            open={showViewDialog}
            onClose={() => setShowViewDialog(false)}
          />

          <EditBranchModal
            branch={branch}
            existingBranches={branches}
            open={showEditDialog}
            onClose={() => setShowEditDialog(false)}
          />

          <DeleteBranchDialog
            branch={branch}
            open={showDeleteDialog}
            onClose={() => setShowDeleteDialog(false)}
          />
        </>
      );
    },
  },
];
