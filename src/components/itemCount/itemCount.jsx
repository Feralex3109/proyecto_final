import React, { useState } from "react";
import "./itemCount.css";

const itemCount = ({ stock, agregarAlCarrito }) => {
  const [contador, setContador] = useState(1);
  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <div className="contador">
      <button className="btnCount" onClick={sumar}>
        {" "}
        +
      </button>
      <p className="contCant"> {contador}</p>
      <button className="btnCount" onClick={restar}>
        {" "}
        -
      </button>
      <button onClick={() => agregarAlCarrito(contador)} className="btnCount">
        Adicionar al Carrito{" "}
      </button>
    </div>
  );
};

export default itemCount;
