import avatar from '@/assets/images/avatar.jpg';
import { getInitials } from './utils';
import { InfoListItemData } from '@/types';
import mockImg1 from '@/assets/images/mock-1.jpg';
import mockImg2 from '@/assets/images/mock-2.jpg';
import mockImg3 from '@/assets/images/mock-3.jpg';
import mockImg4 from '@/assets/images/mock-4.jpg';
import mockImg5 from '@/assets/images/mock-5.jpg';
import mockImg6 from '@/assets/images/mock-6.jpg';
import mockImg7 from '@/assets/images/mock-7.jpg';
import mockImg8 from '@/assets/images/mock-8.jpg';
import mockImg9 from '@/assets/images/mock-9.jpg';
import mockImg10 from '@/assets/images/mock-10.jpg';
import mockImg11 from '@/assets/images/mock-11.jpg';

const userName = 'ByeWind';

export const user = {
  name: userName,
  initials: getInitials(userName),
  avatarUrl: avatar,
};

export const mockNotifications: InfoListItemData[] = [
  {
    type: 'bug',
    title: 'You have a bug that needs to be fixed.',
    timestamp: 'Just now',
  },
  {
    type: 'newUser',
    title: 'New user registered',
    timestamp: '59 minutes ago',
  },
  {
    type: 'bug',
    title: 'You have a bug that needs to be fixed.',
    timestamp: '12 hours ago',
  },
  {
    type: 'subscription',
    title: 'Andi Lane subscribed to you',
    timestamp: 'Today, 11:59 AM',
  },
];

export const mockActivities: InfoListItemData[] = [
  {
    avatarUrl: mockImg1,
    title: 'You have a bug that needs to be fixed.',
    timestamp: 'Just now',
  },
  {
    avatarUrl: mockImg2,
    title: 'Released a new version',
    timestamp: '59 minutes ago',
  },
  {
    avatarUrl: mockImg3,
    title: 'Submitted a bug',
    timestamp: '12 hours ago',
  },
  {
    avatarUrl: mockImg4,
    title: 'Modified A data in Page X',
    timestamp: 'Today, 11:59 AM',
  },
  {
    avatarUrl: mockImg5,
    title: 'Deleted a page in Project X',
    timestamp: 'Feb 2, 2023',
  },
];

export const mockContacts: InfoListItemData[] = [
  {
    avatarUrl: mockImg6,
    title: 'Natali Craig',
  },
  {
    avatarUrl: mockImg7,
    title: 'Drew Cano',
  },
  {
    avatarUrl: mockImg8,
    title: 'Orlando Diggs',
  },
  {
    avatarUrl: mockImg9,
    title: 'Andi Lane',
  },
  {
    avatarUrl: mockImg10,
    title: 'Kate Morrison',
  },
  {
    avatarUrl: mockImg11,
    title: 'Koray Okumus',
  },
];
