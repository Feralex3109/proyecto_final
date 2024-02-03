import { Link } from "react-router-dom";
import "./item.css";

const item = ({ producto }) => {
  return (
    <div className="card">
      <img className="imgCards" src={producto.imagen} alt={producto.nombre} />
      <div className="card-body">
        <p className="textCards">Artículo coleccionable:{producto.nombre}</p>
        <p className="textCards">Precio: ${producto.precio}</p>
        <p className="textCards">Existencias:{producto.stock}</p>

        <Link to={`/detalle/${producto.id}`} className="link">
          Más detalles
        </Link>
      </div>
    </div>
  );
};

export default item;
