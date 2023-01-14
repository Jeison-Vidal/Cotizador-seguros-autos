import { useCallback,useRef } from "react"
import useCotizador from "../hooks/useCotizador"
import {MARCAS,PLANES} from '../constants'

const Resultado = () => {
    const {resultado,datos,setComprar,comprar}=useCotizador()
    const {marca,plan,year}=datos
    const yearRef=useRef(year)
    const [nombreMarca]=useCallback(MARCAS.filter(m=>m.id===Number(marca)),[resultado]) 
   
  
    const [nombrePlan]=useCallback(PLANES.filter(p=>p.id===Number(plan)),[resultado])
   console.log(comprar)

    if(resultado===0) return null
  return (
    <div className="bg-gray-100 text-center mt-5 p-5 shadow">
      <h2 className="text-gray-600 font-black text-3xl">
        Resumen

      </h2>
      <p className="my-2">
        <span className="font-bold"> Marca: </span>
           {nombreMarca.name}
      </p>
      <p className="my-2">
        <span className="font-bold"> Plan: </span>
          {nombrePlan.nombre}
      </p>
      <p className="my-2">
        <span className="font-bold"> Año del auto: </span>
          {yearRef.current}
      </p>
      <p className="my-2 text-2xl">
        <span className="font-bold"> Total Cotización: </span>
          {resultado}
      </p>
      

       <button type="submit" className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold" onClick={()=>setComprar(true)}>Realizar Compra</button>

   

      </div>
      
    

      
  )
}

export default Resultado