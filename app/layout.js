import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import LoadingScreen from "@/components/ui/loading";
import "./globals.css";
import { Playfair_Display, DM_Sans } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://gloryeduserve.com"),
  title: {
    default: "Contact Us, Click Here",
    template: "%s | Glory Educational Services",
  },
  description:
    "With 28 years of experience, Glory Educational Services helps Nigerians choose the right courses and careers before studying abroad — so you arrive with a plan, not just a dream.",
  keywords: [
    "study abroad Nigeria",
    "overseas education consulting",
    "study in Europe Nigeria",
    "nursing abroad Nigeria",
    "career counselling study abroad",
    "Glory Educational Services",
    "scholarships Nigeria students",
    "IT abroad Nigeria",
    "engineering study abroad",
  ],
  authors: [{ name: "Glory Educational Services" }],
  creator: "Glory Educational Services",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://gloryeduserve.com",
    siteName: "Glory Educational Services",
    title: "Glory Educational Services — Study Abroad with Purpose",
    description:
      "28 years helping Nigerians build global careers. Career guidance, course selection & study abroad consulting.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Glory Educational Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Glory Educational Services — Study Abroad with Purpose",
    description:
      "28 years helping Nigerians build global careers. Career guidance, course selection & study abroad consulting.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://gloryeduserve.com",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#8B1A4A",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Glory Educational Services",
              url: "https://gloryeduserve.com",
              telephone: "+234-8170685999",
              email: "enquiries@gloryeduserve.com",
              description:
                "Study abroad consulting and career guidance for Nigerian students, with 28 years of experience.",
              foundingDate: "1998",
              areaServed: "Nigeria",
              serviceType: "Study Abroad Consulting",
            }),
          }}
        />
      </head>
      <body>
        <LoadingScreen />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
