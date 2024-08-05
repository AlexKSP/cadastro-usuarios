import Button from '../../components/Button'
import BannerUser from '../../components/BannerUsers'

export default function ListUsers(){

    return(
        <>
        <BannerUser />
        <div>
            <h1>Listagem de Usuários</h1>
            <Button>Voltar</Button>
        </div>
        </>
    )
}