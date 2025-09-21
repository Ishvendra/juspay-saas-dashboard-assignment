import avatar from '@/assets/images/avatar.jpg';
import { getInitials } from './utils';
import { InfoListItemData, Order, Product } from '@/types';
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
      avatarUrl: mockImg6,
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
      avatarUrl: mockImg7,
      initials: 'KM',
    },
    project: 'CRM Admin pages',
    address: 'Larry San Francisco',
    date: 'A minute ago',
    status: 'Complete',
  },
  {
    id: '#CM9803',
    user: {
      name: 'Drew Cano',
      avatarUrl: mockImg8,
      initials: 'DC',
    },
    project: 'Client Project',
    address: 'Bagwell Avenue Ocala',
    date: '1 hour ago',
    status: 'Pending',
  },
  {
    id: '#CM9804',
    user: {
      name: 'Orlando Diggs',
      avatarUrl: mockImg9,
      initials: 'OD',
    },
    project: 'Admin Dashboard',
    address: 'Washburn Baton Rouge',
    date: 'Yesterday',
    status: 'Approved',
  },
  {
    id: '#CM9805',
    user: {
      name: 'Andi Lane',
      avatarUrl: mockImg10,
      initials: 'AL',
    },
    project: 'App Landing Page',
    address: 'Nest Lane Olivette',
    date: 'Feb 2, 2023',
    status: 'Rejected',
  },
  {
    id: '#CM9806',
    user: { name: 'Sarah Kim', avatarUrl: mockImg11, initials: 'SK' },
    project: 'Portfolio Website',
    address: 'Cedar Street Boston',
    date: 'Feb 3, 2023',
    status: 'Complete',
  },
  {
    id: '#CM9807',
    user: { name: 'James Lee', avatarUrl: mockImg1, initials: 'JL' },
    project: 'Ecommerce Platform',
    address: 'Maple Avenue Seattle',
    date: 'Feb 5, 2023',
    status: 'Pending',
  },
  {
    id: '#CM9808',
    user: { name: 'Maria Gonzales', avatarUrl: mockImg2, initials: 'MG' },
    project: 'Marketing Dashboard',
    address: 'Palm Drive Miami',
    date: 'Feb 6, 2023',
    status: 'In Progress',
  },
  {
    id: '#CM9809',
    user: { name: 'Alex Johnson', avatarUrl: mockImg3, initials: 'AJ' },
    project: 'HR Portal',
    address: 'River Road Denver',
    date: 'Feb 8, 2023',
    status: 'Approved',
  },
  {
    id: '#CM9810',
    user: { name: 'Liam Brown', avatarUrl: mockImg4, initials: 'LB' },
    project: 'Inventory System',
    address: 'Hill Street Dallas',
    date: 'Feb 10, 2023',
    status: 'Rejected',
  },
  {
    id: '#CM9811',
    user: { name: 'Emma Davis', avatarUrl: mockImg5, initials: 'ED' },
    project: 'Task Manager',
    address: 'Broadway New York',
    date: 'Feb 12, 2023',
    status: 'Complete',
  },
  {
    id: '#CM9812',
    user: { name: 'Oliver Smith', avatarUrl: mockImg6, initials: 'OS' },
    project: 'Analytics Tool',
    address: 'Bay Street Toronto',
    date: 'Feb 13, 2023',
    status: 'In Progress',
  },
  {
    id: '#CM9813',
    user: { name: 'Sophia Turner', avatarUrl: mockImg7, initials: 'ST' },
    project: 'SaaS Platform',
    address: 'Lakeview Chicago',
    date: 'Feb 14, 2023',
    status: 'Pending',
  },
  {
    id: '#CM9814',
    user: { name: 'Noah Wilson', avatarUrl: mockImg8, initials: 'NW' },
    project: 'Payment Gateway',
    address: 'Sunset Blvd Los Angeles',
    date: 'Feb 15, 2023',
    status: 'Approved',
  },
  {
    id: '#CM9815',
    user: { name: 'Ava Martinez', avatarUrl: mockImg9, initials: 'AM' },
    project: 'Social Media App',
    address: 'Ocean Drive Miami',
    date: 'Feb 16, 2023',
    status: 'Rejected',
  },
  {
    id: '#CM9816',
    user: { name: 'William Harris', avatarUrl: mockImg10, initials: 'WH' },
    project: 'Booking System',
    address: 'King Street London',
    date: 'Feb 18, 2023',
    status: 'Complete',
  },
  {
    id: '#CM9817',
    user: { name: 'Mia White', avatarUrl: mockImg11, initials: 'MW' },
    project: 'Learning Platform',
    address: 'Oxford Road Manchester',
    date: 'Feb 20, 2023',
    status: 'In Progress',
  },
  {
    id: '#CM9818',
    user: { name: 'Ethan Walker', avatarUrl: mockImg1, initials: 'EW' },
    project: 'Healthcare Portal',
    address: 'Elm Street Houston',
    date: 'Feb 22, 2023',
    status: 'Pending',
  },
  {
    id: '#CM9819',
    user: { name: 'Isabella King', avatarUrl: mockImg2, initials: 'IK' },
    project: 'Travel Website',
    address: 'High Street Sydney',
    date: 'Feb 23, 2023',
    status: 'Approved',
  },
  {
    id: '#CM9820',
    user: { name: 'Mason Scott', avatarUrl: mockImg3, initials: 'MS' },
    project: 'Finance Dashboard',
    address: 'Union Square San Jose',
    date: 'Feb 24, 2023',
    status: 'Rejected',
  },
  {
    id: '#CM9821',
    user: { name: 'Charlotte Allen', avatarUrl: mockImg4, initials: 'CA' },
    project: 'Recruitment Tool',
    address: 'West Street Boston',
    date: 'Feb 25, 2023',
    status: 'Complete',
  },
  {
    id: '#CM9822',
    user: { name: 'Benjamin Young', avatarUrl: mockImg5, initials: 'BY' },
    project: 'ERP System',
    address: 'Queen Street Toronto',
    date: 'Feb 26, 2023',
    status: 'In Progress',
  },
  {
    id: '#CM9823',
    user: { name: 'Amelia Baker', avatarUrl: mockImg6, initials: 'AB' },
    project: 'Online Store',
    address: 'Spring Road Orlando',
    date: 'Feb 27, 2023',
    status: 'Pending',
  },
  {
    id: '#CM9824',
    user: { name: 'Lucas Perez', avatarUrl: mockImg7, initials: 'LP' },
    project: 'Chat Application',
    address: 'Market Street San Diego',
    date: 'Feb 28, 2023',
    status: 'Approved',
  },
  {
    id: '#CM9825',
    user: { name: 'Harper Flores', avatarUrl: mockImg8, initials: 'HF' },
    project: 'Support Ticket System',
    address: 'Pine Avenue Austin',
    date: 'Mar 1, 2023',
    status: 'Rejected',
  },
  {
    id: '#CM9826',
    user: { name: 'Daniel Rivera', avatarUrl: mockImg9, initials: 'DR' },
    project: 'Blog CMS',
    address: 'Central Park New York',
    date: 'Mar 2, 2023',
    status: 'Complete',
  },
  {
    id: '#CM9827',
    user: { name: 'Ella Cooper', avatarUrl: mockImg10, initials: 'EC' },
    project: 'IoT Dashboard',
    address: 'Harbor Street San Francisco',
    date: 'Mar 3, 2023',
    status: 'In Progress',
  },
  {
    id: '#CM9828',
    user: { name: 'Henry Torres', avatarUrl: mockImg11, initials: 'HT' },
    project: 'Logistics Platform',
    address: 'Broadway Los Angeles',
    date: 'Mar 5, 2023',
    status: 'Pending',
  },
  {
    id: '#CM9829',
    user: { name: 'Grace Ramirez', avatarUrl: mockImg1, initials: 'GR' },
    project: 'Fitness App',
    address: 'Sunrise Blvd Phoenix',
    date: 'Mar 6, 2023',
    status: 'Approved',
  },
  {
    id: '#CM9830',
    user: { name: 'Michael Bennett', avatarUrl: mockImg2, initials: 'MB' },
    project: 'Video Platform',
    address: 'Victoria Street Melbourne',
    date: 'Mar 7, 2023',
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

export const pieChartData = [
  { name: 'Direct', value: 300.56, fill: 'var(--color-primary-brand)' },
  { name: 'Affiliate', value: 135.18, fill: 'var(--color-secondary-green-b)' },
  { name: 'Sponsored', value: 154.02, fill: 'var(--color-secondary-indigo)' },
  { name: 'E-mail', value: 48.96, fill: 'var(--color-secondary-blue-b)' },
];

export const locationData = [
  { location: 'New York', revenue: 72000, total: 100000 },
  { location: 'San Francisco', revenue: 39000, total: 100000 },
  { location: 'Sydney', revenue: 25000, total: 100000 },
  { location: 'Singapore', revenue: 61000, total: 100000 },
];

export const mockProducts: Product[] = [
  {
    name: 'ASOS Ridley High Waist',
    price: 79.49,
    quantity: 82,
    amount: 6518.18,
  },
  {
    name: 'Marco Lightweight Shirt',
    price: 128.5,
    quantity: 37,
    amount: 4754.5,
  },
  { name: 'Half Sleeve Shirt', price: 39.99, quantity: 64, amount: 2559.36 },
  { name: 'Lightweight Jacket', price: 20.0, quantity: 184, amount: 3680.0 },
  { name: 'Marco Shoes', price: 79.49, quantity: 64, amount: 1965.81 },
];
