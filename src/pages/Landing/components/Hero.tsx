import styled from 'styled-components';
import image_demo from '../../../assets/image-demo.jpg'; // Asegúrate de que esta ruta sea correcta

interface HeroProps {
  onRegisterClick: () => void;
}

const HeroSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #f8f8f8;
  color: #060215;
  height: 100vh;
  text-align: center;
  padding-top: 80px; /* Añadido para evitar que la navbar tape el contenido */

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto; /* Cambiar a altura automática para adaptarse al contenido */
    padding-top: 120px; /* Asegurar espacio suficiente debajo de la navbar */
  }

  .hero-text {
    flex: 1;
    max-width: 600px;
    padding: 0 20px;

    h1 {
      font-size: 2.7rem;
      color: #060215;
      margin-bottom: 20px;
      line-height: 1.2;

      @media (max-width: 768px) {
        font-size: 3rem;
      }
    }

    p {
      font-size: 1.5rem;
      color: #4a4a4a;
      margin-bottom: 20px;

      @media (max-width: 768px) {
        font-size: 1.4rem;
      }
    }

    button {
      padding: 12px 24px;
      font-size: 1rem;
      font-weight: bold;
      color: black;
      background-color: #a4c8e1;
      border: 2px solid black;
      cursor: pointer;
      text-transform: uppercase;
      transition: background-color 0.3s;

      &:hover {
        background-color: #7da3c7;
      }

      @media (max-width: 768px) {
        width: 100%;
        margin-top: 20px;
      }
    }
  }

  .hero-img {
    flex: 1;
    display: flex;
    justify-content: center;

    img {
      max-width: 100%;
      height: auto;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const Hero: React.FC<HeroProps> = ({ onRegisterClick }) => {
  return (
    <HeroSection>
      <div className="hero-text">
        <h1>Bienvenido a Educapp</h1>
        <p>
          Únete a una comunidad de profesionales que te ayudarán a alcanzar tus
          metas educativas. Conéctate con tutores y profesores en línea, accede
          a recursos valiosos y potencia tu formación.
        </p>
        <button onClick={onRegisterClick}>Crear cuenta</button>
      </div>
      <div className="hero-img">
        <img src={image_demo} alt="Educapp" />
      </div>
    </HeroSection>
  );
};

export default Hero;
