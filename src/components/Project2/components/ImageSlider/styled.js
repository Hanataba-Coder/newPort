import styled from 'styled-components'

export const Wrapper = styled.div`
    .arrow{
        display: none;
    }

    .secondImage {
        display: inline-block;
        margin-left: 5px;
    }

    @media only screen and (max-width: 600px) {
        .arrow{
            display: block;
        }

        .secondImage {
            display: none;
        }
    }
`