import styled from 'styled-components'

export const Button = styled.button`
    border: ${ props => props.theme === 'primary' ? 'none' : '1px solid #fff'};
    background-color: ${ props => props.theme === 'primary' ? '#fe735d' : 'transparent'} ;
    font-size: 16px;
    color: #fff;
    padding: 16px 32px;
    width: fit-content;
    cursor: pointer;
    border-radius: 30px;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        background-color: ${ props => props.theme === 'primary' ? 'none' : '#fe735d'};
        
    }

`