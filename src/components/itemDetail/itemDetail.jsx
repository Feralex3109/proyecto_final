import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../itemCount/itemCount";
import { cartContext } from "../../context/cartContext";
import "./itemDetail.css";

const itemDetail = ({ producto }) => {
  const [toggle, setToggle] = useState(false);
  const { añadirProducto } = useContext(cartContext);
  const agregarAlCarrito = (contador) => {
    const productoNuevo = { ...producto, cantidad: contador };
    añadirProducto(productoNuevo);
    setToggle(true);
  };

  return (
    <div className="item-detail">
      <img className="img" src={producto.imagen} alt={producto.nombre} />
      <div className="text">
        <h2>{producto.nombre}</h2>
        <p>{producto.descripcion}</p>
        <p>Precio por unidad: ${producto.precio}</p>
        {toggle ? (
          <>
            <Link className="btnCount" to="/carrito">
              Finalizar mi compra
            </Link>
            <Link className="btnCount" to="/">
              Sigue comprando
            </Link>
          </>
        ) : (
          <ItemCount
            stock={producto.stock}
            agregarAlCarrito={agregarAlCarrito}
          />
        )}
      </div>
    </div>
  );
};
export default itemDetail;
