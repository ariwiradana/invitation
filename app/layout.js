import "./globals.css";

export const metadata = {
  title: "Manusa Yadnya Mepandes",
  description:
    "Karya Mecaru Rsi Gana Pedagingan Melaspas, Ngenteg Linggih lan Manusa Yadnya Mepandes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
