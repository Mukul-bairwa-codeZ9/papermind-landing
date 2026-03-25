import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

// for better sharing preview - SEO specifc
export const metadata: Metadata = {
  title: "PaperMind — Chat with your documents",
  description: "Upload PDFs and get accurate answers powered by AI.",
  openGraph: {
    title: "PaperMind",
    description: "Chat with your documents using AI",
    url: "https://papermindhq.vercel.app",
    siteName: "PaperMind",
    images: [
      {
        url: "/images/demo.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-sans bg-black text-white `}>
        {children}
      </body>
    </html>
  );
}
