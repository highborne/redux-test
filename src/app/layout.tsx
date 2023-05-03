import Header from './components/Header';

import { Providers } from 'redux/provides';

import './globals.css';

export const metadata = {
  title: 'Highborne template',
  description: 'Model repository for new projects',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body>
          <Header />
          {children}
        </body>
      </Providers>
    </html>
  );
}
