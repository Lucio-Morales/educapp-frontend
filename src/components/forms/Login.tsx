import { FormState, useForm } from '../../hooks/useForm';
import FormButton from './FormButton';
import FormInput from './FormInput';
import { FormContainer } from './Register';
import { validateLogin } from './validation';

interface LoginFormValues extends FormState {
  email: string;
  password: string;
}

const Login = () => {
  const { formData, handleChange, handleSubmit, formErrors } =
    useForm<LoginFormValues>({ email: '', password: '' }, validateLogin);

  const onSubmit = () => {
    console.log('Datos de login:', formData);
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        label="Correo"
        name="email"
        value={formData.email}
        onChange={handleChange}
        error={formErrors.email}
      />
      <FormInput
        label="Contraseña"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        error={formErrors.password}
      />
      <FormButton label="Iniciar sesión" />
    </FormContainer>
  );
};

export default Login;
