import api from '../../services/api'
import { useEffect } from 'react'

import Button from '../../components/Button'
import BannerUser from '../../components/BannerUsers'
import { useNavigate } from 'react-router-dom'

export default function ListUsers(){

    let users = []

    // TODA VEZ que a tela carrega, o useEffect é chamado
    // TODA VEZ que uma determinada variável MUDA de valor, ele é chamado
    useEffect(() => {
        async function getUsers() {
            // desistruturação poderia criar uma variavel normal e imprimir, veria todos os dados, porém quero somente os dados de DATA, com isso ele cria uma variavel pegando apenas o dado que eu quero e atribuindo a uma variavel de mesmo nome.
            const { data } = await api.get('/usuarios')
            console.log(data)
        }
        getUsers()
    }, [])

    const navigate = useNavigate()

    return(
        <>
        <BannerUser />
        <div>
            <h1>Listagem de Usuários</h1>

            {users.map()(user => (
                <div>
                    <p>{user.name}</p>
                    <p>{user.age}</p>
                    <p>{user.email}</p>
                </div>
            ))}

            <Button onClick={() => navigate('/')}>Voltar</Button>
        </div>
        </>
    )
}