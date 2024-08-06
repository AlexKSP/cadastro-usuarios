import PropTypes from 'prop-types'
import { Button } from './style'

//{} quando uso chaves é que quero o valort  exato que está chegando
function DefaultButton({ children, theme, ...props }){
    //spread operator -> Todo o resto que é os ...(nome que eu quero dar, normalmente rest ou props)
    return (
        <Button {...props} theme={theme}>{children}</Button>
    )
}

DefaultButton.propTypes = {
    children: PropTypes.node.isRequired,
    theme: PropTypes.string
}

export default DefaultButton