import Checkout from "./Checkout";
import { useFormik } from "formik";
import * as Yup from "yup";
import { db } from "../../firebaseConfig";
import {collection, addDoc} from "firebase/firestore";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


const CheckoutContainer = () => {

  const {cart, getTotalPrice}= useContext( CartContext )

  let total = getTotalPrice()

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    onSubmit: (data) => {
      // ACA MANEJAMOS LA LOGICA DEL FORM
  
      let order = {
        buyer: data,
        items: cart,
        total: total
      }

      let ordersCollection = collection(db, "orders")
      addDoc(ordersCollection, order)
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Este campo es obligatorio")
        .min(3, "Este campo debe contener al menos 3 caracteres"),
      email: Yup.string()
        .email("Este campo no corresponde a un email valido")
        .required("Este campo es obligatorio"),
      phone: Yup.string()
        .required("Este campo es obligatorio")
        .min(10, "El telefono no cumple los requisitos"),
    }),
  });


  return <Checkout handleSubmit={handleSubmit} handleChange={handleChange} errors={errors} />;
};

export default CheckoutContainer;