import { Outlet } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PrivateLayout from './layouts/PrivateLayout';
import PublicLayout from './layouts/PublicLayout';
import ThemeProvider from './styles/theme/ThemeProvider';

const queryClient = new QueryClient();

function App() {
  const accessToken = true;
  return (
    <ThemeProvider>
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
    </ThemeProvider>
  );
}

export default App;
