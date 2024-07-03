import { useState } from 'react'

import Banner from './components/Banner'; // não passamos a referencia pois ele ja esta pegando tudo que vem do index, é lá a gente
// passa a referencia que esta sendo importada que no caso seria "Banner"


import Formulario from './components/Formulario';

function App() {

  //aqui vamos armazenar os colaboradores num array vazio, que vai aumentar a cada novo colaborador
  const [colaboradores, setColaboradores] = useState([]);

  // variavel para cada novo colaborador que for adicionado, ele vai fazer isso...
  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    //aqui nós pegamos todos os valores antigos e passamos um novo valor para ele adicionar
    setColaboradores([...colaborador, colaborador]);
  }

  return (
    <div className="App">
      <Banner />
      <Formulario 
      aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
      />
    </div>
  );
}

export default App;
