import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Landing from '../pages/Landing';
import Login from '../components/forms/Login';
import Register from '../components/forms/Register';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Landing />, index: true },
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> },
    ],
  },
]);

export default routes;
