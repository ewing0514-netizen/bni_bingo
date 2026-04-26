import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BNI長鑽分會 | 線上商務引薦與會員交流",
  description:
    "BNI長鑽分會提供線上商務引薦、跨產業會員交流與結構化例會，協助企業主與專業人士建立可信任的合作網絡。",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
