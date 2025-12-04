import type React from "react"
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { LayoutDashboard, TrendingUp, Wallet } from "lucide-react"
import Link from "next/link"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader className="border-b border-sidebar-border p-4">
          <div className="flex items-center gap-3">
            <div className="block md:hidden">
              <SidebarTrigger />
            </div>
            <div className="text-xl font-bold gradient-text">FluxRisk</div>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive>
                <Link href="/dashboard" className="flex items-center gap-3">
                  <LayoutDashboard className="w-5 h-5" />
                  <span>Dashboard</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/dashboard/markets" className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5" />
                  <span>Markets</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/dashboard/portfolio" className="flex items-center gap-3">
                  <Wallet className="w-5 h-5" />
                  <span>Portfolio</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>

        <SidebarFooter className="border-t border-sidebar-border p-4">
          <div className="text-sm font-semibold">Anish Singh</div>
          <div className="text-xs text-muted-foreground">Demo User</div>
        </SidebarFooter>
      </Sidebar>

      <main className="flex-1">{children}</main>
    </SidebarProvider>
  )
}
