import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hello Baby",
  description: "A playful greeting crafted by Codex"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
