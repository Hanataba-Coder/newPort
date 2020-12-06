import React from 'react'
import { 
    Wrapper, 
    Container, 
    WrapperContent, 
    LinkButton, 
    Detail, 
    TextWrap, 
    Title, 
    DetailP ,
    LinkButtonWrapper
} from './styled'
import BnCReact from '../../../../assets/image/BnCNew.png'

const BullNCow = ({refApp}) => {
    return (
        <Wrapper ref={refApp} data-aos="fade-up" data-aos-duration="1000">
            <Container>
                <TextWrap >
                    <Title>Bulls & Cows</Title>
                </TextWrap>
                <WrapperContent>
                    <img style={{width: '100%'}} src={BnCReact} />
                    <Detail>
                        <div>
                            <DetailP>
                            Guess 4 digits number between 0 to 9 in order to match all number in each position of answer and the digits must be all different 
                            </DetailP>
                            <LinkButtonWrapper>
                                <LinkButton  href="https://hanataba-coder.github.io/BullsNCowsReact/">
                                        Try It! on React 
                                </LinkButton>
                                <LinkButton href="https://github.com/Hanataba-Coder/BullsNCowsReact">
                                    React GitHub
                                </LinkButton>
                                <LinkButton href="https://github.com/Hanataba-Coder/guessNumber" >
                                        Swift
                                </LinkButton>
                                <LinkButton href="https://github.com/Hanataba-Coder/ionic-bullsNcows" >
                                        Ionic
                                </LinkButton>
                            </LinkButtonWrapper>
                        </div>
                    </Detail>
                </WrapperContent>
            </Container>
        </Wrapper>
    )
}

export default BullNCow
