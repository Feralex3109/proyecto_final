import React, { useEffect, useState } from "react";
import { PacmanLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import dataBase from "../../dataBase/dataBase";
import ItemList from "../itemList/itemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import "./itemListContainer.css";

const itemListContainer = ({ saludo }) => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState([true]);
  const { categoria } = useParams();

  useEffect(() => {
    setCargando(true);
    let consulta;
    const productosRef = collection(dataBase, "productos");

    if (categoria) {
      consulta = query(productosRef, where("categoria", "==", categoria));
    } else {
      consulta = productosRef;
    }
    getDocs(consulta)
      .then((respuesta) => {
        let productosDb = respuesta.docs.map((producto) => {
          return { id: producto.id, ...producto.data() };
        });
        setProductos(productosDb);
      })
      .catch((error) => console.log(error))
      .finally(() => setCargando(false));
  }, [categoria]);

  return (
    <>
      {cargando ? (
        <div className="cargando">
          <PacmanLoader />
        </div>
      ) : (
        <div className="itemListContainer">
          <p className="tituloSaludo">{saludo}</p>
          <ItemList productos={productos} />
        </div>
      )}
    </>
  );
};

export default itemListContainer;
