import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/theme-provider';
import './globals.css';
import { AppSidebar } from '@/components/layout/AppSidebar';
import { UserProvider } from '@/components/providers/user-provider';
import { SidebarProvider } from '@/components/ui/sidebar';
import { Topbar } from '@/components/layout/Topbar';
import { RightSidebar } from '@/components/layout/RightSidebar';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Juspay | Ishvendra',
  description: 'Assignment project built with Next.js and Tailwind CSS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
        <UserProvider>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            <SidebarProvider defaultOpen={true} defaultRightOpen={true}>
              <AppSidebar />
              <div className='min-h-screen w-full'>
                <Topbar />

                {children}
              </div>
              <RightSidebar />
            </SidebarProvider>
          </ThemeProvider>
        </UserProvider>
      </body>
    </html>
  );
}
