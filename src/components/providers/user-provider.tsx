'use client';

import React, { createContext, useContext } from 'react';
import { user } from '@/lib/mock-data';
import { StaticImageData } from 'next/image';

interface User {
  name: string;
  initials: string;
  avatarUrl: StaticImageData;
}

const UserContext = createContext<User | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  // For this assignment, I've passed the static mock user object as the value.
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
