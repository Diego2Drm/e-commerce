import { NavBar, Sidebar } from "@/app/components";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen bg-blue-950 text-white pb-20">
      <NavBar />
      <Sidebar />
      <div className="px-0 sm:px-10">
      {children}
      </div>
    </main>
  );
}
