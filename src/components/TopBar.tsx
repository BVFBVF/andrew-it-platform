"use client";

import { Menu } from "lucide-react";
import { useAppStore } from "@/store/use-app-store";
import { appConfig } from "@/config/app.config";

export function TopBar() {
  const toggleSidebar = useAppStore((state) => state.toggleSidebar);

  return (
    <header className="h-16 border-b border-neutral-800 bg-neutral-950/50 backdrop-blur-md flex items-center px-4 lg:hidden sticky top-0 z-30">
      <button
        onClick={toggleSidebar}
        className="p-2 -ml-2 text-neutral-400 hover:text-white transition-colors rounded-lg hover:bg-neutral-900"
      >
        <Menu className="h-6 w-6" />
      </button>
      <span className="ml-2 text-lg font-semibold text-white tracking-tight">
        {appConfig.title}
      </span>
    </header>
  );
}
