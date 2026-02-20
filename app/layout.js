import Header from "@/components/layout/Header";
import "./globals.css";
import { Syne, DM_Sans, DM_Mono } from "next/font/google";
import Footer from "@/components/layout/Footer";
import { AppProvider } from "@/context/AppContext";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  weight: ["400", "500"],
});

export const metadata = {
  title: "Île-Ìwé",
  description: "Learn tech skills that matter.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased">
        <AppProvider>
          <Header className="sticky top-0 z-50" />

          <main id="main-content" className="flex-1">
            {children}
          </main>

          <Footer className="mt-auto" />
        </AppProvider>
      </body>
    </html>
  );
}
