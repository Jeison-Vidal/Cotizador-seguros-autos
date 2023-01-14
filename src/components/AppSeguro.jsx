import Formulario from "./Formulario"
import useCotizador from "../hooks/useCotizador"
import Sipinner from "./Sipinner"
import Resultado from "./Resultado"
import Pago from "./Pago"
import Modal from "./Modal"

const AppSeguro = () => {
  const {resultado,cargando,comprar}=useCotizador()
  return (
    <>
    <header className="my-10">
        <h1 className="text-white text-center text-4xl font-black">Cotizador de Seguros Autos</h1>


    </header>

    <main className="bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10">
            <Formulario/>
            {cargando ? <Sipinner/>: <Resultado/>}
           
            
              {/* {comprar ?<Pago/>:''} */}
            {comprar ? <Modal/>:''} 
    </main>
    
    
    </>
  )
}

export default AppSeguro