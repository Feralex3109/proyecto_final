import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/cartContext";
import "./shoppingCart.css";

const shoppingCart = () => {
  const { carrito, borrarCarrito, totalPrecio, borrarProducto } =
    useContext(cartContext);

  if (carrito.length === 0) {
    return (
      <div className="carritoVacio">
        <h2>Ups, el carrito está vacío.</h2>
        <Link to="/">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <div className="CarritoCompra">
      <h1 className="tituloCar"> Detalles de tu Pedido: </h1>
      <ul className="listaCompra">
        {carrito.map((producto) => (
          <li key={producto.id}>
            <img
              className="imgCarrito"
              src={producto.imagen}
              alt={producto.nombre}
            />
            <p>{producto.nombre}</p>
            <p>Amount:{producto.cantidad}</p>
            <p>Precio por unidad:{producto.precio}</p>

            <button
              className="delete"
              onClick={() => borrarProducto(producto.id)}
            >
              Eliminar producto
            </button>
          </li>
        ))}
      </ul>
      <p>Total a pagar: ${totalPrecio()}</p>
      <Link to="/checkout">Confirmar compra</Link>
      <button className="delete" onClick={borrarCarrito}>
        Eliminar Carrito
      </button>
    </div>
  );
};

export default shoppingCart;
