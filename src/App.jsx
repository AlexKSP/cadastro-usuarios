import { BoxImg, Container } from './style'

function Home() {

  return (
    <Container>
      <Box-img>
        <img />
      </Box-img>
      <h1>Cadastro de Usuário</h1>
      <Box-inputs>
          <input type="text" placeholder='nome'/>
          <input type="text" placeholder='idade'/>
        <Box-submit>
          <input type="email" placeholder='email'/>
          <button>Cadastrar Usuário</button>
        </Box-submit>
      </Box-inputs>
      <button>Ver Usuários</button>
    </Container>
  )
}

export default Home

/*
  Body color
  div.imgs
  h1
  box.div.inputs > div.inputs
  button - Cadastrar
  button - ver usuarios
*/

/* Aqui deixo salvo como notação de como posso utilizar de formas diferente um componente

function App() {
  const text = 'olá'

  return (
    <>
      <Container>
        <Title>Vite + React {text}</Title>
        <h3 style={{ color: 'green'}}>Olá</h3>
        <p>Paragrafo</p>
      </Container>    
    </>
  )
}*/


// só pode ter um elemento pai no return, uma forma de envolver os itens, tags, <> fragment </> ajuda cumpri a regra do react

