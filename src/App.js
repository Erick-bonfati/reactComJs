import { useState } from 'react'

import Banner from './components/Banner'; // não passamos a referencia pois ele ja esta pegando tudo que vem do index, é lá a gente
// passa a referencia que esta sendo importada que no caso seria "Banner"


import Formulario from './components/Formulario';
import Time from './components/Time';
import Rodape from './components/Rodape';

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9',
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      nome: 'Data Sciense',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE5F5',
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9',
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
    }
  ]

  //aqui vamos armazenar os colaboradores num array vazio, que vai aumentar a cada novo colaborador
  const [colaboradores, setColaboradores] = useState([]);

  // variavel para cada novo colaborador que for adicionado, ele vai fazer isso...
  const aoNovoColaboradorAdicionado = (colaborador) => {
    debugger
    //aqui nós pegamos todos os valores antigos e passamos um novo valor para ele adicionar
    setColaboradores([...colaboradores, colaborador]);
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        nomeDosTimes={times.map(time => time.nome)} // aqui nós pegamos toda a lista do time, e pegamos somente a informação de nome
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
      />

      {/* Para cada time, ele vai adicionar um novo time
        com a propriedade time.nome
      */}
      {times.map(time => 
      <Time
      // Aqui passamos uma key para cada objeto unico
      // este é mais por conta do navegador solicitar
      key={time.nome} 
      nome={time.nome} 
      corPrimaria={time.corPrimaria}
      corSecundaria={time.corSecundaria}
      colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)
      }

      <Rodape />

    </div>
  );
}

export default App;
