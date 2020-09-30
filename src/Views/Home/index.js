import React, { useState } from 'react'
import Aux from '../../components/Aux/Aux'
import styled, { keyframes } from 'styled-components';
import { Row, Col, AutoComplete } from 'antd';
import AOS from 'aos';
import 'aos/dist/aos.css';
import profilePic from '../../assets/image/phoom.jpeg'
import nexty01 from '../../assets/image/nexty01.png'
import Lightbox from 'react-image-lightbox';

//components
import AboutMe from '../../components/Aboutme';
import Projects from '../../components/Projects'
import Home1 from '../../components/Home1'
import Home2 from '../../components/Home2'

const Navbar = styled.header`
    z-index: 999;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: baseline;
    padding: 10px;
    font-size: 18px;
    color: #000;
    position: absolute;
    top:0;
    left:0;

    & .title {
        font-weight: bold;
        font-size: 24px;
    }

    & .menu{
        display: flex;
        list-style-type: none;

        & a{
            padding: 10px;
            color: #000;
            position: relative;

            :after{
                position: absolute;
                content: '';
                left: 0%;
                bottom: 0;
                width: 0%;
                height: 5px;
                background: #BFA48D;
    
                /* optional animation */
                -o-transition:.5s;
                -ms-transition:.5s;
                -moz-transition:.5s;
                -webkit-transition:.5s;
                transition:.5s;
            }
        }

        & a:hover {
            color: #BFA48D;
            
            :after{
                width: 100%;
            }
        }

    }

    & .social{
        display: none;
        & a{
            padding: 10px;
            color: #A0A0A0;

            : hover {
                color: #fff;
            }
        }
    }

    button.bar {
        display: none;
        position: absolute;
        top: 5px;
        right: 5px;
        background-color: transparent;
        border: unset;  
        color: #fff;
        font-size:22px;
    }

    @media only screen and (max-width: 600px) {
        flex-direction: column;

        .menu {
            width: 100%;
            padding: unset;
            display: ${ ({collapse}) => collapse ? 'block' : 'none'};
            flex-direction: column;

            & li{
                &a{
                    color: #BFA48D;
                }
            }

        }

        button.bar {
            display: initial;
        }
    }

`
const SubText = styled.div`
    font-size: 16px
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
        color: #000;
    }
`

const MenuOverlay = styled.div`
    z-index: 1000;
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.8);
    font-size: 30px;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a{
        color: #fff;
    }

`

const FixedBackground = styled.div`
    background: linear-gradient(90deg,#BFA48D 50%,#fff 50%);
    height: 100vh; 
    width: 100%;

    .wrapper{
        height: 80%;
        padding-top: 15%;
        position: relative;
    }

    .wrapImage {
        height: 500px;
    }

    & .wrapText{
        margin-top: 100px;

        & h1{
            position: relative;
            width: fit-content;
            color: transparent;
            font-weight: bold;
        }

        & h1:nth-child(1){
            animation: text_reveal 1s ease .2s forwards;
        }

        & h1:nth-child(2){
            animation: text_reveal 1s ease 1.2s forwards;
        }

        & h1:nth-child(3){
            animation: text_reveal 1s ease 2.2s forwards;
        }

        & h1 span{
            position: absolute;
            top: 0;
            left: 0;
            width: 0;
            height: 100%;
            background-color: crimson;
        }

        & h1:nth-child(1) span{
            animation: text_reveal_box 1s ease;
        }

        & h1:nth-child(2) span{
            animation: text_reveal_box 1s ease 1s ;
        }

        & h1:nth-child(3) span{
            animation: text_reveal_box 1s ease 2s;
        }
    }

    @media only screen and (max-width: 600px) {
        background:#BFA48D;
        height: auto; 

        .wrapImage {
            height: 400px;
        }

        .wrapper{
            padding-top: 0;
            padding-bottom: 50px;
        }
    }

    @keyframes text_reveal_box{
        50%{
            width: 100%;
            left: 0;
        }

        100%{
            width: 0%;
            left: 100%;
        }
    }

    @keyframes text_reveal{
        100%{
            color: #fff
        }
    }
`

