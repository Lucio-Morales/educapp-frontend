import { PageNavigationItemDto } from '../../../../components/page/Nav/types';

const navItems: PageNavigationItemDto[] = [
  {
    title: 'General',
    key: 'general',
    path: '/notifications/general',
    index: true,
    basePageUrl: '/notifications',
  },

  {
    title: 'Messages',
    key: 'messages',
    path: '/notifications/messages',
  },
];

const notificationsSectionMap = {
  general: 'general',
  messages: 'messages',
};

export { navItems, notificationsSectionMap };
