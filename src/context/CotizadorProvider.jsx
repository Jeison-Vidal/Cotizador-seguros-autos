import { createContext, useState } from "react";
import { obtenerDiferenciaYear,calcularMarca,calcularPlan,formatearDinero } from "../helpers";

const CotizadorContext = createContext();
const CotizadorProvider = ({ children }) => {
    const [error, setError] = useState("");
    const[resultado,setResultado]=useState(0)
    const [cargando,setCargando]=useState(false)
    const [comprar,setComprar]=useState(false)
  const [datos, setDatos] = useState({
    marca: "",
    year: "",
    plan: "",
  });
  const cotizarSeguro=()=>{
    let resultado=2000;
   const diferencia=obtenerDiferenciaYear(datos.year)
   resultado -=((diferencia*3)*resultado)/100
   resultado *=calcularMarca(datos.marca)
  resultado *=calcularPlan(datos.plan)
  
  resultado=formatearDinero(resultado)
  setCargando(true)
  setTimeout(() => {
    setResultado(resultado)
    setCargando(false)
  }, 3000);
  
    
  }
  const handleChangeDatos = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
    
  };
  return (
    <CotizadorContext.Provider
      value={{ handleChangeDatos, datos, setDatos, error, setError ,cotizarSeguro,resultado,cargando,setComprar,comprar}}
    >
      {children}
    </CotizadorContext.Provider>
  );
};
export { CotizadorProvider };
export default CotizadorContext;
