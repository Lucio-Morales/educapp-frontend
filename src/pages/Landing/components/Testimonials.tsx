import styled from 'styled-components';

const TestimonialsSection = styled.div`
  padding: 40px 20px;
  background-color: #ffffff;
  color: #060215;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 10px; /* Reducir el margen inferior */
  }

  .testimonials-container {
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }

  .testimonial {
    max-width: 400px;
    background-color: #f8f8f8;
    padding: 20px;
    // border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 300px;
    text-align: center;

    p {
      font-size: 1.2rem;
      color: #4a4a4a;
      margin: 0; /* Elimina márgenes para reducir espacio */
      padding-bottom: 10px; /* Opcional para espacio más controlado */
    }

    h4 {
      font-size: 1.5rem;
      color: #060215;
      margin: 0; /* Elimina márgenes para reducir espacio */
      padding-top: 10px; /* Ajuste para dar separación mínima */
    }
  }
`;

const Testimonials = () => {
  return (
    <TestimonialsSection>
      <h2>Lo que dicen nuestros usuarios</h2>
      <div className="testimonials-container">
        <div className="testimonial">
          <p>
            "¡Una de las mejores plataformas de aprendizaje que he usado! Me
            conectó con tutores expertos que me ayudaron a mejorar mis
            habilidades rápidamente."
          </p>
          <h4>- Juan Pérez, Estudiante</h4>
        </div>
        <div className="testimonial">
          <p>
            "Educapp me ha permitido acceder a recursos educativos que realmente
            marcan la diferencia en mi formación profesional."
          </p>
          <h4>- María Gómez, Profesora</h4>
        </div>
      </div>
    </TestimonialsSection>
  );
};

export default Testimonials;
