import Header from "../components/header";
import Footer from "../components/footer";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-[url('/grid.svg')] bg-opacity-40 ">
      <Header />
      <main className="w-full px-8 mx-auto md:max-w-6xl grow">{children}</main>
      <Footer />
    </div>
  );
}
