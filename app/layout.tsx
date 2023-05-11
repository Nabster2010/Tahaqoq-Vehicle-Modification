import "./globals.css";
import { Cairo, Inter, Noto_Naskh_Arabic } from "next/font/google";
import { MyThemeContextProvider } from "./context/themeContext";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import AuthProvider from "./components/authProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
});
const noto = Noto_Naskh_Arabic({
  subsets: ["arabic", "latin"],
  variable: "--font-noto",
});

export const metadata = {
  title: "Tahaqoq",
  description: "Tahaqoq Vehicle Inspection Center",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const session: any = getServerSession(authOptions);
  return (
    <html lang="en" className={`${inter.variable} ${cairo.variable}`}>
      <body className="flex flex-col min-h-screen ">
        <MyThemeContextProvider>
          <AuthProvider>{children}</AuthProvider>
        </MyThemeContextProvider>
      </body>
    </html>
  );
}
