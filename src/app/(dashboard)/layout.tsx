import { AppSidebar } from '@/components/layout/AppSidebar';
import { RightSidebar } from '@/components/layout/RightSidebar';
import { Topbar } from '@/components/layout/Topbar';
import { SidebarProvider } from '@/components/ui/sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider defaultOpen={true} defaultRightOpen={true}>
      <AppSidebar />
      <div className='min-h-screen w-full'>
        <Topbar />

        {children}
      </div>
      <RightSidebar />
    </SidebarProvider>
  );
}
