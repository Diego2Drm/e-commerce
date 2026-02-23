import { NavBar } from "@/app/components";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen bg-blue-950 text-white">
      <NavBar />
      {children}
    </main>
  );
}
