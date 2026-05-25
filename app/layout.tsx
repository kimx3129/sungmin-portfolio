import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:       "Sungmin Kim — Data Engineer & AWS Author",
  description:
    "Portfolio of Sungmin Kim — Data Engineer at Tempus Labs, AWS book author, ML practitioner, and online instructor.",
  keywords: [
    "Sungmin Kim",
    "Data Engineer",
    "AWS",
    "Python",
    "Machine Learning",
    "Portfolio",
    "San Jose",
  ],
  authors: [{ name: "Sungmin Kim", url: "https://github.com/kimx3129" }],
  openGraph: {
    type:        "website",
    locale:      "en_US",
    url:         "https://sungminkim.dev",
    title:       "Sungmin Kim — Data Engineer & AWS Author",
    description:
      "Portfolio of Sungmin Kim — Data Engineer at Tempus Labs, AWS book author, and ML practitioner.",
    siteName: "Sungmin Kim Portfolio",
  },
  twitter: {
    card:        "summary_large_image",
    title:       "Sungmin Kim — Data Engineer & AWS Author",
    description:
      "Portfolio of Sungmin Kim — Data Engineer at Tempus Labs, AWS book author, and ML practitioner.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-background text-text-primary font-body antialiased">
        {children}
      </body>
    </html>
  );
}
