import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px;
    height: 100vh;

`

export const Title = styled.h2`
    color: #fff;
    text-align: center;
    font-size: 38px;
    font-style: normal;
    font-weight: 600;
`

export const UsersList = styled.div`
    display: grid;
    grid-template-columns: 300px 300px 300px;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    width: 80vw;
    margin: 10px;
    @media (max-width: 900px){
        grid-template-columns: 1fr 1fr;
    }
`

export const UserItem = styled.div`
    background-color: aliceblue;
    padding: 10px;
    border-radius: 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
    
`
export const TrashIcon = styled.img`
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.5;
    }
`

export const CardUsers= styled.div`
    max-width: 400px;
    display: flex;
    justify-content: space-between;
    
`

export const Avatar= styled.img`
    width: 80px;
    height: 80px;

`