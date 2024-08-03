import { Title, Container } from './style'

function Home() {

  return (
    <Container>
      <img />
    </Container>
  )
}

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
export default Home
