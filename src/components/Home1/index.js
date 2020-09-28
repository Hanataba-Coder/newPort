import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components';
import Image from '../../assets/image/phoom-removebg-preview.png'

const FixedBackgroundSecond = styled.div`
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    // background-image: url('https://www.tni.ac.th/home/storage/image/catalog/news/2019/01-2019/IMG_7033.jpg');
    background: black;
    width: 100%;
    height: 100%;
`

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`

const Main = styled.div`
    display: flex;

    .image {
        position: absolute;
        bottom: 0;
        right: 0;

        img {
            width: 500px;
        }
    }
`

const Home1 = () => {
    return (
        <Wrapper>
            <FixedBackgroundSecond/>
            <Main>
                <div className="content" >
                
                </div>
                <div className="image" >
                    <img src={Image} alt="" />
                </div>
            </Main>
        </Wrapper>
    )
}

export default Home1;