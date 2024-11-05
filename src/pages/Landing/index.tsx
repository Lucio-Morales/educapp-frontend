import { useState } from 'react';
import Register from '../../components/forms/Register';
import Modal from '../../components/modal/Modal';
import Login from '../../components/forms/Login';
import Navbar from '../../components/navbar/NavBar';
import styled from 'styled-components';

const ToggleText = styled.span`
  margin-top: 16px;
  color: #007bff;
  cursor: pointer;
  font-size: 14px;
  text-align: center;

  &:hover {
    text-decoration: underline;
  }
`;
const Landing = () => {
  const [activeModal, setActiveModal] = useState<'login' | 'register' | null>(
    null
  );

  const [isRegister, setIsRegister] = useState(false);
  const toggleForm = () => {
    setIsRegister((prev) => !prev);
  };

  const openLogin = () => setActiveModal('login');
  const openRegister = () => setActiveModal('register');
  const closeModal = () => setActiveModal(null);

  return (
    <>
      <Navbar onLoginClick={openLogin} onRegisterClick={openRegister} />

      <Modal
        isOpen={activeModal === 'login' || activeModal === 'register'}
        onClose={closeModal}
      >
        {isRegister ? <Register /> : <Login />}
        <ToggleText onClick={toggleForm}>
          {isRegister
            ? '¿Ya tienes una cuenta? Ingresar'
            : '¿No tienes una cuenta? Regístrate'}
        </ToggleText>
      </Modal>
    </>
  );
};

export default Landing;
