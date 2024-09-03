import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import ApolloWrapper from "../lib/apollo-wrapper";
import "./globals.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./_styles/theme";

const albertSans = Albert_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "D Showroom",
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
