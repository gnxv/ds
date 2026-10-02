import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fiolet-gel.ru"),
  title: {
    default: "Fiolet · Коррекция фигуры R-Sleek и Солярий",
    template: "%s · Fiolet",
  },
  description: "Fiolet · Коррекция фигуры R-Sleek и Солярий.",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "Fiolet",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    yandex: "7bc3da38f7790f58",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${manrope.variable} ${cormorant.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
