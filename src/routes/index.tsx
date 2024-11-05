import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Landing from '../pages/Landing';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [{ path: '', element: <Landing />, index: true }, { path: '' }],
  },
]);

export default routes;
