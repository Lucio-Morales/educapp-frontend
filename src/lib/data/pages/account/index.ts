import { PageNavigationItemDto } from '../../../../components/page/Nav/types';

const navItems: PageNavigationItemDto[] = [
  {
    title: 'Profile',
    key: 'profile',
    path: '/account/profile',
    index: true,
    basePageUrl: '/account',
  },

  {
    title: 'Settings',
    key: 'settings',
    path: '/account/settings',
  },
];

const accountSectionMap = {
  profile: 'profile',
  settings: 'settings',
};

export { navItems, accountSectionMap };
