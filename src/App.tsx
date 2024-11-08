import { Outlet } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PrivateLayout from './layouts/PrivateLayout';
import PublicLayout from './layouts/PublicLayout';

const queryClient = new QueryClient();

function App() {
  const accessToken = true;
  return (
    <>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        {accessToken ? (
          <PrivateLayout>
            <Outlet />
          </PrivateLayout>
        ) : (
          <PublicLayout>
            <Outlet />
          </PublicLayout>
        )}
      </QueryClientProvider>
    </>
  );
}

export default App;
