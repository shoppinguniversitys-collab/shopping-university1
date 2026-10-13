
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shopping University | Fashion & Lifestyle",
  description:
    "Discover your style with Shopping University. Fashion delivered to your doorstep with Cash on Delivery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
