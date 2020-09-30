import React, { useState, useRef } from 'react'
import styled, { keyframes } from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Row, Col } from 'antd';
import Avatar from '../../assets/image/img_avatar.png'
import nexty01 from '../../assets/image/nexty01.png'
import BnCReact from '../../assets/image/BnCNew.png'
import Lightbox from 'react-image-lightbox';
import SmartPic1 from '../../assets/image/smartplug1.png'
import SmartPic2 from '../../assets/image/smartplug2.png'
import SmartPic3 from '../../assets/image/smartplug3.png'
import ChatApp1 from '../../assets/image/chatapp1.png'
import ChatApp2 from '../../assets/image/chatapp2.png'
import ChatApp3 from '../../assets/image/chatapp3.png'
import ChatApp4 from '../../assets/image/chatapp4.png'
import IonicUnsplash1 from '../../assets/image/ionicUnsplash1.png'
import IonicUnsplash2 from '../../assets/image/ionicUnsplash2.png'

const settingsSlider = {
	dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      centerPadding: 30,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
};

const settingsSliderPhoto = {
	  dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
      ]
};

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

const Title = styled.span`
    font-weight: bold;
    width: fit-content;
    padding-left: 5px;
    border-left: 5px solid #BFA48D;
`

const ColStyled = styled(Col)`
    cursor: pointer;
    position: relative;
    overflow: hidden;
    padding: 10px;

    & img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        transition: transform .5s ease;
        transform: scale(1);
    }

    :hover {
        & div{
            display: block;
        } 

        & img{
            transform: scale(1.1);
        }
    }

    & div {
        display: none;
        position: absolute;
        width: 100%;
        height: 100%;
        text-align: center;
        color: #fff;
        font-weight: bold;
        background-color: rgba(0, 0, 0, 0.4);
        top: 0;
        left: 0;
        transition: 1s;
        padding-top: 20%;
    }

    @media only screen and (max-width: 600px) {

        img {
            border-radius: 5px;
        }

        border: none;
    }
`

const Wrapper = styled.div`
    padding: 10px 15%;
    overflow: hidden;
    position: relative;

    background-color: #ffffff;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='1' y2='0'%3E%3Cstop offset='0' stop-color='%230FF'/%3E%3Cstop offset='1' stop-color='%23CF6'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%237a93ff'/%3E%3Cstop offset='1' stop-color='%23f2bdff'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23FFF' fill-opacity='0' stroke-miterlimit='10'%3E%3Cg stroke='url(%23a)' stroke-width='2'%3E%3Cpath transform='translate(0 0)' d='M1409 581 1450.35 511 1490 581z'/%3E%3Ccircle stroke-width='4' transform='rotate(0 800 450)' cx='500' cy='100' r='40'/%3E%3Cpath transform='translate(0 0)' d='M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87S400.86 712.38 400.86 735.5z'/%3E%3C/g%3E%3Cg stroke='url(%23b)' stroke-width='4'%3E%3Cpath transform='translate(0 0)' d='M149.8 345.2 118.4 389.8 149.8 434.4 181.2 389.8z'/%3E%3Crect stroke-width='8' transform='rotate(0 1089 759)' x='1039' y='709' width='100' height='100'/%3E%3Cpath transform='rotate(0 1400 132)' d='M1426.8 132.4 1405.7 168.8 1363.7 168.8 1342.7 132.4 1363.7 96 1405.7 96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;

    @media only screen and (max-width: 600px) {
        padding: 10px;
    }
`

const Card = styled.div`
    position: relative;
    box-sizing: border-box;
    margin: 5px auto;
    width: 300px;
    height: 300px;
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    .overlay {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        width: 100%;
        opacity: 0;
        transition: .5s ease;
        background-color: #008CBA;
        text-align: center;
    }

    .text {
        color: white;
        font-size: 20px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
      }

    :hover .overlay {
        opacity: 1;
    }

    & img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    &:hover img.zoom {
        transform: scale(1.2);
        transition: all .2s ease-in-out;
    }

`

