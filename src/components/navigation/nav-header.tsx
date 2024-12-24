import React from "react";
import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import Image from "next/image";

function NavHeader() {
  return (
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton size="lg" asChild>
            <div className="flex items-center">
              <div className="h-8 w-24 relative flex items-center">
                <Image
                  width={1920}
                  height={1080}
                  src="/images/syka-logo.svg"
                  alt="Syka Logo"
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
  );
}

export default NavHeader;
