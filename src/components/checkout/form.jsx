import "./Checkout.css";

const form = ({ datosForm, guardarDatosinput, enviarOrden }) => {
  return (
    <div className="ordenCompra">
      <p>Complete el siguiente formulario para generar la Orden de Compra</p>
      <form className="formCompra" onSubmit={enviarOrden}>
        <label htmlFor="nombre">Nombre completo</label>
        <input
          type="text"
          name="nombre"
          id="nombre"
          value={datosForm.nombre}
          onChange={guardarDatosinput}
          required
        />
        <label htmlFor="telefono">Telefono</label>
        <input
          type="text"
          name="telefono"
          id="telefono"
          value={datosForm.telefono}
          onChange={guardarDatosinput}
          required
        />
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          name="email"
          id="email"
          value={datosForm.email}
          onChange={guardarDatosinput}
          required
        />
        <label htmlFor="emailConfirm">Confirmar E-mail</label>
        <input
          type="email"
          name="emailConfirm"
          id="email"
          value={datosForm.emailConfirm}
          onChange={guardarDatosinput}
          required
        />
        <button className="enviarOrdenBt" type="submit">
          Orden de envio
        </button>
      </form>
    </div>
  );
};

export default form;
