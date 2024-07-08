import "./Colaborador.css"

// Em vez de usar "props.(algumacoisa)...", nós usamos desestruturação e a vantagem de usar isso, é que só de bater o olho, nós ja
//sabemos quais as propriedades que precisamos passar para nosso componente funcionar, neste caso é: "nome, imagem, cargo"
const Colaborador = ({nome, imagem, cargo, corDeFundo}) => {
  return (
    <div className="colaborador">
      <div className='cabecalho' style={{ backgroundColor: corDeFundo}}>
        <img src={imagem} alt={nome}/>
      </div>

      <div className='rodape'>
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  )
}

export default Colaborador;