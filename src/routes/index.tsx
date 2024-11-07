import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Landing from '../pages/Landing';
import Dashboard from '../pages/Dashboard';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Landing />, index: true },
      { path: '/dashboard', element: <Dashboard /> },
    ],
  },
]);

export default routes;
