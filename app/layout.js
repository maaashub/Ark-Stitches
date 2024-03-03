
import "./globals.css";


export const metadata = {
  title: "ArkStitches",
  description: "Ark Stitches and Fashion Academy based in Abuja, F.C.T, Nigeria, was established in October 2017 with the aim of providing high susutainable fashion quality in designing Bespoke and ready-to-wear women outfit",
  keywords: "Fashion, Ready-to-wear, Fashion Design"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