const FixedBackgroundSecond = styled.div`
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    background-image: url('https://www.tni.ac.th/home/storage/image/catalog/news/2019/01-2019/IMG_7033.jpg');
    height: 70%; 
    width: 100%;
    position: relative;
`

const FixedBackgroundThird = styled.div`
    background: linear-gradient(135deg,#038F8F 50%,rgba(0,0,0,0.1) 50%);
    height: 100%; 
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 10px;
    position: relative;

    .description{
        padding-left: 100px;
        margin-top: 40px;
        color: #fff;
    }

    .profileWrap {
        display: flex; 
        justify-content: center; 
        align-items: center;
    }

    @media only screen and (max-width: 600px) {
        background: linear-gradient(180deg,#038F8F 50%,rgba(0,0,0,0.1) 50%);
        flex-direction: row;

        .description{
            padding: 0px 10px;
            font-size: 12px;
        }

        .profileWrap {
            height: 100%;
        }
    }
`

const FixedBackgroundSmartPlug = styled.div`
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    background-image: url('${nexty01}');
    height: 70%; 
    width: 100%;
    position: relative;

    :before{
        content: "";
        position: absolute;
        background: rgba(0,0,0, 0.8);
        top:0;
        left:0;
        width:100%;
        height: 100%;
    }
`

const VideoFrame = styled.div`
    position: relative;
    padding-bottom:45.05%;
    height:0;

    & iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
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

const Title = styled.span`
    font-weight: bold;
    width: fit-content;
    padding-left: 5px;
    border-left: 5px solid #BFA48D;
`

const Footer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #848484;
    background-color: #fff;
    text-align: center;
    flex-direction: column;
    border-top: .5px solid #a1a1a1;
    margin-top: 10px;

    & .contact{
        display: flex;
        align-items: center;
    }

    & .contact-detail{
        padding: 30px;
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

const cardPorts = [
    {
        title: 'Bull & Cows',
        img: '',
        link: ''
    },
    {
        title: 'Unsplash',
        img: '',
        link: ''
    }
]

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

const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const ImageWrapper = styled.div`
    width: calc(25% - 100px)
    margin-bottom: 20px;
`

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    flex-wrap: wrap;
    padding: 30px 15rem;

    @media only screen and (max-width: 600px) {

        ${ImageWrapper}{
            width: 80%
            padding: 30px;
        }
    }
`

const CardWrap = styled.div`
    border: 1px solid red;
    padding: 50px;
`

AOS.init({
	delay: 100
});

