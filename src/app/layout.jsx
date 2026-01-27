import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingActions from "./components/FloatingActions";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sri Lanka Tours Driver",
  description: "Discover Amazing Places in Sri Lanka",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}
