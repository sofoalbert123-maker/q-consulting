import './globals.css';

export const metadata = {
  title: 'Q Consulting | Software Engineering & Tech Consulting | South Africa',
  description: 'South Africa\'s trusted partner for tech implementation and software engineering consulting. We build, ship, and scale world-class software for ambitious companies.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
