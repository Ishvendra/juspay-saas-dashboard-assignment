'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
  useSidebar,
} from '@/components/ui/sidebar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Icon } from '@/components/ui/icon';
import Link from 'next/link';
import { useUser } from '@/components/providers/user-provider';
import { mainNav, tabbedNav } from '@/lib/nav-data';
import { NavLink } from '@/types';

export function RightSidebar() {
  const user = useUser();
  const { state } = useSidebar();

  const renderMenuItem = (link: NavLink) => (
    <SidebarMenuItem key={link.label}>
      <SidebarMenuButton asChild>
        <Link href={link.href!}>
          {link.icon && <Icon name={link.icon} />}
          <span>{link.label}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );

  return (
    <Sidebar variant='sidebar' collapsible='icon' side='right'>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size='lg' asChild>
              <div className='flex items-center py-1 gap-2'>
                <Avatar className='h-6 w-6'>
                  <AvatarImage src={user.avatarUrl.src} alt={user.name} />
                  <AvatarFallback>{user.initials}</AvatarFallback>
                </Avatar>
                <h1 className='text-sm font-normal leading-5'>{user.name}</h1>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup className='group-data-[collapsible=icon]:hidden'>
          <Tabs defaultValue={tabbedNav[0].title}>
            <TabsList className='grid grid-cols-2 bg-transparent p-0 gap-2'>
              {tabbedNav.map((tab) => (
                <TabsTrigger
                  key={tab.title}
                  value={tab.title}
                  className='tabs-trigger text-black-20 border-none !bg-transparent font-normal'
                >
                  {tab.title}
                </TabsTrigger>
              ))}
            </TabsList>
            {tabbedNav.map((tab) => (
              <TabsContent key={tab.title} value={tab.title}>
                <SidebarMenu>{tab.links.map(renderMenuItem)}</SidebarMenu>
              </TabsContent>
            ))}
          </Tabs>
        </SidebarGroup>

        {mainNav.map((section) => (
          <SidebarGroup key={section.title}>
            <SidebarGroupLabel className='text-sm'>
              {section.title}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {section.links.map((link) =>
                  link.subLinks ? (
                    <Collapsible
                      key={link.label}
                      asChild
                      defaultOpen={false}
                      className='group/collapsible'
                    >
                      <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton tooltip={link.label}>
                            {state === 'expanded' && (
                              <Icon
                                name='chevronRight'
                                className='transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90'
                              />
                            )}
                            {link.icon && <Icon name={link.icon} />}
                            <span>{link.label}</span>
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {link.subLinks.map((subLink) => (
                              <SidebarMenuSubItem key={subLink.label}>
                                <SidebarMenuSubButton asChild className='ml-6'>
                                  <Link href={subLink.href!}>
                                    {subLink.icon && (
                                      <Icon name={subLink.icon} />
                                    )}
                                    <span>{subLink.label}</span>
                                  </Link>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </SidebarMenuItem>
                    </Collapsible>
                  ) : (
                    <SidebarMenuItem key={link.label}>
                      <SidebarMenuButton
                        asChild
                        tooltip={link.label}
                        className='pl-8'
                      >
                        <Link href={link.href!}>
                          {link.icon && <Icon name={link.icon} />}
                          <span>{link.label}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                )}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
