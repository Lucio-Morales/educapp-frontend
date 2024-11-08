import usePageSection from '../../../hooks/usePageSection';
import Item from './Item';
import { Box } from './styles';
import { PageNavigationProps } from './types';

const Nav = ({ items }: PageNavigationProps) => {
  const section = usePageSection();
  return (
    <Box>
      <nav>
        {items.map((data) => (
          <Item currentSection={section} data={data} key={data.key} />
        ))}
      </nav>
    </Box>
  );
};

export default Nav;
