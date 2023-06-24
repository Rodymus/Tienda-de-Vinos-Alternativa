import { chakra } from '@chakra-ui/react';
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

const FormFormik = () => {
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      nombre: '',
      email: '',
      telefono: '',
    },
    onSubmit: (datos) => {
      console.log('el formulario se envio con exito');
      console.log(datos);
      // conecto con la api
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      nombre: Yup.string()
        .required('Complete este campo')
        .min(3, 'Ingrese al menos 3 caracteres'),
      email: Yup.string()
        .email("Ingrese unemail valido!")
        .required("Completar para continuar"),
    }),
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
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
            placeholder="Telefono"
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
