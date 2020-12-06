import React from 'react'
import styled from 'styled-components'

const MenuOverlayWrapper = styled.div`
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
    transform: ${ ({isCollapse}) => isCollapse ? 'translateY(0%)' : 'translateY(-100%)'};
    transition: all 0.5s ease-in-out;


    a{
        color: #fff;
    }

`

const MenuOverlay = ({setIsCollapse, isCollapse}) => {
    return (
        <MenuOverlayWrapper isCollapse={isCollapse} >
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
        </MenuOverlayWrapper>
    )
}

export default MenuOverlay
