import React from 'react';

interface PageLayoutProps {
  title: string;
  children: React.ReactNode;
}

export function PageLayout({ title, children }: PageLayoutProps) {
  return (
    <div className='p-7 flex flex-col gap-4'>
      <header className='px-2 py-1'>
        <h1 className='text-sm font-semibold tracking-tight'>{title}</h1>
      </header>

      <main>{children}</main>
    </div>
  );
}
