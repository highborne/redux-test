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
      <body>{children}</body>
    </html>
  );
}
