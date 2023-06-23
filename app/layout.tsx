"use client"

import { Chakra } from "./chakra";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Chakra>{children}</Chakra>
      </body>
    </html>
  );
}