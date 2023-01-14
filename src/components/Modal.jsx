import React from 'react'
import cerrar from "../img/cerrar.svg"
import useCotizador from '../hooks/useCotizador'
import Pago from './Pago'
import "../styles/index.css"
const Modal = () => {
  const {setComprar}=useCotizador()
    const ocultarModal=()=>{

        setComprar(false)
    }
  return (
    <div className="modal">
    <div className="cerrar-modal">
      <img src={cerrar} alt="cerrar modal" onClick={ocultarModal}  />
    </div>
    <div className='m-5 align-center' >
    <Pago/>
    </div>
    
    {/* <form onSubmit={handleSubmit} className={`formulario ${animarModal ? "animar" : "cerrar"}`}>
     
      {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

      <div className="campo">
        <label htmlFor="nombre">Nombre Gasto</label>
        <input
          id="nombre"
          type="text"
          placeholder="Añade el nombre de tu presupuesto"
          value={nombre}
          onChange={(e)=>setNombre(e.target.value)}
        />
      </div>

      <div className="campo">
        <label htmlFor="cantidad">Cantidad</label>
        <input
          id="cantidad"
          type="number"
          placeholder="Añade la cantidad del gasto: eh. 300"
          value={cantidad}
          onChange={(e)=>setCantidad(Number(e.target.value))}
        />
      </div>
      <div className="campo">
        <label htmlFor="categoria">Categoria</label>
      <select  id="Categoria"  value={categoria}
          onChange={(e)=>setCategoria(e.target.value)}>
        <option value="">- - - - Seleccione- - - - </option>
        <option value="ahorro">Ahorro</option>
        <option value="comida">Comida</option>
        <option value="casa">Casa</option>
        <option value="gastos">Gastos Varios</option>
        <option value="ocio">Ocio</option>
        <option value="salud">Salud</option>
        <option value="suscripciones">Suscripciones</option>
        

      </select>
      </div>
{/* <input type="submit" value={gastoEditar.nombre?" Guardar Cambios ": "Añadir Gasto"} /> */}

    {/* </form> */} 
    
  </div>
  )
}

export default Modal