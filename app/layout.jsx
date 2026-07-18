import "./globals.css";

export const metadata = {
  title: "Swami Enterprises",
  description: "Trusted financial guidance for long-term growth",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}