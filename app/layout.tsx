import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./globals.scss";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tatsuya Kamimae | Portfolio",
  description: "UI UX Designer & Web Engineer Portfolio Site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={montserrat.variable}>
        <Header />
        <main className="l-wrapper">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