const LinkButton = styled.a.attrs({
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

const WrapChatApp = styled.div`

    .description {
        margin: 0 auto;
    }

    .description p{
        margin-bottom: 20px;
        font-size: 18px;
    }
    
    @media only screen and (max-width: 600px) {
        .description {
            margin-top: 20px;
        }

        .description p{
            padding: 15px;
            text-align: center;
        }
    }
`

const CenterVertical = styled.div`
    display: flex;
    justify-content: center;
`

const Projects = props => {
    const refSmartPlug = useRef(null);
    const refChatApp = useRef(null);
    const refBullNCow = useRef(null);
    const refShowPhoto = useRef(null);
    
    const schollToRef = (ref) => {
        ref.current.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "start"
          }) 
    }

    return(
        <Wrapper id="project"  data-aos="fade-up" data-aos-duration="1000">
            <TextWrap>
                <Title>Projects</Title>
            </TextWrap>
                <Row>
                    <Col xs={24} sm={12} md={12} lg={8}>
                        <Card onClick={() => schollToRef(refSmartPlug)}>
                            <img 

                                alt=""
                                src={nexty01} 
                            />
                            <div className="overlay" >
                                <div className="text"> Smart Plug & Web Application</div>
                            </div>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={8} >
                        <Card onClick={() => schollToRef(refBullNCow)}>
                            <img
                                style={{width: '100%'}} 
                                alt="" 
                                src={BnCReact}
                            />
                            <div className="overlay">
                                <div className="text">Bull & Cow React Js</div>
                            </div>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={8} >
                        <Card onClick={() => schollToRef(refChatApp)}>
                            <img 
                                style={{width: '100%'}} 
                                alt=""
                                src={ChatApp3} 
                            />
                            <div className="overlay" >
                                <div className="text">Chat App For Practice</div>
                            </div>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={8} >
                        <Card onClick={() => schollToRef(refShowPhoto)}>
                            <img 
                                style={{width: '100%'}} 
                                alt=""
                                src={IonicUnsplash1}
                            />
                            <div className="overlay">
                                <div className="text"> Show Photos</div>
                            </div>
                        </Card>
                    </Col>
                </Row>

                <div ref={refBullNCow} data-aos="fade-up" data-aos-duration="1000">
                    <TextWrap >
                        <Title>Bulls & Cows</Title>
                    </TextWrap>

                    <WrapChatApp >
                        <Row>
                            <Col xs={24} sm={12} md={12} >
                                <div
                                    style={{
                                        padding: '20px'
                                    }}
                                >
                                    <img style={{width: '100%'}} src={BnCReact} />
                                </div>
                            </Col>
                            <Col xs={24} sm={12} md={12} className="description">
                                <div>
                                    <p>
                                    Guess 4 digits number between 0 to 9 in order to match all number in each position of answer and the digits must be all different 
                                    </p>
                                    <LinkButton  href="https://hanataba-coder.github.io/BullsNCowsReact/">
                                            Try It! on React 
                                    </LinkButton>
                                    <LinkButton href="https://github.com/Hanataba-Coder/guessNumber" >
                                            Swift
                                    </LinkButton>
                                    <LinkButton href="https://github.com/Hanataba-Coder/ionic-bullsNcows" >
                                            Ionic
                                    </LinkButton>
                                </div>
                            </Col>
                        </Row>
                    </WrapChatApp>
                </div>

                <div ref={refSmartPlug} data-aos="fade-up" data-aos-duration="1000">  
                    <TextWrap>
                        <Title>Smart Plug & Web Application</Title>
                    </TextWrap>

                    <Slider {...settingsSlider}>
                        <div>
                            <Card
                                onClick={ () => props.showImage(SmartPic1) }
                            >
                                <img 
                                    className="zoom"
                                    style={{width: '100%'}} 
                                    alt=""
                                    src={SmartPic1}
                                />
                            </Card>
                        </div>
                        <div>
                            <Card
                                onClick={ () => props.showImage(SmartPic2) }  
                            >
                                <img 
                                    className="zoom"
                                    style={{width: '100%'}} 
                                    alt=""
                                    src={SmartPic2}
                                />
                            </Card>
                        </div>
                        <div>
                            <Card
                                onClick={ () => props.showImage(SmartPic3) }
                            >
                                <img 
                                    className="zoom"
                                    style={{width: '100%'}} 
                                    alt=""
                                    src={SmartPic3}
                                />
                            </Card>
                        </div>
                    </Slider>
                </div>

                <div ref={refChatApp} data-aos="fade-up" data-aos-duration="1000">
                    <TextWrap >
                        <Title>Chat App for Practice</Title>
                    </TextWrap>

                    <WrapChatApp >
                        <Row>
                            <Col xs={24} sm={12} md={12} >
                                <div
                                    style={{
                                        textAlign: 'center'
                                    }}
                                >
                                    <img style={{ height: '400px' }} src={ChatApp3} />
                                </div>
                            </Col>
                            <Col xs={24} sm={12} md={12} className="description">
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
                            </Col>
                        </Row>
                    </WrapChatApp>
                </div>

                <div ref={refShowPhoto} data-aos="fade-up" data-aos-duration="1000">
                    <TextWrap >
                        <Title>Show Photos</Title>
                    </TextWrap>

                    <WrapChatApp >
                        <Row>
                            <Col xs={24} sm={12} md={12} >

                                <Slider {...settingsSliderPhoto} style={{textAlign: 'center'}} >
                                    <div>
                                        <CenterVertical>
                                            <img style={{ height: '400px',}} src={IonicUnsplash1} />
                                        </CenterVertical>
                                    </div>
                                    <div>
                                        <CenterVertical>
                                            <img style={{ height: '400px' }} src={IonicUnsplash2} />
                                        </CenterVertical>
                                    </div>
                                </Slider>

                            </Col>
                            <Col xs={24} sm={12} md={12} className="description">
                                <div>
                                    <p>
                                        show photos from unsplash api and see detail of the photo  
                                    </p>
                                    <LinkButton href="https://github.com/Hanataba-Coder/ionic-testRequest">
                                            Ionic
                                    </LinkButton>
                                    <LinkButton href="https://github.com/Hanataba-Coder/photosFromAPI" >
                                            Swift
                                    </LinkButton>
                                    <LinkButton>
                                            Kotlin
                                    </LinkButton>
                                </div>
                            </Col>
                        </Row>
                    </WrapChatApp>
                </div>
        </Wrapper>
    )
}

export default Projects;