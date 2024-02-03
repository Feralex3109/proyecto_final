import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import dataBase from "../../dataBase/dataBase";
import ItemDetail from "../itemDetail/itemDetail";
import { doc, getDoc } from "firebase/firestore";
import "./itemDetailContainer.css";

const itemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const [productoExiste, setProductoExiste] = useState(false);
  const { id } = useParams();

  console.log(id);
  useEffect(() => {
    const productoRef = doc(dataBase, "products", id);
    getDoc(productoRef).then((respuesta) => {
      const productoDb = { id: respuesta.id, ...respuesta.data() };
      if (!respuesta.exists()) {
        setProductoExiste(true);
      }
      setProducto(productoDb);
    });
  }, [id]);

  return (
    <div className="detalleProd">
      {productoExiste ? (
        <div>Producto no Existe</div>
      ) : (
        <ItemDetail producto={producto} />
      )}
    </div>
  );
};

export default itemDetailContainer;
