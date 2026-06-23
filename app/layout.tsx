import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Exalt Impact Network | Empowering Faith. Transforming Futures.",
  description:
    "A Christian faith-driven social impact organization empowering people, strengthening communities, and transforming futures through holistic development, strategic partnerships, and values-based leadership.",
  keywords: "faith-based NGO, community development, Kenya, East Africa, social impact, holistic development",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
