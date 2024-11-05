import { useState } from 'react';
import Register from '../../components/forms/Register';
import Modal from '../../components/modal/Modal';
import Login from '../../components/forms/Login';

const Landing = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsLoginOpen(true)}>Login</button>
      <button onClick={() => setIsRegisterOpen(true)}>Register</button>

      <Modal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)}>
        <Login />
      </Modal>

      <Modal isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)}>
        <Register />
      </Modal>
    </>
  );
};

export default Landing;
