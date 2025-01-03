import { Button } from "@/components/ui/button";
import DataTable from "@/components/ui/data-table";
import { ProgressBarLink } from "@/components/ui/progress-bar";
import { fetchClients } from "@/services/clients";
import { Plus } from "lucide-react";
import React from "react";
import { ClientsTableColumns } from "./components/columns";

export default async function ClientsPage() {
  const Clients = await fetchClients();
  return (
    <React.Fragment>
      <div className="flex justify-end">
        <ProgressBarLink href={"/clients/create"}>
          <Button>
            <Plus className="h-4 w-4" />
            Create Client
          </Button>
        </ProgressBarLink>
      </div>
      <div className="p-3  mt-5 bg-white border border-[#EAECF0] rounded-md">
        <DataTable data={Clients} columns={ClientsTableColumns} />
      </div>
    </React.Fragment>
  );
}
