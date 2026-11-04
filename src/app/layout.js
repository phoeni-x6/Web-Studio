import "./globals.css";
import { Space_Grotesk, Manrope } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import Preloader from "@/components/layout/Preloader";

const heading = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata = {
  title: "Web Studio | Creative Digital Agency",
  description:
    "Creative websites and digital experiences for ambitious businesses.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <body className={`${heading.variable} ${body.variable}`}>
  <Preloader />
  <ScrollProgress />
  <Navbar />

  {children}

  <Footer />
</body>
    </html>
  );
}