import Script from 'next/script';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'bg.ibelick - ready-to-use background snippets for web developers',
  description:
    'Ready-to-use, simply copy and paste into your next project. All snippets crafted with Tailwind CSS and Vanilla CSS for easy integration.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDev = process.env.NODE_ENV === 'development';

  return (
    <html lang="en">
      {!isDev ? (
        <Script
          async
          src="https://analytics.umami.is/script.js"  // need to change this
          data-website-id="c2c92159-f0c0-4700-a64e-9c74269ed6fc" // need to change this
        />
      ) : null}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
