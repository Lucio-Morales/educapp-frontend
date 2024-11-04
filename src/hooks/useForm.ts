import { useState } from 'react';

export interface FormState {
  [key: string]: string;
}

export interface FormErrors {
  [key: string]: string | undefined;
}

export const useForm = <T extends FormState>(
  initialState: T,
  validate: (values: T) => FormErrors
) => {
  const [formData, setFormData] = useState<T>(initialState);
  const [formErrors, setFormErrors] = useState<FormErrors>({ ...initialState });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    const errors = validate({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: errors[name] });
  };

  const handleSubmit =
    (callback: () => void) => (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const errors = validate(formData);
      setFormErrors(errors);
      if (Object.keys(errors).length === 0) {
        callback();
      }
    };

  return { formData, handleChange, handleSubmit, formErrors };
};
