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
import * as Yup from "yup";

const FormFormik = () => {
  const { handleSubmit, handleChange } = useFormik({
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
    //validationSchema:
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
          <Input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <Input
            name="telefono"
            placeholder="Telefono"
            onChange={handleChange}
          />
        </FormControl>

        <Button type="submit">Enviar</Button>
      </form>
    </div>
  );
};
export default FormFormik;
