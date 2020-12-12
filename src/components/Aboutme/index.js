import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components';
import { Row, Col } from 'antd';
import Profile from '../../assets/image/IMG_2053.png'

const AboutMeWrapper = styled.div`
    padding: 40px 100px;
    width: 100%;
    height: calc(100% - 97px);
    display: flex;
    flex-direction: column;

    .profileWrap {
        display: flex;
        justify-content: center;
    }

    .description{
        display: flex;
        justify-content: center;
    }

    @media only screen and (max-width: 600px) {
        height: 100%;
        padding: 20px 20px;
    }
`

const Title = styled.span`
    font-weight: bold;
    width: fit-content;
    padding-left: 5px;
    border-left: 5px solid #BFA48D;
`

const WrapAboutMe = styled.div`
    max-width: 100%;
    background-color: rgba(0,0,0,0.8); 
    color: #fff; 

    @media only screen and (max-width: 600px) {
        height: unset;
    }
`

const TextWrap = styled.div`
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

const ResumeButton = styled.a.attrs({
    target: '_blank',
})`
    color: #fff;
    padding: 10px;
    margin-left: 30px;
    background-color: transparent;
    font-weight: bold;
    font-size: 18px;
    border: 1px solid #fff;
    width: fit-content;

    :hover{
        background-color: #fff;
        border: 1px solid transparent;
        color: #000;
    }

    @media only screen and (max-width: 600px) {
        display: block;
        margin: auto;
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

const SubText = styled.div`
    font-size: 16px
`

const AboutMe = props => {

    return (
        <WrapAboutMe  data-aos="fade-up" data-aos-duration="1000" id="aboutme">
                <TextWrap >
                    <Title>About Me</Title>
                </TextWrap>

                <AboutMeWrapper >
                        <Row  >
                            <Col xs={24} sm={24} md={12} >
                                <div className="profileWrap">
                                    <div style={{maxWidth: '50%', height: '50%'}} >
                                        <img style={{width: '100%'}} src={Profile} />
                                    </div>
                                </div>
                                <div className="description">
                                    <h1>
                                        <p style={{ color: '#fff',padding: '30px', fontSize: '22px'}}>
                                            Hi! I'm Yodsapat Pansawat,  
                                            a computer engineering student. I'm interested in coding web & mobile application. 
                                            I love finding new passions and enriching my life.
                                        </p>
                                    </h1>
                                </div>
                                <ResumeButton href="https://drive.google.com/file/d/12WRIidK-HL24jp0LDfBUkfi0jhbkiVRy/view?usp=sharing">
                                    Download Resume
                                </ResumeButton>
                            </Col>
                            <Col xs={24} sm={24} md={12} >
                                <div
                                    style={{
                                        padding: '30px'
                                    }}
                                >
                                    <Title style={{fontSize: '22px'}} >Contact</Title>
                                    <SubText>Tel: 0991184910</SubText>
                                    <SubText>Email: pa.yodsapat@gmail.com</SubText>
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
                            </Col>
                        </Row>
                </AboutMeWrapper>
        </WrapAboutMe>
    )
}

export default AboutMe;

