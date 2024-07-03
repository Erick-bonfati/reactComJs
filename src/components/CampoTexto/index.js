import './CampoTexto.css'

// É mais recomendado utilizar arrowFunctions para criar um componente react, pois na empresas é mais utilizado assim
const CampoTexto = (props) => { // Por padrão o React recebe o parametro 'props' que são as propriedades que esta função recebeu
  
  const placeholderModificada = `${props.placeholder}...`
  
  // let valor = 'Erick';

  // useState = É considerado um 'HOOK' que faz alguma coisa
  //Aqui nos passamos dois valores, desestruturando nossa array, pegando a primeira posição do array e a
  //segunda posição do array
  // const [valor, setValor] = useState(''); //useState('Erick'); //setando o valor padrão

  // setValor = em resumo, diferente da variavel let = 'valor', sempre que algo novo é digitado
  // ele pega já o valor existente, que no caso é 'Erick' e adiciona os valores que foram digitados
  // que estão sendo digitados, com let, ele somente deixava o valor padrao e adicionava somente o primeiro
  //caractere que tinha sido digitado, então por ex;

  // Com let = valor, saida: Erickd (4x), exibe 4 vezes o mesmo resultado
  // Com setValor, saída: Erickdddd (4x), exibe na sequencia: Erickd, Erickdd, Erickddd, Erickdddd...

  // const aoDigitado = (e) => {
  //   // e.target.value = estamos pegando o valor do evento que foi digitado
  //   //setValor, é quase como um console.log, ele vai setar este valor e quando digitar vai pegar o
  //   //ciclo de vida e vai ir exibindo no console
  //   setValor(e.target.value);
  //   console.log(valor)
  // }

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