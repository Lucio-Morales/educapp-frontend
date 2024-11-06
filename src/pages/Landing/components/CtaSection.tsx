import styled from 'styled-components';

const CtaSection = styled.div`
  padding: 40px 20px;
  background-color: #a4c8e1;
  color: #060215;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  button {
    padding: 12px 24px;
    font-size: 1rem;
    font-weight: bold;
    color: #060215;
    background-color: #a4c8e1;
    border: 2px solid #060215;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    text-transform: uppercase;
    transition: background-color 0.3s;

    &:hover {
      background-color: #e0e0e0;
    }
  }
`;

const Cta = () => {
  return (
    <CtaSection>
      <h2>¡Empieza hoy mismo!</h2>
      <button>Crear cuenta</button>
    </CtaSection>
  );
};

export default Cta;
