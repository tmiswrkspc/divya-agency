import { ReactNode } from 'react';

interface ProductsLayoutProps {
  children: ReactNode;
}

export default function ProductsLayout({ children }: ProductsLayoutProps) {
  return (
    <main className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </main>
  );
}