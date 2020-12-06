import React from 'react'
import styled from 'styled-components'

const NavbarWrapper = styled.header`
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

            &.active {
                color: #BFA48D;
                    
                :after{
                    width: 100%;
                }
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
            flex-direction: column;
            display: none;

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

const Navbar = ({isCollapse,setIsCollapse}) => {
    return (
        <NavbarWrapper collapse={isCollapse}>
                <span className="title"></span>
                <ul className="menu" >
                    <li>
                        <a href="#" className="active" >Home</a>
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
            </NavbarWrapper>
    )
}

export default Navbar
