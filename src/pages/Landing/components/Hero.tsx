import styled from 'styled-components';
import image_demo from '../../../assets/image-demo.jpg'; // Asegúrate de que esta ruta sea correcta

const HeroSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #f8f8f8;
  color: #060215;
  height: 100vh;
  //   overflow: hidden;
  text-align: center;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const TextContent = styled.div`
  flex: 1;
  max-width: 600px;
  padding: 0 20px;

  h1 {
    font-size: 2.7rem; /* Tamaño del título */
    color: #060215;
    margin-bottom: 20px;
    line-height: 1.2;

    @media (max-width: 768px) {
      font-size: 2rem; /* Ajusta el tamaño en móviles */
    }
  }

  p {
    font-size: 1.3rem; /* Tamaño del párrafo */
    color: #4a4a4a;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 1rem; /* Ajusta el tamaño en móviles */
    }
  }

  button {
    padding: 12px 24px;
    font-size: 1rem;
    font-weight: bold;
    color: #f8f8f8;
    background-color: #6882b4;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #4a90e2;
    }

    @media (max-width: 768px) {
      width: 100%; /* Hace que el botón ocupe el 100% del ancho en móviles */
      margin-top: 20px; /* Añade un margen superior en móviles */
    }
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    display: none; /* Oculta la imagen en dispositivos móviles */
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <TextContent>
        <h1>Bienvenido a Educapp</h1>
        <p>
          Únete a una comunidad de profesionales que te ayudarán a alcanzar tus
          metas educativas. Conéctate con tutores y profesores en línea, accede
          a recursos valiosos y mejora tus habilidades.
        </p>
        <button>Descubre Más</button>
      </TextContent>
      <ImageContainer>
        <img src={image_demo} alt="Educapp" />
      </ImageContainer>
    </HeroSection>
  );
};

export default Hero;
