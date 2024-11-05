import { useState } from 'react';
import Register from '../../components/forms/Register';
import Modal from '../../components/modal/Modal';
import Login from '../../components/forms/Login';
import Navbar from '../../components/navbar/NavBar';
import { ToggleText } from './styles/ToggleText';
import Hero from './components/Hero';

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
      <Hero />
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
