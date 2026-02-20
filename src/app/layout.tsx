import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Health App",
  description: "Instagram-style login and health check pages"
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
