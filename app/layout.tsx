import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'STLB Rework Dashboard',
  description: 'Excel-powered STLB rework defect dashboard and trailer print reports.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
