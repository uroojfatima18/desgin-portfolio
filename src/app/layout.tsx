import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Urooj Fatima -Portfolio",
  description:
    "Portfolio of Urooj Fatima, Build high qualtiy Post For your Brand , AI video generation  viral social slide decks, and Agentic AI Systems.",
  openGraph: {
    title: "Urooj Fatima -Portfolio",
    description:
      "Crafting distinct digital experiences, slide decks, and Agentic AI workflows.",
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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/assets/urooj.jpg" type="image/jpeg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Antonio:wght@600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main className="app-container">{children}</main>
      </body>
    </html>
  );
}
