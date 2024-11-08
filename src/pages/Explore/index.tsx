import { Outlet } from 'react-router-dom';
import Nav from '../../components/page/Nav';
import { Content, MainPane, SecondaryPane } from '../styles/Page';
import { navItems } from '../../lib/data/pages/explore';

const ExplorePage = () => {
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

export default ExplorePage;
