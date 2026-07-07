import "@/assets/globals.css";
import type { Metadata } from "next";
import { appConfig } from "@/config/app.config";
import { Sidebar } from "@/components/Sidebar";
import { TopBar } from "@/components/TopBar";

export const metadata: Metadata = {
  title: appConfig.title,
  description: appConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased dark"
      suppressHydrationWarning
    >
      <body className="h-full flex bg-neutral-950 text-neutral-100 overflow-hidden">
        <Sidebar />
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
          <TopBar />
          <main className="flex-1 overflow-y-auto">
            <div className="min-h-[calc(100vh-(--spacing(16)))] bg-neutral-950 text-neutral-100 p-6 md:p-12 font-sans w-full">
              <div className="w-full flex flex-col flex-1 min-h-0">
                {children}
              </div>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
