import { useRef} from 'react'
import api from '../../services/api'
import Button from '../../components/Button'
import BannerUser from '../../components/BannerUsers'
import { useNavigate } from 'react-router-dom'

import { 
  Container, 
  Form,  
  Input, 
  Title, 
  InputLabel, 
  ContainerInput 
} from './style'

// *import UsersImage from '../../assets/users.png'

export default function Home() {
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  const navigate = useNavigate()

  async function registerNewUser(){
    const data = await api.post('/usuarios', {
      name: inputName.current.value,
      age: parseInt(inputAge.current.value),
      email: inputEmail.current.value
    })

    console.log(data)
  }

  return (
    <Container>

      <BannerUser />

      <Title>Cadastro de Usuário</Title>
      
      <Form>

        <ContainerInput>
          <div>
            <InputLabel>Nome<span> *</span></InputLabel>
            <Input type='text' placeholder='name' ref={inputName}/>
          </div>

          <div>
            <InputLabel>Idade<span> *</span></InputLabel>
            <Input type='number' placeholder='idade' ref={inputAge}/>
          </div>
        </ContainerInput>

        

        <div style={{ width: '100%' }}>
          <InputLabel>E-mail<span> *</span></InputLabel>
          <Input type='email' placeholder='E-mail' ref={inputEmail}/>
        </div>

          <Button type='button' onClick={registerNewUser} theme='primary'>Cadastrar Usuário</Button>
        
      </Form>
      
      <Button type='button' onClick={() => navigate('/lista-de-usuarios')}>Ver Usuários</Button>
    
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
}
* só pode ter um elemento pai no return, uma forma de envolver os itens, tags, <> fragment </> ajuda cumpri a regra do react  
*/




