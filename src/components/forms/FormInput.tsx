import styled from 'styled-components';

interface FormInputProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputLabel = styled.label`
  font-size: 14px;
  margin-bottom: 2px;
`;

const InputField = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ddd;
  // border-radius: 4px;
  outline: none;

  &:focus {
    border-color: #888;
  }
`;

const ErrorText = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 4px;
`;

const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  error,
}) => (
  <InputContainer>
    <InputLabel htmlFor={name}>{label}</InputLabel>
    <InputField
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
    />
    {error && <ErrorText>{error}</ErrorText>}
  </InputContainer>
);

export default FormInput;
