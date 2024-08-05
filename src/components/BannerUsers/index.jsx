import { BannerUsers } from './style'
import UsersImage from '../../assets/users.png'

function BannerUser(){

    return (

        <BannerUsers>
            <img src={UsersImage} alt='imagem-icons-users'/>
        </BannerUsers>
    )
}

export default BannerUser