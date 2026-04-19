import React from 'react';
import styled from 'styled-components';

import { BREAKPOINTS, COLORS, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import UnstyledButton from '../UnstyledButton';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <DesktopNav>
          <NavLink href='/sale'>Sale</NavLink>
          <NavLink href='/new'>New&nbsp;Releases</NavLink>
          <NavLink href='/men'>Men</NavLink>
          <NavLink href='/women'>Women</NavLink>
          <NavLink href='/kids'>Kids</NavLink>
          <NavLink href='/collections'>Collections</NavLink>
        </DesktopNav>
        <MobileActions>
          <ShoppingCartButton>
            <VisuallyHidden>Cart</VisuallyHidden>
            <Icon id='shopping-bag' />
          </ShoppingCartButton>
          <UnstyledButton>
            <VisuallyHidden>Search</VisuallyHidden>
            <Icon id='search' />
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <VisuallyHidden>Menu</VisuallyHidden>
            <Icon id='menu' />
          </UnstyledButton>
        </MobileActions>
        <Side />
      </MainHeader>

      <MobileMenu isOpen={showMobileMenu} onDismiss={() => setShowMobileMenu(false)} />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  overflow-x: auto;

  @media (max-width: ${BREAKPOINTS.phone}) {
    align-items: center;
    padding-inline: 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1.3rem, 7.7vw - 3.5rem, 5rem);
  margin: 0px 48px;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    & {
      display: none;
    }
  }
`;

const MobileActions = styled.div`
  display: none;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    display: flex;
    margin-left: auto;
    gap: 32px;
  }

  @media (max-width: ${BREAKPOINTS.phone}) {
    gap: 16px;
  }
`;

const Side = styled.div`
  flex: 1;

  @media (max-width: ${BREAKPOINTS.laptop}) {
    flex: unset;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const ShoppingCartButton = styled(UnstyledButton)`
  transform: translateX(-2px);
`;

export default Header;
