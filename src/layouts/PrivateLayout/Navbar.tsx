import { HiHome } from 'react-icons/hi';
import Icon from '../../components/icon/Icon';
import { Nav, NavLinkItem } from './styles/Navbar';
import { IoCompassSharp } from 'react-icons/io5';
import { BsFillLightningChargeFill } from 'react-icons/bs';
import { BiSolidUserCircle } from 'react-icons/bi';
import { useCallback, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const navIconSize: number = 1.7;

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const pageName = useMemo(() => {
    if (pathname) return pathname.split('/')[1];
    else return '';
  }, [pathname]);

  const scrollTop = useCallback(
    () =>
      document.documentElement.scrollTo({
        top: 0,
        left: 0,
        // behavior: width > 431 ? 'instant' : 'smooth',
      }),
    []
  );
  return (
    <Nav>
      <NavLinkItem
        onClick={() =>
          pageName === '/dashboard' ? scrollTop() : navigate('/dashboard')
        }
        active={pageName === 'dashboard' || pathname === '/' ? 'true' : ''}
      >
        <div className="navItemIcon">
          <Icon size={`${navIconSize}rem`} icon={HiHome} />
        </div>
        <div className="navItemText">Home</div>
      </NavLinkItem>
      <NavLinkItem
        onClick={() => navigate('/explore')}
        active={pageName === 'explore' ? 'true' : ''}
      >
        <div className="navItemIcon">
          <Icon size={`${navIconSize}rem`} icon={IoCompassSharp} />
        </div>
        <div className="navItemText">Explore</div>
      </NavLinkItem>
      <NavLinkItem
        onClick={() => navigate('/notifications')}
        active={pageName === 'notifications' ? 'true' : ''}
      >
        <div className="navItemIcon">
          <Icon
            size={`${navIconSize - 0.1}rem`}
            icon={BsFillLightningChargeFill}
          />
        </div>
        <div className="navItemText">Notifications</div>
      </NavLinkItem>
      <NavLinkItem
        onClick={() => navigate('/account')}
        active={pageName === 'account' ? 'true' : ''}
      >
        <div className="navItemIcon">
          <Icon
            size={`${navIconSize - 0.15}rem`}
            icon={BiSolidUserCircle}
            // disableHover={true}
          />
        </div>
        <div className="navItemText">Account</div>
      </NavLinkItem>
    </Nav>
  );
};

export default Navbar;
