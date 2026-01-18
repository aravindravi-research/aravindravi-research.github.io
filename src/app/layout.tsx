import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Aravind Ravi",
    template: "%s — Aravind Ravi"
  },
  description: SITE.description,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "profile",
    title: "Aravind Ravi",
    description: SITE.description,
    url: SITE.url
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": `${SITE.url}/#aravind-ravi`,
              name: SITE.name,
              url: SITE.url,
              jobTitle: "Staff Software Engineer",
              description: SITE.description,
              email: `mailto:${SITE.email}`,
              sameAs: [SITE.linkedin, SITE.quora],
              subjectOf: [
                {
                  "@type": "ScholarlyArticle",
                  "@id": "https://doi.org/10.5281/zenodo.18110920",
                  name: "HNIR: A Deterministic Intent Routing Control Plane for Distributed Conversational Systems",
                  sameAs: ["https://doi.org/10.5281/zenodo.18110920"]
                }
              ],

              owns: {
                "@type": "Organization",
                "@id": `${SITE.teknamin}/#teknamin-labs`,
                name: "Teknamin Labs",
                url: SITE.teknamin
              },
              memberOf: {
                "@type": "Organization",
                "@id": `${SITE.teknamin}/#teknamin-labs`,
                name: "Teknamin Labs",
                url: SITE.teknamin
              }
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
