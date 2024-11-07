// import { FormState, useForm } from '../../hooks/useForm';
// import { useMutation } from '@tanstack/react-query';
// import FormButton from './FormButton';
// import FormInput from './FormInput';
// import { validateRegister } from './validation';
// import {
//   ErrorText,
//   FormContainer,
//   Select,
//   SelectContainer,
//   SelectLabel,
// } from './styles';
// import { registerUser } from '../../api/api';

// export interface RegisterFormValues extends FormState {
//   name: string;
//   email: string;
//   password: string;
//   role: string;
// }

// const initialState: RegisterFormValues = {
//   name: '',
//   email: '',
//   password: '',
//   role: '',
// };

// const Register = () => {
//   const mutation = useMutation({
//     mutationFn: registerUser,
//     onSuccess: () => {
//       console.log('User registered successfully.');
//       alert('Usuario registrado con exito :)');
//       setFormData(initialState);
//     },
//     onError: (error) => {
//       console.error('Error registrando el user.', error);
//       alert('Error al registrar usuario :(');
//     },
//   });

//   const { formData, setFormData, handleChange, handleSubmit, formErrors } =
//     useForm<RegisterFormValues>(
//       {
//         name: '',
//         email: '',
//         password: '',
//         role: '',
//       },
//       validateRegister
//     );

//   const onSubmit = () => {
//     mutation.mutate(formData);
//   };

//   return (
//     <FormContainer onSubmit={handleSubmit(onSubmit)}>
//       <FormInput
//         label="Nombre y apellido"
//         name="name"
//         value={formData.name}
//         onChange={handleChange}
//         error={formErrors.name}
//       />
//       <FormInput
//         label="Correo"
//         name="email"
//         value={formData.email}
//         onChange={handleChange}
//         error={formErrors.email}
//       />
//       <FormInput
//         label="Contraseña"
//         name="password"
//         type="password"
//         value={formData.password}
//         onChange={handleChange}
//         error={formErrors.password}
//       />
//       <SelectContainer>
//         <SelectLabel htmlFor="role">Rol:</SelectLabel>
//         <Select name="role" value={formData.role} onChange={handleChange}>
//           <option value="" disabled>
//             Selecciona tu rol
//           </option>
//           <option value="tutor">Soy tutor</option>
//           <option value="student">Soy estudiante</option>
//         </Select>
//         {formErrors.role && <ErrorText>{formErrors.role}</ErrorText>}
//       </SelectContainer>
//       <FormButton isPending={mutation.isPending} label="Registrarse" />
//     </FormContainer>
//   );
// };

// export default Register;

import { FormState, useForm } from '../../hooks/useForm';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormButton from './FormButton';
import FormInput from './FormInput';
import { validateRegister } from './validation';
import {
  ErrorText,
  FormContainer,
  Select,
  SelectContainer,
  SelectLabel,
  // SuccessMessage,
  // Spinner,
} from './styles';
import { registerUser } from '../../api/api';
import LoadingSpinner from './LoadingSpinner';
import SuccessMessage from './SuccessMessage';

export interface RegisterFormValues extends FormState {
  name: string;
  email: string;
  password: string;
  role: string;
}

const initialState: RegisterFormValues = {
  name: '',
  email: '',
  password: '',
  role: '',
};

const Register = () => {
  const navigate = useNavigate();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      setShowSuccessMessage(true);
      setFormData(initialState);

      setTimeout(() => {
        setShowSuccessMessage(false);
        navigate('/next-page'); // Redirige a la página siguiente
      }, 2000); // Muestra el mensaje de éxito durante 2 segundos
    },
    onError: (error) => {
      console.error('Error registrando el user.', error);
      alert('Error al registrar usuario :(');
    },
  });

  const { formData, setFormData, handleChange, handleSubmit, formErrors } =
    useForm<RegisterFormValues>(initialState, validateRegister);

  const onSubmit = () => {
    mutation.mutate(formData);
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      {mutation.isPending ? (
        <LoadingSpinner />
      ) : showSuccessMessage ? (
        <SuccessMessage message="✅ Registro exitoso. Redirigiendo..." />
      ) : (
        <>
          <FormInput
            label="Nombre y apellido"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={formErrors.name}
          />
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
          <SelectContainer>
            <SelectLabel htmlFor="role">Rol:</SelectLabel>
            <Select name="role" value={formData.role} onChange={handleChange}>
              <option value="" disabled>
                Selecciona tu rol
              </option>
              <option value="tutor">Soy tutor</option>
              <option value="student">Soy estudiante</option>
            </Select>
            {formErrors.role && <ErrorText>{formErrors.role}</ErrorText>}
          </SelectContainer>
          <FormButton isPending={mutation.isPending} label="Registrarse" />
        </>
      )}
    </FormContainer>
  );
};

export default Register;
