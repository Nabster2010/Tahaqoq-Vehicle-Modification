import "./globals.css";
import { Cairo, Inter, Noto_Naskh_Arabic } from "next/font/google";
import { getServerSession, Session } from "next-auth";
import { headers } from "next/headers";
import AuthContext from "./context/authContext";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { MyThemeContextProvider } from "./context/themeContext";

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

// next auth
// async function getSession(cookie: string): Promise<Session> {
//   const response = await fetch(
//     `${process.env.LOCAL_AUTH_URL}/api/auth/session`,
//     {
//       headers: {
//         cookie,
//       },
//     }
//   );
//   const session = await response.json();
//   return Object.keys(session).length > 0 ? session : null;
// }

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //const session = await getSession(headers().get("cookie") ?? "");
  const session: any = await getServerSession(authOptions);
  return (
    <html lang="en" className={`${inter.variable} ${cairo.variable}`}>
      <body className="flex flex-col min-h-screen">
        <MyThemeContextProvider>
          <AuthContext session={session}>{children}</AuthContext>
        </MyThemeContextProvider>
      </body>
    </html>
  );
}
