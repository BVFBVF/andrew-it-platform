"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Users, Kanban, X } from "lucide-react";
import { useAppStore } from "@/store/use-app-store";
import { cn } from "@/lib/utils";

const navItems = [
  {
    href: "/match",
    label: "Candidate Match",
    icon: Users,
  },
  {
    href: "/pipeline",
    label: "Pipeline",
    icon: Kanban,
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const { sidebarOpen, toggleSidebar } = useAppStore();

  return (
    <>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-50 h-screen w-64 bg-neutral-950 border-r border-neutral-800 transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:shrink-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-16 items-center justify-between px-6 border-b border-neutral-800">
          <span className="text-xl font-bold text-white tracking-tight">IT Platform</span>
          <button onClick={toggleSidebar} className="lg:hidden text-neutral-400 hover:text-white">
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => {
                  if (window.innerWidth < 1024) toggleSidebar();
                }}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-neutral-400 hover:text-white hover:bg-neutral-900"
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
