'use client';

import { Sidebar, SidebarContent } from '@/components/ui/sidebar';
import { InfoList } from '../common/info-list';
import {
  mockActivities,
  mockContacts,
  mockNotifications,
} from '@/lib/mock-data';

export function RightSidebar() {
  return (
    <Sidebar variant='sidebar' collapsible='offcanvas' side='right'>
      <SidebarContent>
        <aside className='hidden xl:flex flex-col w-full p-5 gap-6 border-l'>
          <InfoList
            title='Notifications'
            items={mockNotifications}
            variant='notifications'
          />
          <InfoList
            title='Activities'
            items={mockActivities}
            variant='activities'
          />
          <InfoList title='Contacts' items={mockContacts} variant='contacts' />
        </aside>
      </SidebarContent>
    </Sidebar>
  );
}
