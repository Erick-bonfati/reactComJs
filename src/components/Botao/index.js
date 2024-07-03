import './Botao.css'

const Botao = (props) => {

  return (
    <button className="botao">
      {/* props.children = pega todos os elementos filhos dentro do botão, ex: <Botao> Criar card </Botao>, resultado: 'Criar card' */}
      {props.children}
    </button>
  )
}

export default Botao