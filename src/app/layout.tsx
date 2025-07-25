import "./globals.css";
import Header from "../app/components/Header";
import Footer from "../app/components/Footer";

export const metadata = {
  title: "10 Minute Clone",
  description: "Header UI with Tailwind and Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header /> {/* ✅ Add header */}
        {children}
        <Footer /> {/* ✅ Add footer */}
      </body>
    </html>
  );
}
