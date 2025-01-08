import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Smart Tech & Power Solutions Nig Ltd | Solar, Electrical & Security`,
  description: `Leading provider of solar energy, electrical installations, and security surveillance solutions in Nigeria. Powering homes and businesses with innovative and reliable technology.`,
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
