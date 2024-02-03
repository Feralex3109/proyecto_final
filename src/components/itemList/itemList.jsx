import Item from "../item/item";
import "./itemList.css";

const itemList = ({ productos }) => {
  return (
    <div className="itemList">
      {productos.map((producto) => (
        <Item producto={producto} key={producto.id} />
      ))}
    </div>
  );
};

export default itemList;
