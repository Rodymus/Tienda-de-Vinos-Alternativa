import Checkout from "./Checkout";
import { useFormik } from "formik";
import * as Yup from "yup"


const checkourContainer = () => {

  const { handleSubmit, handleChange } = useFormik({

    initialValues: {
      name: "",
      email: "",
      phone: ""
    },

    onSubmit: ( data )=> {

    }
  })

  return <Checkout handleSubmit={handleSubmit} handleChange={handleChange} />;
}

export default checkourContainer