const Home = props => {

    const [isCollapse, setIsCollapse] = useState(false)
    const [isOpenLightBox, setIsOpenLightBox] = useState(false)
    const [imageLightBox, setImageLightBox] = useState()

    const handlerShowImage = (image) => {
        setImageLightBox(image);
        setIsOpenLightBox(true)
    }

    return(
        <Aux>
            {
                // Nav
            }
            <Navbar collapse={isCollapse}>
                <span className="title"></span>
                <ul className="menu" >
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#project">Projects</a>
                    </li>
                    <li>
                        <a href="#aboutme">About Me</a>
                    </li>
                </ul>
                <div className="social" >
                    <a href="https://www.facebook.com/phoom.yodsapat/about" target="_blank">
                        <i class="fab fa-facebook-square"></i>
                    </a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-twitter-square"></i></a>
                </div>
                <button className="bar" onClick={() => setIsCollapse(prevState => !prevState)}>
                    <i class="fas fa-bars"></i>
                </button>
            </Navbar>
            {isCollapse &&
                <MenuOverlay>
                    <div 
                        style={{position: 'absolute', top: 30, right:30}}
                    >
                        <i onClick={() => setIsCollapse(false)} style={{float: 'right'}} class="fas fa-times"></i>
                    </div>
                    <div>
                        <div onClick={() => setIsCollapse(false)}><a href="#home">HOME</a></div>
                        <div onClick={() => setIsCollapse(false)}><a href="#project">PROJECTS</a></div>
                        <div onClick={() => setIsCollapse(false)}><a href="#aboutme">ABOUT ME</a></div>
                    </div>
                </MenuOverlay>
            }
            {
                //Home
            }
            <Home2/>
            
            {
                //About Me
            }

            <AboutMe/>

            {
                //Project
            }
            
            <Projects showImage={handlerShowImage}/>
                
            <FixedBackgroundSecond style={{display: 'none'}} > 
                <div  
                    style={{
                        color: '#fff',
                        alignSelf: 'center',
                        fontSize: '30px',
                        top: '0',
                        position: 'absolute',
                        left: '0',
                        backgroundColor: 'rgba(0, 0, 0, 0.4)',
                        padding: '30px',
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    Graduated from <br/>
                    Thai-Nichi institute of technology
                </div>
            </FixedBackgroundSecond>

            {
                //Footer
            }
            <Footer>
                    <div className="contact">
                        <div className="contact-detail">
                            <Title style={{fontSize: '22px'}} >Contact</Title>
                            <SubText>Tel: 0991184910</SubText>
                            <SubText>Email: pa.yodsapat@gmail.com</SubText>
                        </div>
                        <Ul>
                            <li>
                                <a href="https://www.facebook.com/phoom.yodsapat/" target="_blank" ><i class="fab fa-facebook-square"></i></a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/yodspat/" target="_blank" ><i class="fab fa-instagram"></i></a>
                            </li>
                        </Ul>
                    </div>
                    <div style={{marginTop: '5px', marginBottom: '20px'}} >
                        Design by Yodsapat
                    </div>
            </Footer>

            {isOpenLightBox &&
                <Lightbox
                    mainSrc={imageLightBox}
                    onCloseRequest={() => setIsOpenLightBox(false) }
                />
            }
        </Aux>
    )
}

export default Home;

// <svg 
//             style={{
//                 display: 'none',
//                 position: 'absolute',
//                 width: '100%',
//                 opacity: 1,
//                 bottom: 0,
//                 zIndex: 2,
//             }}
//         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
//             <path fill="#fff" fill-opacity="1" d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
//         </svg>

// <VideoFrame
//             style={{display: 'none'}}
//         >
//             <iframe width="100%" height="100%" src="https://www.youtube.com/embed/brD-KX9Mn7s?start=101&amp;controls=0&amp;start=1&amp;autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//             <div  
//                 style={{
//                     color: '#fff',
//                     alignSelf: 'center',
//                     fontSize: '50px',
//                     top: '40%',
//                     position: 'absolute',
//                     left: '45%',
//                     backgroundColor: 'rgba(0, 0, 0, 0.4)',
//                     padding: '10px'
//                 }}
//             >
//                 JAPAN
//             </div>
//         </VideoFrame>
//         <TextWrap style={{display: 'none'}}>
//             <Title>Lorem</Title>
//             <Ptext>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//             </Ptext>
//         </TextWrap>

// <div style={{width: '300px', height: '300px'}} >
//             <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
//                 <defs>
//                     <clipPath id="user-space" clipPathUnits="userSpaceOnUse">
//                         <path fill="#FF0066" d="M45.3,-58.3C56.4,-44.6,61.6,-28.2,63,-12.3C64.4,3.6,61.9,18.9,52.1,24.7C42.4,30.5,25.4,26.7,13.2,27.3C1,27.8,-6.3,32.7,-21.3,36.7C-36.3,40.7,-58.8,43.9,-69.7,35.3C-80.6,26.7,-79.8,6.4,-68.6,-4.4C-57.5,-15.1,-36.1,-16.4,-23,-29.7C-9.8,-42.9,-4.9,-68.3,6.1,-75.6C17.1,-82.8,34.1,-71.9,45.3,-58.3Z" transform="translate(100 100)" />
//                     </clipPath>
//                 </defs>

//                 <image width="100%" height="100%" preserveAspectRatio="xMinYMin slice" xlinkHref={profilePic} clip-path="url(#user-space)"/>
//             </svg>
//             </div>