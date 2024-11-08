import { PageNavigationItemDto } from '../../../../components/page/Nav/types';

const navItems: PageNavigationItemDto[] = [
  {
    title: 'Public',
    key: 'public',
    path: '/dashboard/public',
    index: true,
    basePageUrl: '/dashboard',
  },
  {
    title: 'News',
    key: 'news',
    path: '/dashboard/news',
  },
  {
    title: 'Groups',
    key: 'groups',
    path: '/dashboard/groups',
  },
];

const dashboardSectionMap = {
  public: 'public',
  news: 'news',
  groups: 'groups',
};

export { navItems, dashboardSectionMap };
