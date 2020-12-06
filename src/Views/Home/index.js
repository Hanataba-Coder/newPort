import React, { useState } from 'react'
import Aux from '../../components/Aux/Aux'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lightbox from 'react-image-lightbox';

//components
import AboutMe from '../../components/Aboutme';
import Projects from '../../components/Projects'
import Home2 from '../../components/Home2'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import MenuOverlay from '../../components/MenuOverlay'
import Projects2 from '../../components/Project2'

AOS.init({
	delay: 100
});

const Home = () => {

    const [isCollapse, setIsCollapse] = useState(false)
    const [isOpenLightBox, setIsOpenLightBox] = useState(false)
    const [imageLightBox, setImageLightBox] = useState()

    const handlerShowImage = (image) => {
        setImageLightBox(image);
        setIsOpenLightBox(true)
    }

    return(
        <Aux>
            <Navbar isCollapse={isCollapse} setIsCollapse={(e) => setIsCollapse(e)}/>
            <Home2/>
            <AboutMe/>            
            <Projects2 showImage={handlerShowImage}/>
            <Footer/>

            {isOpenLightBox &&
                <Lightbox
                    mainSrc={imageLightBox}
                    onCloseRequest={() => setIsOpenLightBox(false) }
                />
            }

            <MenuOverlay isCollapse={isCollapse} setIsCollapse={(e) => setIsCollapse(e)} />
        </Aux>
    )
}

export default Home;