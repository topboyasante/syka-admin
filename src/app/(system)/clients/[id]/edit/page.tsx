import React from "react";
import EditClient from "../../edit-client";
import { fetchClient } from "@/services/clients";

interface EditClientPageProps {
  params: {
    id: string;
  };
}

async function EditClientPage({ params }: EditClientPageProps) {
  const data = await fetchClient(params.id);


  return (
    <div>
      <EditClient client={data.client} />
    </div>
  );
}

export default EditClientPage;
