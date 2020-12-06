import React from 'react'
import { Wrapper, Container, WrapperContent, LinkButton, Detail, TextWrap, Title, DetailP } from './styled'
import ChatApp3 from '../../../../assets/image/chatapp3.png'

const ChatApp = ({refApp}) => {
    return (
        <Wrapper ref={refApp} data-aos="fade-up" data-aos-duration="1000">
            <Container>
                <TextWrap >
                    <Title>Chat App for Practice</Title>
                </TextWrap>
                <WrapperContent>
                    <img style={{height: '400px'}} src={ChatApp3} />
                    <Detail>
                        <div>
                            <p>
                                Chat App โดยใช้ firebase ประกอบด้วย <br/>
                                - หน้าสมัครผู้ใช้งาน <br/>
                                - หน้าเข้าสู่ระบบ <br/>
                                - ห้องแชทรวม <br/>
                            </p>
                            <LinkButton href="https://github.com/Hanataba-Coder/chatAppFirebase" > 
                                    Swift
                            </LinkButton>
                        </div>
                    </Detail>
                </WrapperContent>
            </Container>
        </Wrapper>
    )
}

export default ChatApp
