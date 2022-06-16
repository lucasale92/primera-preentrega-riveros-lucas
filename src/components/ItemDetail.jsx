import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ descripcion }) => {
  const onAdd = (count) => {
    alert(`Agregaste ${count} producto(s)`);
  };
  return (
    <>
      {descripcion.map((item) => (
        <>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12 p-2 text-center">
              <img src={item.imagen} alt="imagen" />
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <h2 className="detail-nombre">{item.nombre}</h2>
              <p className="detail-precio">Precio: $ {item.precio}</p>
              <p className="detail-detalle">Descripcion: {item.descripcion}</p>
              <p className="detail-details">Stock disponible: {item.stock}</p>
              <ItemCount inicial={1} stock={5} onAdd={onAdd} />
            </div>
          </div>
        </>
      ))}
    </>
  );
};
export default ItemDetail;
