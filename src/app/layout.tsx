import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Urooj Fatima — Product & UI/UX Designer & Agentic AI Developer",
  description:
    "Portfolio of Urooj Fatima, Product & UI/UX Designer specializing in intuitive UI, viral social slide decks, and Agentic AI development.",
  openGraph: {
    title: "Urooj Fatima — Product & UI/UX Designer",
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
      </head>
      <body>
        <Navbar />
        <main className="app-container">{children}</main>
      </body>
    </html>
  );
}
