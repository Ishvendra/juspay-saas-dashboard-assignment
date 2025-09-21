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
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function AppSidebar() {
  const user = useUser();
  const { state } = useSidebar();
  const pathname = usePathname();
  const [openCollapsibles, setOpenCollapsibles] = useState<string[]>([]);

  const handleOpenChange = (label: string, isOpen: boolean) => {
    setOpenCollapsibles((prev) =>
      isOpen ? [...prev, label] : prev.filter((item) => item !== label)
    );
  };

  const renderMenuItem = (link: NavLink, index: number = 0) => (
    <motion.div
      key={link.label}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <SidebarMenuItem>
        <SidebarMenuButton asChild>
          <Link href={link.href!}>
            {link.icon && <Icon name={link.icon} />}
            <span>{link.label}</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </motion.div>
  );

  const renderLink = (link: NavLink, isSubItem = false, index: number = 0) => {
    const isActive = pathname === link.href;

    return (
      <motion.div
        key={link.label}
        initial={{ opacity: 0, x: isSubItem ? -10 : -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: index * 0.03 }}
      >
        <SidebarMenuItem className='relative'>
          <AnimatePresence>
            {isActive && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className='absolute left-6 top-1.5 h-5 w-1 rounded-full bg-primary'
              />
            )}
          </AnimatePresence>
          <motion.div transition={{ duration: 0.2 }}>
            <SidebarMenuButton
              asChild
              className={cn(isSubItem && 'ml-6', isActive && 'bg-accent')}
            >
              <Link href={link.href!}>
                {link.icon && <Icon name={link.icon} />}
                <span>{link.label}</span>
              </Link>
            </SidebarMenuButton>
          </motion.div>
        </SidebarMenuItem>
      </motion.div>
    );
  };

  return (
    <Sidebar side='left' variant='sidebar' collapsible='icon'>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className='p-1'>
            <SidebarMenuButton size='lg' asChild>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className='flex items-center gap-2'
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Avatar className='h-6 w-6'>
                    <AvatarImage src={user.avatarUrl.src} alt={user.name} />
                    <AvatarFallback>{user.initials}</AvatarFallback>
                  </Avatar>
                </motion.div>
                <h1 className='text-sm font-normal leading-5'>{user.name}</h1>
              </motion.div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup className='group-data-[collapsible=icon]:hidden'>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Tabs defaultValue={tabbedNav[0].title}>
              <TabsList className='grid grid-cols-2 bg-transparent p-0 gap-2'>
                {tabbedNav.map((tab, index) => (
                  <motion.div
                    key={tab.title}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    <TabsTrigger
                      value={tab.title}
                      className='tabs-trigger text-black-20 border-none !bg-transparent font-normal'
                    >
                      {tab.title}
                    </TabsTrigger>
                  </motion.div>
                ))}
              </TabsList>
              {tabbedNav.map((tab) => (
                <TabsContent key={tab.title} value={tab.title}>
                  <SidebarMenu>
                    {tab.links.map((link, index) =>
                      renderMenuItem(link, index)
                    )}
                  </SidebarMenu>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
        </SidebarGroup>

        {mainNav.map((section, sectionIndex) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 + sectionIndex * 0.1 }}
          >
            <SidebarGroup>
              <SidebarGroupLabel className='text-sm'>
                {section.title}
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {section.links.map((link, linkIndex) => {
                    const isSubActive = link.subLinks?.some(
                      (sub) => sub.href === pathname
                    );
                    const isCollapsibleOpen = openCollapsibles.includes(
                      link.label
                    );
                    const isCollapsed = state === 'collapsed';
                    const shouldHighlightParent = isCollapsed && isSubActive;

                    return link.subLinks ? (
                      <motion.div
                        key={link.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: linkIndex * 0.05 }}
                      >
                        <Collapsible
                          asChild
                          defaultOpen={false}
                          className='group/collapsible'
                          onOpenChange={(isOpen) =>
                            handleOpenChange(link.label, isOpen)
                          }
                        >
                          <SidebarMenuItem className='relative'>
                            <AnimatePresence>
                              {((isSubActive && !isCollapsibleOpen) ||
                                shouldHighlightParent) && (
                                <motion.div
                                  initial={{ scale: 0, opacity: 0 }}
                                  animate={{ scale: 1, opacity: 1 }}
                                  exit={{ scale: 0, opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className='absolute left-0 top-1.5 h-5 w-1 rounded-full bg-primary'
                                />
                              )}
                            </AnimatePresence>
                            <CollapsibleTrigger asChild>
                              <motion.div transition={{ duration: 0.2 }}>
                                <SidebarMenuButton
                                  tooltip={link.label}
                                  className={cn(
                                    ((isSubActive && !isCollapsibleOpen) ||
                                      shouldHighlightParent) &&
                                      'bg-accent'
                                  )}
                                >
                                  {state === 'expanded' && (
                                    <motion.div
                                      animate={{
                                        rotate: isCollapsibleOpen ? 90 : 0,
                                      }}
                                      transition={{ duration: 0.3 }}
                                    >
                                      <Icon
                                        name='chevronRight'
                                        className='transition-transform duration-200'
                                      />
                                    </motion.div>
                                  )}
                                  {link.icon && <Icon name={link.icon} />}
                                  <span>{link.label}</span>
                                </SidebarMenuButton>
                              </motion.div>
                            </CollapsibleTrigger>
                            <CollapsibleContent forceMount>
                              <AnimatePresence>
                                {isCollapsibleOpen && (
                                  <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                  >
                                    <SidebarMenuSub>
                                      {link.subLinks.map((subLink, subIndex) =>
                                        renderLink(subLink, true, subIndex)
                                      )}
                                    </SidebarMenuSub>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </CollapsibleContent>
                          </SidebarMenuItem>
                        </Collapsible>
                      </motion.div>
                    ) : (
                      renderLink(link, false, linkIndex)
                    );
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </motion.div>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
