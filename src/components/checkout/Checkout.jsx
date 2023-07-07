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
      <FormControl >
      <Input placeholder='Name' name='name' onChange={handleChange}/>
      <span>{errors.name}</span>
      <Input placeholder='Email' name='email' onChange={handleChange}/>
      <span>{errors.email}</span>
      <Input placeholder='Phone' name='phone' onChange={handleChange}/>
      <span>{errors.phone}</span>
      </FormControl >
      <Button type='submit'>Comprar</Button>
      </form>
    </div>
  );
};

export default Checkout;