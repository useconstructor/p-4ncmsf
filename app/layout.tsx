import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ember & Oak | Specialty Coffee Roastery & Café",
  description: "Portland specialty coffee roastery featuring single-origin beans from family farms across Ethiopia, Colombia, and Guatemala. Visit our café or shop online.",
  keywords: "specialty coffee, Portland coffee, single-origin, coffee roastery, direct trade coffee",
  openGraph: {
    title: "Ember & Oak | Specialty Coffee Roastery & Café",
    description: "Slow-roasted. Carefully sourced. Always fresh.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
