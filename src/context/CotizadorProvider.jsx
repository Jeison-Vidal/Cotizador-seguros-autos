import { createContext, useState } from "react";

const CotizadorContext = createContext();
const CotizadorProvider = ({ children }) => {
    const [error, setError] = useState("");
  const [datos, setDatos] = useState({
    marca: "",
    year: "",
    plan: "",
  });
  const cotizarSeguro=()=>{

    console.log('cotizado.....')
  }
  const handleChangeDatos = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
    
  };
  return (
    <CotizadorContext.Provider
      value={{ handleChangeDatos, datos, setDatos, error, setError ,cotizarSeguro}}
    >
      {children}
    </CotizadorContext.Provider>
  );
};
export { CotizadorProvider };
export default CotizadorContext;
