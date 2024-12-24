import CustomTabs from "@/components/ui/custom-tabs";
import React from "react";
import { UserManagementTabs } from "./components/mgt-tabs";

function UserManagementPage() {
  return (
    <section>
      <div className="flex justify-between items-center gap-5">
        <h2 className="font-semibold text-lg lg:text-xl">User Management</h2>
      </div>
      <div className="py-4">
        <CustomTabs content={UserManagementTabs} />
      </div>
    </section>
  );
}

export default UserManagementPage;
