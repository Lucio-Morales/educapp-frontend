import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Landing from '../pages/Landing';
import DashboardPage from '../pages/Dashboard';
import ExplorePage from '../pages/Explore';
import NotificationsPage from '../pages/Notifications';
import AccountPage from '../pages/Account';
import Public from '../pages/Dashboard/pages/Public';
import News from '../pages/Dashboard/pages/News';
import Groups from '../pages/Dashboard/pages/Groups';
import FindGroups from '../pages/Explore/pages/FindGroups';
import FindPeople from '../pages/Explore/pages/FindPeople';
import Popular from '../pages/Explore/pages/Popular';
import General from '../pages/Notifications/pages/General';
import Messages from '../pages/Notifications/pages/Messages';
import Profile from '../pages/Account/pages/Profile';
import Settings from '../pages/Account/pages/Settings';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Landing />, index: true },
      {
        path: 'dashboard',
        element: <DashboardPage />,
        children: [
          { path: '', element: <Public />, index: true },
          { path: 'public', element: <Public /> },
          { path: 'news', element: <News /> },
          { path: 'groups', element: <Groups /> },
        ],
      },
      {
        path: 'explore',
        element: <ExplorePage />,
        children: [
          { path: '', element: <FindPeople />, index: true },
          { path: 'find-people', element: <FindPeople /> },
          { path: 'find-groups', element: <FindGroups /> },
          { path: 'popular', element: <Popular /> },
        ],
      },
      {
        path: 'notifications',
        element: <NotificationsPage />,
        children: [
          { path: '', element: <General />, index: true },
          { path: 'general', element: <General /> },
          { path: 'messages', element: <Messages /> },
        ],
      },
      {
        path: 'account',
        element: <AccountPage />,
        children: [
          { path: '', element: <Profile />, index: true },
          { path: 'profile', element: <Profile /> },
          { path: 'settings', element: <Settings /> },
        ],
      },
    ],
  },
]);

export default routes;
