import api from '../../services/api'
import { useEffect, useState } from 'react'

import Button from '../../components/Button'
import BannerUser from '../../components/BannerUsers'
import TrashImg from '../../assets/trash.svg'
import { 
    Container, 
    UsersList, 
    UserItem, 
    Title,
    TrashIcon,
    CardUsers,
    Avatar
} from './style'

import { useNavigate } from 'react-router-dom'

export default function ListUsers(){

    const [users, setUsers] = useState([])

    // TODA VEZ que a tela carrega, o useEffect é chamado
    // TODA VEZ que uma determinada variável MUDA de valor, ele é chamado
    useEffect(() => {
        async function getUsers() {
            // desistruturação poderia criar uma variavel normal e imprimir, veria todos os dados, porém quero somente os dados de DATA, com isso ele cria uma variavel pegando apenas o dado que eu quero e atribuindo a uma variavel de mesmo nome.
            const { data } = await api.get('/usuarios')
            setUsers(data)
        }
        getUsers()
    }, [])

    async function deleteUsers(id) {
        await api.delete(`/usuarios/${id}`)
        
        const updatedUsers = users.filter( user => user.id !== id)

        setUsers(updatedUsers)
    }

    //useStats é uma variavel especial do React que detecta sempre que tem uma alteração de valor, ele troca na hora a variavel

    const navigate = useNavigate()

    return (
      <Container>
        <BannerUser />

        <Title>Listagem de Usuários</Title>

        <UsersList>
          {users.map((user) => (
            <CardUsers key={users.id}>
              <UserItem>
                <Avatar
                  src={`https://avatar.iran.liara.run/public?username=${user.id}`}
                />
                <p>Nome: <strong>{user.name}</strong></p>
                <p>Idade: <strong>{user.age}</strong></p>
                <p>E-mail: <strong>{user.email}</strong></p>
                <TrashIcon type="img" src={TrashImg} alt="trash-icon" onClick={() => deleteUsers(user.id)}/>
              </UserItem>
            </CardUsers>
          ))}
        </UsersList>

        <Button onClick={() => navigate("/")}>Voltar</Button>
      </Container>
    );
}