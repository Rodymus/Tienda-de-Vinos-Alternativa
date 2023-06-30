import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  Input,
} from "@chakra-ui/react";

const Checkout = ({ handleSubmit, handleChange, errors }) => {
  return (
    <div style={{ paddingTop: "50px" }}>
      <form onSubmit={handleSubmit}>
        <FormControl>
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

        <Button type="submit">Comprar</Button>
      </form>
    </div>
  );
};

export default Checkout;