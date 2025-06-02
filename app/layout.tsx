import type { Metadata } from "next";
import { GeistMono } from 'geist/font/mono';
import localFont from 'next/font/local';
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import Spotlight from "@/components/ui/spotlight";

const primary_font = GeistMono;
const secondary_font = localFont({
  src: '../public/fonts/Aeonik-Regular.otf',
  variable: '--font-secondary'
});

export const metadata: Metadata = {
  title: "Duncan Sebampitako",
  description: "Machine Learning Engineer | AI Student | NLP Specialist",
  keywords: [
    "Duncan Sebampitako",
    "Machine Learning Engineer",
    "Artificial Intelligence",
    "Natural Language Processing",
    "NLP",
    "AI Student",
    "La Trobe University",
    "PyTorch",
    "TensorFlow",
    "Python",
    "Deep Learning",
    "Melbourne AI",
    "Uganda ML Engineer"
  ],
  authors: [{ name: "Duncan Sebampitako" }],
  creator: "Duncan Sebampitako",
  verification: {
    google: "R-9NOObVtaOJLVqaRObczeX8-xmTwYC4koGtiL5vGX4",
  },
  openGraph: {
    title: "Duncan Sebampitako - Machine Learning Engineer",
    description: "Machine Learning Engineer pursuing MS in AI at La Trobe University. Specializing in NLP, Deep Learning, and AI applications.",
    url: "https://personal-website-e4aka9jey-sebampitakoduncans-projects.vercel.app",
    siteName: "Duncan Sebampitako Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Duncan Sebampitako - Machine Learning Engineer",
    description: "Machine Learning Engineer pursuing MS in AI at La Trobe University. Specializing in NLP, Deep Learning, and AI applications.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${primary_font.variable} ${secondary_font.variable} antialiased`}>
        <Spotlight />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
