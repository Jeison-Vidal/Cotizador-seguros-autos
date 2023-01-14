import { MARCAS, YEARS, PLANES } from "../constants";
import { Fragment } from "react";
import useCotizador from "../hooks/useCotizador";
import Error from "./Error";

const Formulario = () => {
  const { handleChangeDatos, datos, error, setError,cotizarSeguro,setComprar } = useCotizador();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(datos).includes("")) {
      return setError("Todos los campos son obligatorios");
    }
    setError('')
    cotizarSeguro()
    setComprar(false)
   
  };
  return (
    <>
      {error && <Error />}
      <form onSubmit={handleSubmit}>
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400"> Marca</label>

          <select
            name="marca"
            className="w-full p-3 bg-white border border-gray-2s00"
            onChange={(e) => handleChangeDatos(e)}
            value={datos.marca}
          >
            <option value="">-- Selecciona tu Marca</option>
            {MARCAS.map((marca) => (
              <option key={marca.id} value={marca.id}>
                {marca.nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400"> AÑO</label>

          <select
            name="year"
            className="w-full p-3 bg-white border border-gray-2s00"
            onChange={(e) => handleChangeDatos(e)}
            value={datos.year}
          >
            <option value="">-- Selecciona tu Año</option>
            {YEARS.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400">
            {" "}
            Elige tu Plan
          </label>
          <div className="flex gap-5">
            {PLANES.map((plan) => (
              <Fragment key={plan.id}>
                <label> {plan.nombre}</label>
                <input
                  type="radio"
                  name="plan"
                  value={plan.id}
                  onChange={(e) => handleChangeDatos(e)}
                />
              </Fragment>
            ))}
          </div>
        </div>
        <input
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold"
        />
      </form>
    </>
  );
};

export default Formulario;
