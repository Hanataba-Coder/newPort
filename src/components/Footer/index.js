import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #848484;
    background-color: #fff;
    text-align: center;
    flex-direction: column;
    border-top: .5px solid #a1a1a1;
    margin-top: 10px;
    padding: 30px;

    & .contact{
        display: flex;
        align-items: center;
    }

    & .contact-detail{
        text-align: initial;
    }

    @media only screen and (max-width: 600px) {
        & .contact{
            flex-direction: column;
        }

        & .contact-detail{
            text-align: center;
        }
    }
`

const Ul = styled.ul`
    list-style: none;
    display: flex;

    & li > a {
        text-decoration: none;
        font-size: 40px;
        margin-right: 20px;
        color: #aaa;
    }

    & li > a:hover {
        // color: #000;
        &.facebook{
            color: #046EE5;
        }

        &.ig {
            background: linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        &.line {
            color: #02B902;
        }
    }
`

const Title = styled.span`
    font-weight: bold;
    width: fit-content;
    padding-left: 5px;
    border-left: 5px solid #BFA48D;
`

const SubText = styled.div`
    font-size: 16px
`

const LinkButton = styled.a.attrs({
    target: '_blank',
})`
    display: block;
    width: fit-content;
    border: 2px solid #848484;
    border-radius: 5px;
    padding: 5px;
    text-decoration: none;
    color: #848484;
    margin-top: 5px;
    font-weight: bold;

    &:hover{
        color: black;
        border-color: black;
    }
`

const ButtonClipath = styled.div`
    display: flex;
    align-items: center;
    color: #fff;
    font-weight: bold;
    padding: 5px 10px;
    position: relative;
    height: 50px;
    background-color: #c0392b;
    clip-path: polygon(100% 0, 100% 70%, 70% 100%, 0 100%, 0 0);
    transition: .2s ease-out;
    cursor: pointer;
    margin-top: 10px;

    &:hover{
        clip-path: polygon(100% 0%, 100% 100%, 100% 100%, 0% 100%, 0 0);
        transition: .2s ease-out;
    }

    &:after{
        color: #fff;
        width: 100%;
        padding: 0 10px;
        font-weight: bold;
        font-size: 20px;
        position: absolute;
        content: '${({content}) => content ? content : ''}';
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`

const Footer = () => {
    return (
        <FooterWrapper>
            <div>
                <div className="contact">
                    <div className="contact-detail">
                        <Title style={{fontSize: '22px'}} >Contact</Title>
                        <SubText>Tel: 0991184910</SubText>
                        <SubText>Email: pa.yodsapat@gmail.com</SubText>
                        <ButtonClipath onClick={() => window.open("https://github.com/Hanataba-Coder/newPort", '_blank')}  content={'SOURCE CODE'} />
                    </div>
                    <Ul>
                        <li>
                            <a className="facebook" href="https://www.facebook.com/phoom.yodsapat/" target="_blank" ><i class="fab fa-facebook-square"></i></a>
                        </li>
                        <li>
                            <a className="ig" href="https://www.instagram.com/yodspat/" target="_blank" ><i class="fab fa-instagram"></i></a>
                        </li>
                        <li>
                            <a className="line" href="https://line.me/ti/p/wU0acrRC4K" target="_blank" ><i class="fab fa-line"></i></a>
                        </li>
                    </Ul>
                </div>
            </div>
        </FooterWrapper>
    )
}

export default Footer
