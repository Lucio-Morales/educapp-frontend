import styled from 'styled-components';

const FeaturesSection = styled.div`
  padding: 40px 20px;
  background-color: #f8f8f8;
  color: #060215;
  text-align: center;
  min-height: 100vh;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  .features-container {
    display: flex;
    justify-content: center;
    align-items: stretch; /* Hace que las tarjetas tengan la misma altura */
    flex-wrap: wrap;
    gap: 20px;
    max-width: 1000px;
    margin: 0 auto;
  }

  .feature {
    display: flex;
    flex-direction: column; /* Para asegurar que el contenido se apile */
    justify-content: space-between; /* Para distribuir el contenido dentro de la tarjeta */
    padding: 30px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    width: 300px;
    min-height: 350px; /* Establece una altura mínima para las tarjetas */
    border: 1px solid black;
    // border-radius: 8px;
    text-align: center;
    background-color: #fff; /* Color de fondo para todas las tarjetas */
    transition: transform 0.3s ease;

    h3 {
      font-size: 1.8rem;
      margin-bottom: 15px;
    }

    p {
      font-size: 1.2rem;
      color: #4a4a4a;
      flex-grow: 1; /* Asegura que el contenido ocupe todo el espacio disponible */
    }

    &:hover {
      transform: translateY(
        -10px
      ); /* Efecto de desplazamiento al pasar el ratón */
    }

    @media (max-width: 768px) {
      width: 90%;
      min-height: 320px; /* Asegura una altura mínima en móviles */
      padding: 20px;
    }
  }

  .card1 {
    background-color: #ffcccc; /* Rojo claro */
  }

  .card2 {
    background-color: #ccffcc; /* Verde claro */
  }

  .card3 {
    background-color: #ccccff; /* Azul claro */
  }
`;

const Features = () => {
  return (
    <FeaturesSection>
      <h2>Características Destacadas</h2>
      <div className="features-container">
        <div className="feature card1">
          <h3>Acceso a tutores especializados</h3>
          <p>
            Conéctate y chatea en tiempo real con tutores especializados para
            resolver tus dudas y recibir orientación personalizada.
          </p>
        </div>
        <div className="feature card2">
          <h3>Recursos de alta calidad</h3>
          <p>
            Accede a materiales educativos y herramientas para mejorar tus
            habilidades.
          </p>
        </div>
        <div className="feature card3">
          <h3>Foro de consultas</h3>
          <p>
            Únete al foro y consulta libremente a otros usuarios, comparte tus
            experiencias y recibe orientación de la comunidad.
          </p>
        </div>
      </div>
    </FeaturesSection>
  );
};

export default Features;
