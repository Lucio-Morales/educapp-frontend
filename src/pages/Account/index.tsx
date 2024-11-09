import { Outlet } from 'react-router-dom';
// import { navItems } from '../../lib/data/pages/account';
import { Content, MainPane, SecondaryPane } from '../styles/Page';
// import Nav from '../../components/page/Nav';

const AccountPage = () => {
  return (
    <>
      <MainPane>
        <Content>
          <Outlet />
        </Content>
      </MainPane>
      <SecondaryPane>Secondary</SecondaryPane>
    </>
  );
};

export default AccountPage;
