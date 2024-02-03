import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Toastify from "toastify-js";
import Form from "./form";
import { cartContext } from "../../context/cardContext";
import { addDoc, collection } from "firebase/firestore";
import dataBase from "../../dataBase/dataBase";
import "./checkout.css";

const checkout = () => {
  const [datosForm, setDatosForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    emailConfirm: "",
  });

  const [idOrden, setidOrden] = useState(null);
  const { carrito, totalPrecio, borrarCarrito } = useContext(cartContext);

  const guardarDatosinput = (event) => {
    setDatosForm({ ...datosForm, [event.target.name]: event.target.value });
  };

  const enviarOrden = (event) => {
    event.preventDefault();

    if (datosForm.email === datosForm.emailConfirm) {
      const orden = {
        comprador: { ...datosForm },
        productos: [...carrito],
        fecha: new Date(),
        total: totalPrecio(),
      };
      subirOrden(orden);
    } else {
      Toastify({
        text: "¡Los correos electrónicos ingresados no coinciden!",

        duration: 3000,
      }).showToast();
    }
  };

  const subirOrden = (orden) => {
    const ordenesRef = collection(dataBase, "ordenes");
    addDoc(ordenesRef, orden).then((respuesta) => {
      setidOrden(respuesta.id);
      borrarCarrito();
    });
  };
  return (
    <div className="checkout">
      {idOrden ? (
        <div className="ordenOk">
          <h2>Orden generada exitosamente</h2>
          <p>El Código de Seguimiento de su Pedido es:{idOrden}</p>
        </div>
      ) : (
        <Form
          datosForm={datosForm}
          guardarDatosinput={guardarDatosinput}
          enviarOrden={enviarOrden}
        />
      )}

      <Link className="backInicio" to="/">
        {" Retornar al inicio "}
      </Link>
    </div>
  );
};

export default checkout;
