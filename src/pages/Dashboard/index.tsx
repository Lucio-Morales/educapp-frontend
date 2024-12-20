import { Outlet } from 'react-router-dom';
import { Content, MainPane, SecondaryPane } from '../styles/Page';
import Nav from '../../components/page/Nav';
import { navItems } from '../../lib/data/pages/dashboard';

const DashboardPage = () => {
  return (
    <>
      <MainPane>
        <Nav items={navItems} />
        <Content>
          <Outlet />
        </Content>
      </MainPane>
      <SecondaryPane>Secondary</SecondaryPane>
    </>
  );
};

export default DashboardPage;
