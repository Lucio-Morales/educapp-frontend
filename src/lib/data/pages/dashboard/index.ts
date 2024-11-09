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
    title: 'Popular',
    key: 'popular',
    path: '/dashboard/popular',
  },
];

const dashboardSectionMap = {
  public: 'public',
  news: 'news',
  popular: 'popular',
};

export { navItems, dashboardSectionMap };
