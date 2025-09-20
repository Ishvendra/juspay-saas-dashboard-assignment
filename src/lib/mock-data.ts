import avatar from '@/assets/images/avatar.jpg';
import { getInitials } from './utils';

const userName = 'ByeWind';

export const user = {
  name: userName,
  initials: getInitials(userName),
  avatarUrl: avatar,
};
