import './ListaSuspensa.css'


const ListaSuspensa = (props) => {
  // console.log(props.itens)
  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>

      <select onChange={e => props.aoAlterado(e.target.value)} required={props.required} value={props.valor}>
        <option value=""></option>
        {/* Aqui fazemos uma funcao e para cada item que recebemos por parametro, ele retorna uma nova 'option'  
        passamos uma chave para cada item que vai ser o nome de cada time que passamos no parametro, 
        ex: time=front-end, key=front-end*/}
        {props.itens.map(item => {
          return <option key={item}> {item} </option>  
        })}
      </select>
    </div>
  )
}

export default ListaSuspensa