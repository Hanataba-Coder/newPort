import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    overflow: hidden;
`

export const Container = styled.div`
    margin: 0 auto; 
    max-width: 1100px;

    .slideOutside{
        display: none;
    }

    .slideInside{
        display: block;
    }

    @media only screen and (max-width: 600px) {
        max-width: 85%;

        .slideOutside{
            display: block;
            margin-bottom: 20px;
        }

        .slideInside{
            display: none;
        }
    }
`

export const WrapperContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;

    @media only screen and (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`

export const LinkButton = styled.a.attrs({
    target: '_blank',
  })`
    color: #fff;
        text-decoration: none;
    padding: 10px;
    font-weight: bold;
    font-size: 18px;
    background-color: #000;
    border: 1px solid #000;
    margin-right: 5px;
    width: fit-content;
    border-radius: 5px;

    :hover{
        background-color: #fff;
        border: 1px solid #000;
        color: #000;
    }

    @media only screen and (max-width: 600px) {
        display: block;
        margin: 5px auto;
        width: auto;
        text-align: center;
    }
`

export const Detail = styled.div`
    display: flex;
    align-items: center;

    font-size: 20px;
`

export const TextWrap = styled.div`
    padding: 30px 15rem;
    font-size: 24px;
    display: block;
    text-align: center;
    width: 100%;
    background-color: 'rgba(0, 0, 0, 0.8)';

    @media only screen and (max-width: 600px) {
        padding: 30px 30px;
    }
`

export const Title = styled.span`
    font-weight: bold;
    width: fit-content;
    padding-left: 5px;
    border-left: 5px solid #BFA48D;
`

export const DetailP = styled.p`
    text-align: center;
`

export const CenterVertical = styled.div`
    display: flex;
    justify-content: center;
`