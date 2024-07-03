import './Banner.css';

//Por padrão, nós criamos uma função para poder colocar nossos componentes, e logo em seguida ja fazemos um retorno do que
//vamos para este componente
export const Banner = () => {
  //JSX = é como o react trabalha com a parte visual
  // O trabalho do react é entender o que é isso e fazer um append(adicionar) no DOM
  return(
    // usarmos className para declarar uma 'classe' pois por mais que pareça, isso é um arquivo JSX e não JS
    <header className="banner">
      <img src="/imagens/banner.png" alt="Banner principal da página do Organo" />
    </header>
    
  )
}