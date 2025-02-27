import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./component/header";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Parasoles Carlos Montagut",
  description: "Proyecto en costruccion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
