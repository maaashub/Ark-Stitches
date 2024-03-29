import {ModalContext }from "@/hook/context";
import "./globals.css";

export const metadata = {
  title: "ArkStitches",
  description:
    "Ark Stitches and Fashion Academy based in Abuja, F.C.T, Nigeria, was established in October 2017 with the aim of providing high susutainable fashion quality in designing Bespoke and ready-to-wear women outfit",
  keywords: "Fashion, Ready-to-wear, Fashion Design, Fabrics, Bridal Wears",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <ModalContext>{children}</ModalContext>
      </body>
    </html>
  );
}
