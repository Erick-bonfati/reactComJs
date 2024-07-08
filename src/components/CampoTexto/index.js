import './CampoTexto.css'

// É mais recomendado utilizar arrowFunctions para criar um componente react, pois na empresas é mais utilizado assim
const CampoTexto = (props) => { // Por padrão o React recebe o parametro 'props' que são as propriedades que esta função recebeu
  
  const placeholderModificada = `${props.placeholder}...`

  const aoDigitado = (e) => {
    props.aoAlterado(e.target.value);
  }

  return (
    <div className="campo-texto">
      {/* Assim nós pegamos as propriedades que foram passadas para o 'label' */}
      <label>
        {props.label}
      </label>
      {/* se a props.obrigatorio for true, o campo vai ser obrigátorio o preenchimento */}
      <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} type="text" placeholder={placeholderModificada}/>
    </div>
  )
}

export default CampoTexto;