// components/Navbar.tsx
import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: flex-end;
  padding: 20px 30px;
  background-color: #f8f8f8;
  position: fixed; /* Fija la barra de navegación */
  top: 0; /* Coloca la barra en la parte superior */
  left: 0; /* Alinea al lado izquierdo */
  right: 0; /* Alinea al lado derecho */
  z-index: 1000; /* Asegura que esté por encima de otros elementos */
`;

const NavbarButton = styled.button<{ variant?: 'login' | 'register' }>`
  margin-left: 18px;
  padding: 12px 24px;
  border: 2px solid black;
  color: black;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.3s;

  ${({ variant }) =>
    variant === 'login'
      ? `
      background-color: #f8f8f8; /* Corrige el valor de color de fondo */
      &:hover {
        background-color: #e0e0e0; 
      }
    `
      : `
      background-color: #A4C8E1; 
      &:hover {
        background-color: #7DA3C7; 
      }
    `}
`;

interface NavbarProps {
  onLoginClick: () => void;
  onRegisterClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLoginClick, onRegisterClick }) => {
  return (
    <NavbarContainer>
      <NavbarButton variant="login" onClick={onLoginClick}>
        Login
      </NavbarButton>
      <NavbarButton variant="register" onClick={onRegisterClick}>
        Register
      </NavbarButton>
    </NavbarContainer>
  );
};

export default Navbar;
