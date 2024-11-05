// components/Navbar.tsx
import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: flex-end; // Alinea los elementos a la derecha
  padding: 20px 30px; // Espaciado alrededor de la barra
  background-color: #f8f8f8; // Color de fondo
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); // Sombra para darle profundidad
`;

const NavbarButton = styled.button<{ variant?: 'login' | 'register' }>`
  margin-left: 18px; // Espacio entre botones
  padding: 12px 24px; // Espaciado dentro del botón
  border: 2px solid black;
  //   border-radius: 5px;
  color: black;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.3s;

  ${({ variant }) =>
    variant === 'login'
      ? `
      background-color:#f8f8f8 #4a90e2; // Color de fondo del botón Login
      

      &:hover {
        background-color:#e0e0e0 ; // Color de fondo en hover para Login
      }
    `
      : `
      background-color:#A4C8E1; // Color de fondo del botón Register
      

      &:hover {
        background-color: #7DA3C7; // Color de fondo en hover para Register
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
