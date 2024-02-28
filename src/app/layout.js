import {Inter} from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";
import ToasterProvider from "@/components/ToasterProvider";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
  title: "Portfolio",
  description: "animated portfolio page",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToasterProvider />
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
