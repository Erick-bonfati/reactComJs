import { useState } from 'react'

import './Formulario.css'
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';

const Formulario = (props) => {

  const times = [
    'Programação',
    'Front-end',
    'Data-science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão'
  ]

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')

  const aoSalvar = (e) => {
    e.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
    })
  }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        {/* Se definindo uma props=propriedade como true */}
        <CampoTexto 
        obrigatorio={true} 
        label="Nome" 
        placeholder="Digite seu nome"
        valor={nome}
        aoAlterado={valor => setNome(valor)}
        />

        <CampoTexto 
        obrigatorio={true} 
        label="Cargo" 
        placeholder="Digite seu cargo"
        valor={cargo}
        aoAlterado={valor => setCargo(valor)}
        />

        <CampoTexto 
        label="Imagem" 
        placeholder="Digite o endereço da imagem"
        valor={imagem}
        aoAlterado={valor => setImagem(valor)}
        />

        <ListaSuspensa 
        obrigatorio={true} 
        label="Time" 
        itens={times}
        valor={time}
        aoAlterado={valor => setTime(valor)}
        > </ListaSuspensa>

        <Botao>
          Criar Card
        </Botao>
      </form>
    </section>
  )
}

export default Formulario;