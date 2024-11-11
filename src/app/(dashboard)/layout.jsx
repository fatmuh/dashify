import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import Notification from "@/components/notification";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <SidebarProvider className="flex">
        <AppSidebar />
        <div className="flex flex-col flex-1">
          <header className="px-5 py-4 flex items-center justify-between">

            <div className="flex items-center gap-2 md:gap-3">
              <SidebarTrigger />
              <div className="flex md:hidden font-semibold text-sm">
                Dashify
              </div>
              <Breadcrumb className="hidden md:flex">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbPage>Dashify</BreadcrumbPage>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link href="/">Home</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            <Notification />
          </header>

          <main className="px-7 py-4 text-zinc-900">
            <Breadcrumb className="flex md:hidden mb-6">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage>Dashify</BreadcrumbPage>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            {children}
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
}
