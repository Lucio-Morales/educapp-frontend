import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

const WithNavLayout = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;

  @media (min-width: 431px) {
    flex-direction: row;
    justify-content: center;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: 616px) {
    max-width: 720px;
  }
  @media (min-width: 1004px) {
    max-width: 1080px;
    padding-right: 0;
  }
  @media (min-width: 1280px) {
    max-width: 1312px;
  }
`;

const NavigationPane = styled.div`
  height: fit-content;
  @media (min-width: 431px) {
    height: 100%;
    display: flex;
    justify-content: center;
    width: 80px;
  }
  @media (min-width: 1280px) {
    width: 280px;
    justify-content: flex-end;
  }
  #fixedNav {
    padding: 0.5rem 1rem;
    bottom: 0;
    right: 0;
    left: 0;
    position: fixed;
    z-index: 3;
    background: ${({ theme }) => theme.body};
    display: flex;
    justify-content: space-between;
    border-top: 1px solid ${({ theme }) => theme.boxBorder};
    transition: padding-bottom 0.1s;
    @media (min-width: 431px) {
      transition: unset;
      bottom: unset;
      border-top: none;
      right: unset;
      left: unset;
      padding: unset;
      display: unset;
    }
  }
`;

const PrivateLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <WithNavLayout>
        <NavigationPane>
          <div id="fixedNav">
            <Navbar />
          </div>
          {/* <div id="fixedNav">
            <NavBar />
          </div> */}
        </NavigationPane>
        {children}
      </WithNavLayout>
    </>
  );
};

export default PrivateLayout;
