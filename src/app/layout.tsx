import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP, Cardo } from "next/font/google";
import "./globals.css";

// Layout
import Header from "../components/layout/Header/Header";
import Footer from "../components/layout/Footer/Footer";

const notoSansJP = Noto_Sans_JP({
    variable: "--font-noto-sans-jp",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});
const notoSerifJP = Noto_Serif_JP({
    variable: "--font-noto-serif-jp",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});
const cardo = Cardo({
    variable: "--font-cardo",
    subsets: ["latin"],
    weight: ["400", "700"],
});
export const metadata: Metadata = {
    title: "HANDMADE",
    description: "Handmade products for your home",
};

export default function RootLayout({
    children,
    }: Readonly<{
        children: React.ReactNode;
    }>) {
    return (
        <html lang="en">
        <body className={`${cardo.variable} ${notoSansJP.variable} ${notoSerifJP.variable}`}>
            <Header />
            {children}
            <Footer />
        </body>
        </html>
    );
}
