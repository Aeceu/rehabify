import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/page";
import { ThemeProvider } from "../../context/ThemeContext";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rehabify",
  description: "Alcohol and Drugs Rehabilitation Center",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" as="icon" href="/favicon/favicon.ico" sizes="any" />
        <link
          rel="stylesheet"
          href="./global.css"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
      </Head>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="container">
            <NavBar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
