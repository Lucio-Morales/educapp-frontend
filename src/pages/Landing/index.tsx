// import { useState } from 'react';
// import Register from '../../components/forms/Register';
// import Modal from '../../components/modal/Modal';
// import Login from '../../components/forms/Login';
// import Navbar from '../../components/navbar/NavBar';
// import { ToggleText } from './styles/ToggleText';
// import Hero from './components/Hero';

// const Landing = () => {
//   const [activeModal, setActiveModal] = useState<'login' | 'register' | null>(
//     null
//   );

//   const [isRegister, setIsRegister] = useState(false);
//   const toggleForm = () => {
//     setIsRegister((prev) => !prev);
//   };

//   const openLogin = () => setActiveModal('login');
//   const openRegister = () => setActiveModal('register');
//   const closeModal = () => setActiveModal(null);

//   return (
//     <>
//       <Navbar onLoginClick={openLogin} onRegisterClick={openRegister} />
//       <Hero />
//       <Modal
//         isOpen={activeModal === 'login' || activeModal === 'register'}
//         onClose={closeModal}
//       >
//         {isRegister ? <Register /> : <Login />}
//         <ToggleText onClick={toggleForm}>
//           {isRegister
//             ? '¿Ya tienes una cuenta? Ingresar'
//             : '¿No tienes una cuenta? Regístrate'}
//         </ToggleText>
//       </Modal>
//     </>
//   );
// };

// export default Landing;

import { useState } from 'react';
import Register from '../../components/forms/Register';
import Modal from '../../components/modal/Modal';
import Login from '../../components/forms/Login';
import Navbar from '../../components/navbar/NavBar';
import { ToggleText } from './styles/ToggleText';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Cta from './components/CtaSection';

const Landing = () => {
  const [activeModal, setActiveModal] = useState<'login' | 'register' | null>(
    null
  );
  const [isRegister, setIsRegister] = useState(false);

  const toggleForm = () => {
    setIsRegister((prev) => !prev);
  };

  const openLogin = () => {
    setActiveModal('login');
    setIsRegister(false); // Asegurarse de que el formulario de Login se muestre
  };

  const openRegister = () => {
    setActiveModal('register');
    setIsRegister(true); // Asegurarse de que el formulario de Registro se muestre
  };

  const closeModal = () => setActiveModal(null);

  return (
    <>
      <Navbar onLoginClick={openLogin} onRegisterClick={openRegister} />
      <Hero />
      <Features />
      <Testimonials />
      <Cta />
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
