import { useState } from "react"

function App(){

  const [nome, setNome] = useState ('SIUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU')

  const Formulario =() => {

    return (
      <>
      <h3>formulário</h3>

      <input 
        className="nome"
        onChange={(e)=>{setNome(e.target.value)}}
        type="text"/>
        
      <button
        className="botao"
        onClick={()=>{alert(nome)}}
       >
        Click Aqui

      </button>
      </>
    )
  }
  return(
    <div>
      <h3>Pizzaria 2D</h3>

      <Formulario/>
      <Formulario/>
      <Formulario/>
      
    </div>
  )
}

export default App
