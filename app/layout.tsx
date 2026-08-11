import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alex Davey — Reinforcement Learning Researcher",
  description:
    "Alex Davey is a postdoctoral researcher at Inria TAU and Université Paris-Saclay, working on adaptive and efficient reinforcement learning.",
  metadataBase: new URL("https://alexdavey.github.io"),
  openGraph: {
    title: "Alex Davey — Reinforcement Learning Researcher",
    description: "Reinforcement learning for adaptive, efficient agents.",
    type: "website",
    url: "https://alexdavey.github.io",
    images: [
      {
        url: "/og.png",
        width: 1730,
        height: 909,
        alt: "Alex Davey — Reinforcement learning for adaptive, efficient agents.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Davey — Reinforcement Learning Researcher",
    description: "Reinforcement learning for adaptive, efficient agents.",
    images: ["/og.png"],
  },
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
