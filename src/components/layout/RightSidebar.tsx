'use client';

import { Sidebar, SidebarContent } from '@/components/ui/sidebar';
import { InfoList } from '../common/info-list';
import {
  mockActivities,
  mockContacts,
  mockNotifications,
} from '@/lib/mock-data';
import { useLoadingSimulator } from '@/hooks/use-loading-simulator';

export function RightSidebar() {
  const isLoading = useLoadingSimulator(1500);

  return (
    <Sidebar variant='sidebar' collapsible='offcanvas' side='right'>
      <SidebarContent>
        <aside className='xl:flex flex-col w-full p-4 gap-6 border-l'>
          <InfoList
            title='Notifications'
            items={mockNotifications}
            variant='notifications'
            isLoading={isLoading}
          />
          <InfoList
            title='Activities'
            items={mockActivities}
            variant='activities'
            isLoading={isLoading}
          />
          <InfoList
            title='Contacts'
            items={mockContacts}
            variant='contacts'
            isLoading={isLoading}
          />
        </aside>
      </SidebarContent>
    </Sidebar>
  );
}
