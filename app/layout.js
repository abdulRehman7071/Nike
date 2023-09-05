import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nike",
  description: "Just Do It.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" type="image/svg+xml" href="/assets/favicon.ico"></link>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
