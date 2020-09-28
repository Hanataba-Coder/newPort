import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components';
import Image from '../../assets/image/phoom-removebg-preview.png';
import { Row, Col, AutoComplete } from 'antd';
import profilePic from '../../assets/image/phoom.jpeg'

const animation = keyframes`
    0% {
        margin-left: 0%;
    }
    40% {
        margin-left: 25%;
    }
    100% {
        margin-left: 100%;
    }
`

const animation2 = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`

const FixedBackground = styled.div`
    background: linear-gradient(90deg,#BFA48D 50%,#fff 50%);
    height: 100vh; 
    width: 100%;
    position: relative;
    overflow: hidden;

    img{
        opacity: 0;
        animation: ${animation2} 1s linear 3s forwards;
    }

    &:before{
        margin-left: 100%;
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top:0;
        left:0;
        background: #fff;
        animation: ${animation} 1s linear;
    }

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
            animation: text_reveal 1s ease 1.2s forwards;
        }

        & h1:nth-child(2){
            animation: text_reveal 1s ease 2.2s forwards;
        }

        & h1:nth-child(3){
            animation: text_reveal 1s ease 3.2s forwards;
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
            animation: text_reveal_box 1s ease 1s;
        }

        & h1:nth-child(2) span{
            animation: text_reveal_box 1s ease 2s ;
        }

        & h1:nth-child(3) span{
            animation: text_reveal_box 1s ease 3s;
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

const Home1 = () => {
    return (
        <FixedBackground > 
            <div className="wrapper">
                <Row>
                    <Col xs={24} sm={24} md={12} >
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <div className="wrapText">
                                <h1>Hello,<span></span></h1>
                                <h1>I'm Phoom<span></span></h1>
                            </div>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={12}>
                        <div  
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <div className="wrapImage">
                                <img src={profilePic} style={{height: '100%'}} />
                            </div>
                        </div>
                    </Col>
                </Row>

            </div>
        </FixedBackground>
    )
}

export default Home1;