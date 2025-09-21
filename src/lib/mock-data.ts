import avatar from '@/assets/images/avatar.jpg';
import { getInitials } from './utils';
import { InfoListItemData, Order } from '@/types';
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

export const mockOrders: Order[] = [
  {
    id: '#CM9801',
    user: {
      name: 'Natali Craig',
      avatarUrl: '/avatars/01.png',
      initials: 'NC',
    },
    project: 'Landing Page',
    address: 'Meadow Lane Oakland',
    date: 'Just now',
    status: 'In Progress',
  },
  {
    id: '#CM9802',
    user: {
      name: 'Kate Morrison',
      avatarUrl: '/avatars/02.png',
      initials: 'KM',
    },
    project: 'CRM Admin pages',
    address: 'Larry San Francisco',
    date: 'A minute ago',
    status: 'Complete',
  },
  {
    id: '#CM9803',
    user: { name: 'Drew Cano', avatarUrl: '/avatars/03.png', initials: 'DC' },
    project: 'Client Project',
    address: 'Bagwell Avenue Ocala',
    date: '1 hour ago',
    status: 'Pending',
  },
  {
    id: '#CM9804',
    user: {
      name: 'Orlando Diggs',
      avatarUrl: '/avatars/04.png',
      initials: 'OD',
    },
    project: 'Admin Dashboard',
    address: 'Washburn Baton Rouge',
    date: 'Yesterday',
    status: 'Approved',
  },
  {
    id: '#CM9805',
    user: { name: 'Andi Lane', avatarUrl: '/avatars/05.png', initials: 'AL' },
    project: 'App Landing Page',
    address: 'Nest Lane Olivette',
    date: 'Feb 2, 2023',
    status: 'Rejected',
  },
];

export const statCardsData = [
  {
    title: 'Customers',
    value: '3,781',
    change: 11.01,
    bgColor: 'bg-primary-blue',
    textColor: 'text-black-fixed',
  },
  {
    title: 'Orders',
    value: '1,219',
    change: -0.03,
    bgColor: 'bg-primary-light',
  },
  {
    title: 'Revenue',
    value: '$695',
    change: 15.03,
    bgColor: 'bg-primary-light',
  },
  {
    title: 'Growth',
    value: '30.1%',
    change: 6.08,
    bgColor: 'bg-primary-purple',
    textColor: 'text-black-fixed',
  },
];

export const barChartData = [
  { month: 'Jan', actual: 17, overage: 5 },
  { month: 'Feb', actual: 21, overage: 5 },
  { month: 'Mar', actual: 18, overage: 5 },
  { month: 'Apr', actual: 23, overage: 6 },
  { month: 'May', actual: 16, overage: 3 },
  { month: 'Jun', actual: 21, overage: 5 },
];

export const lineChartData = [
  {
    month: 'Jan',
    product_A_actual: 12,
    product_A_projected: null,
    product_B: 8,
  },
  {
    month: 'Feb',
    product_A_actual: 14,
    product_A_projected: null,
    product_B: 10,
  },
  {
    month: 'Mar',
    product_A_actual: 9,
    product_A_projected: null,
    product_B: 18,
  },
  {
    month: 'Apr',
    product_A_actual: 12,
    product_A_projected: 12,
    product_B: 13,
  },
  {
    month: 'May',
    product_A_actual: null,
    product_A_projected: 18,
    product_B: 17,
  },
  {
    month: 'Jun',
    product_A_actual: null,
    product_A_projected: 22,
    product_B: 29,
  },
];
