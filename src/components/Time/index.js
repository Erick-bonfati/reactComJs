import Colaborador from '../Colaborador';
import './Time.css';

const Time = (props) => {
  const backgroundColorSecundaria = {backgroundColor: props.corSecundaria}
  const corSublinhado = {borderColor: props.corPrimaria}

  return (
    // Caso a contagem de colaboradores for maior do que 0, ele vai mostrar somente os times que tiverem mais de um colaborador
    //cadastrado, caso contrario ele não vai fazer nada
    props.colaboradores.length > 0 && <section 
    className="time"
    style={backgroundColorSecundaria}
    >
      <h3 style={corSublinhado}>{props.nome}</h3>
      <div className="colaboradores">
        {/* Para cada colaborador que cadastrarmos, ele vai adicionar ele na aba Times */}
        {props.colaboradores.map( colaborador => 
        <Colaborador
        key={colaborador.nome}
        nome={colaborador.nome} 
        cargo={colaborador.cargo}
        imagem={colaborador.imagem}
        corDeFundo={props.corPrimaria}
        />)}
      </div>
      
    </section>
    : '' // aqui é para simbolar um operador ternário, que vai ser a saído caso não aja nenhum valor cadastrado
    
  )
}

export default Time;