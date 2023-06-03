import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/page";
import { ThemeProvider } from "../../context/ThemeContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rehabify",
  description: "Alcohol and Drugs Rehabilitation Center",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
      </head>
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
