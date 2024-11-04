import { Outlet, useNavigate } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  const navigate = useNavigate();

  return (
    <>
      <GlobalStyles />
      <button onClick={() => navigate('/login')}>Login</button>
      <button onClick={() => navigate('/register')}>Register</button>
      <Outlet />
    </>
  );
}

export default App;
