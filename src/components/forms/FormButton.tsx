// interface FormButtonProps {
//   label: string;
//   onClick?: () => void;
// }

// const FormButton: React.FC<FormButtonProps> = ({ label, onClick }) => (
//   <button type="submit" onClick={onClick}>
//     {label}
//   </button>
// );

// export default FormButton;

// FormButton.tsx
import styled from 'styled-components';

interface FormButtonProps {
  label: string;
  onClick?: () => void;
}

const StyledButton = styled.button`
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const FormButton: React.FC<FormButtonProps> = ({ label, onClick }) => (
  <StyledButton type="submit" onClick={onClick}>
    {label}
  </StyledButton>
);

export default FormButton;
