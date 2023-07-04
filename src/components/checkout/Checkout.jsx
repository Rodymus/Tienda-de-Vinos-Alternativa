import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  Input,
} from "@chakra-ui/react";

const Checkout = ({ handleSubmit, handleChange }) => {
  return (
    <div style={{ paddingTop: "50px" }}>
      <form onSubmit={handleSubmit}>
      <Input placeholder='Name' name='name' onChange={handleChange}/>
      <Input placeholder='Email' name='email' onChange={handleChange}/>
      <Input placeholder='Phone' name='phone' onChange={handleChange}/>
      <Button type='submit'>Comprar</Button>
      </form>
    </div>
  );
};

export default Checkout;