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
  {
    title: 'Your groups',
    key: 'your-groups',
    path: '/notifications/your-groups',
  },
];

const notificationsSectionMap = {
  general: 'general',
  messages: 'messages',
  yourGroups: 'your-groups',
};

export { navItems, notificationsSectionMap };
