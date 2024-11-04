interface FormInputProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  error,
}) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      // style={{
      //   border: error ? '1px solid red' : '1px solid #ccc',
      //   padding: '0.5rem',
      // }}
    />
    {error && <p style={{ color: 'red' }}>{error}</p>}
  </div>
);

export default FormInput;
