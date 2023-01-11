import { MARCAS, YEARS, PLANES } from "../constants";
import { Fragment } from "react";

const Formulario = () => {
  return (
    <>
      <form>
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400"> Marca</label>

          <select
            name="marca"
            className="w-full p-3 bg-white border border-gray-2s00"
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
            name="marca"
            className="w-full p-3 bg-white border border-gray-2s00"
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
          <label className="block mb-3 font-bold text-gray-400"> Elige tu Plan</label>
                <div className="flex gap-5">
                    {PLANES.map(plan=>(

                         <Fragment key={plan.id}>
                            <label> {plan.nombre}</label>
                            <input type="radio" 
                            name="plan"
                            value={plan.id}
                            />
                        </Fragment>
                    ))}
                   
                </div>
        
        </div>
        <input type="submit"
        className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold" />
      </form>
    </>
  );
};

export default Formulario;
