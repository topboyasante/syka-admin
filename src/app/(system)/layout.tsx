"use client";

import { AppSidebar } from "@/components/navigation/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { ProgressBar } from "@/components/ui/progress-bar";

const routeMap: Record<string, string> = {
  transactions: "Transaction Monitoring",
  revenue: "Revenue & Fees",
  liquidity: "Liquidity & Exchange Rate",
  compliance: "Compliance & Reporting",
  partners: "Partner & Bank",
  analytics: "Dashboard Analytics",
  support: "Support & Help Desk",
  admin: "System Admin",
  security: "Security Management",
};

function DynamicBreadcrumbs() {
  const pathname = usePathname();

  const breadcrumbs = useMemo(() => {
    const segments = pathname.split("/").filter(Boolean);

    return segments
      .map((segment, index) => {
        const path = `/${segments.slice(0, index + 1).join("/")}`;
        const isLast = index === segments.length - 1;
        const title =
          routeMap[segment] ||
          segment.charAt(0).toUpperCase() + segment.slice(1);

        return [
          <BreadcrumbItem key={path}>
            {isLast ? (
              <BreadcrumbPage>{title}</BreadcrumbPage>
            ) : (
              <BreadcrumbLink href={path}>{title}</BreadcrumbLink>
            )}
          </BreadcrumbItem>,
          !isLast && <BreadcrumbSeparator key={`${path}-separator`} />,
        ];
      })
      .flat()
      .filter(Boolean);
  }, [pathname]);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem key="dashboard">
          <BreadcrumbLink href="/">User Management</BreadcrumbLink>
        </BreadcrumbItem>
        {breadcrumbs.length > 0 && (
          <BreadcrumbSeparator key="dashboard-separator" />
        )}
        {breadcrumbs}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export default function SystemLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProgressBar className="fixed top-0 h-1 bg-primary">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <DynamicBreadcrumbs />
            </div>
          </header>
          <main className="flex-1 overflow-y-auto px-4 py-4">{children}</main>
        </SidebarInset>
      </SidebarProvider>
    </ProgressBar>
  );
}
