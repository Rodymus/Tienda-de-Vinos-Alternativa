
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  Input,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

//https://chakra-ui.com/docs/components/form-control/usage
//no le agregue helpertext, usa validación de chakra
//Yup & Formik

const FormFormik = () => {
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      nombre: '',
      email: '',
      telefono: '',
    },
    onSubmit: (datos) => {
      console.log(datos);
      // conecto con la api
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      nombre: Yup.string()
        .required('Complete este campo')
        .min(3, 'Ingrese al menos 3 caracteres'),
      email: Yup.string()
        .email('Ingrese unemail valido!')
        .required('Completar para continuar'),
      telefono: Yup.number()
        .required('Ingrese un telefono valido')
        .min(7, 'ingrese un telefono valido'),
    }),
  });

  const isError = Input === '';

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormControl >
          <FormLabel>Ingresa tus datos</FormLabel>
          <Input
            name="nombre"
            type="text"
            placeholder="Nombre"
            onChange={handleChange}
          />
          <span>{errors.nombre}</span>
          <Input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <span>{errors.email}</span>
          <Input
            name="telefono"
            type="number"
            placeholder="Número"
            onChange={handleChange}
          />
          <span>{errors.telefono}</span>
        </FormControl>

        <Button type="submit">Enviar</Button>
      </form>
    </div>
  );
};
export default FormFormik;
