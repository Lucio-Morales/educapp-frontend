import { PageNavigationItemDto } from '../../../../components/page/Nav/types';

const navItems: PageNavigationItemDto[] = [
  {
    title: 'Find people',
    key: 'find-people',
    path: '/explore/find-people',
    index: true,
    basePageUrl: '/explore',
  },
  {
    title: 'Find groups',
    key: 'find-groups',
    path: '/explore/find-groups',
  },
  {
    title: 'Popular',
    key: 'popular',
    path: '/explore/popular',
  },
];

const exploreSectionMap = {
  findPeople: 'findPeople',
  findGroups: 'findGroups',
  popular: 'popular',
};

export { navItems, exploreSectionMap };
