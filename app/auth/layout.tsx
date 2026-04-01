
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex justify-center bg-blue-950 text-white">
      <section className="w-full sm:w-[350px] px-10">
        {children}
      </section>
    </main>
  );
}
