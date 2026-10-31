import { Pinyon_Script, Cormorant_Garamond, Cinzel } from 'next/font/google';
import './globals.css';

const script = Pinyon_Script({ subsets: ['latin'], weight: '400', variable: '--font-script', display: 'swap' });
const serif = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});
const caps = Cinzel({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-caps', display: 'swap' });

export const metadata = {
  title: 'Anchal & Rohan · 19 January 2027',
  description:
    'With the blessings of Almighty God and our families, we joyfully invite you to the holy matrimony of Anchal & Rohan — Tuesday, 19th January 2027, Pune.',
  openGraph: {
    title: 'Anchal & Rohan · Holy Matrimony',
    description: 'Tuesday, 19th January 2027 · United Church of Christ, Pimpri, Pune',
    type: 'website',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#efe6f8',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${script.variable} ${serif.variable} ${caps.variable}`}>
      <body>{children}</body>
    </html>
  );
}
