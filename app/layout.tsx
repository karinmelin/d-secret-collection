import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import ApolloWrapper from "../lib/apollo-wrapper";
import "./globals.css";

const albertSans = Albert_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dior Showroom",
  description: "The secret collection",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={albertSans.className}>
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  );
}
