import { useMutation } from '@tanstack/react-query';
import { FormState, useForm } from '../../hooks/useForm';
import FormButton from './FormButton';
import FormInput from './FormInput';
// import { FormContainer } from './styles';
import { validateLogin } from './validation';
import { loginUser } from '../../api/api';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';
import SuccessMessage from './SuccessMessage';
import { useState } from 'react';

const LoginContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 24px;
  background-color: #f9f9f9;
  min-height: 320px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  position: relative;

  h3 {
    font-size: 18px;
    font-weight: 300;
    text-align: center;
  }
`;

export interface LoginFormValues extends FormState {
  email: string;
  password: string;
}

const initialState: LoginFormValues = {
  email: '',
  password: '',
};
const Login = () => {
  const navigate = useNavigate();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  //Hook useMutation config
  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: () => {
      setShowSuccessMessage(true);
      setFormData(initialState);

      setTimeout(() => {
        setShowSuccessMessage(false);
        navigate('/dashboard'); // Redirige a la página siguiente
      }, 2000); // Muestra el mensaje de éxito durante 2 segundos
    },
    onError: (error) => {
      console.error('Error logueando el user.', error);
      alert('Error al loguear usuario :(');
    },
  });

  //Hook useForm
  const { formData, setFormData, handleChange, handleSubmit, formErrors } =
    useForm<LoginFormValues>({ email: '', password: '' }, validateLogin);

  //Funcion onSubmit
  const onSubmit = () => {
    // console.log('Datos de login:', formData);
    mutation.mutate(formData);
  };

  return (
    <LoginContainer onSubmit={handleSubmit(onSubmit)}>
      {mutation.isPending ? (
        <LoadingSpinner />
      ) : showSuccessMessage ? (
        <SuccessMessage message="✅ Login exitoso. Redirigiendo.." />
      ) : (
        <>
          <h3>Iniciar sesion</h3>
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
          <FormButton isPending={mutation.isPending} label="Iniciar sesión" />
        </>
      )}
    </LoginContainer>
  );
};

export default Login;
