import { Button } from './style'

//{} quando uso chaves é que quero o valort  exato que está chegando
function DefaultButton({ children, ...props }){
    //spread operator -> Todo o resto que é os ...(nome que eu quero dar, normalmente rest ou props)
    return (
        <Button {...props}>{children}</Button>
    )
}

export default DefaultButton