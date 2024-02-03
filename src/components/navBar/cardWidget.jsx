import { BsCartXFill } from "react-icons/bs";
import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";

const carWidget = () => {
  const { carrito, totalCantidad } = useContext(cartContext);
  return (
    <Link className="carrito" to="/Carrito" id="cartwidget">
      <BsCartXFill />
      {carrito.length !== 0 && <p>{totalCantidad()}</p>}
    </Link>
  );
};

export default carWidget;
