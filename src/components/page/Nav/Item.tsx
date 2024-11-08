import { Link } from 'react-router-dom';
import { PageNavItem } from './styles';
import { PageNavigationItemProps } from './types';

const Item = ({ data, currentSection }: PageNavigationItemProps) => {
  return (
    <Link style={{ all: 'unset' }} to={data.path}>
      <PageNavItem
        active={currentSection === data.key || (data.index && !currentSection)}
      >
        {data.title}
      </PageNavItem>
    </Link>
  );
};
export default Item;
