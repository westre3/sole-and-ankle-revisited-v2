import React from 'react';
import styled from 'styled-components';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import * as Dialog from '@radix-ui/react-dialog';
import { COLORS } from '../../constants';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onDismiss}>
      <Dialog.Portal>
        <Overlay />
        <Content>
          <VisuallyHidden>
            <Dialog.Title>Mobile navigation</Dialog.Title>
          </VisuallyHidden>
          <CloseButton onClick={onDismiss}>
            <VisuallyHidden>Dismiss menu</VisuallyHidden>
            <Icon id='close' />
          </CloseButton>
          <Nav>
            <NavLink href='/sale'>Sale</NavLink>
            <NavLink href='/new'>New&nbsp;Releases</NavLink>
            <NavLink href='/men'>Men</NavLink>
            <NavLink href='/women'>Women</NavLink>
            <NavLink href='/kids'>Kids</NavLink>
            <NavLink href='/collections'>Collections</NavLink>
          </Nav>
          <Footer>
            <FooterLink href='/terms'>Terms and Conditions</FooterLink>
            <FooterLink href='/privacy'>Privacy Policy</FooterLink>
            <FooterLink href='/contact'>Contact Us</FooterLink>
          </Footer>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background-color: ${COLORS.gray[700]};
  opacity: 0.8;
`;

const Content = styled(Dialog.Content)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 80vw;
  background: ${COLORS.white};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 26px 16px 32px 32px;
`;

const CloseButton = styled(UnstyledButton)`
  align-self: flex-end;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const NavLink = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  color: ${COLORS.gray[900]};
  font-size: 1.125rem;
  font-weight: 600;

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const FooterLink = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  color: ${COLORS.gray[700]};
  font-size: 0.875rem;
  font-weight: 500;
`;

export default MobileMenu;
