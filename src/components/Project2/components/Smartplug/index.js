import React from 'react'
import { Wrapper, Container,TextWrap, Title, Card } from './styled'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SmartPic1 from '../../../../assets/image/smartplug1.png'
import SmartPic2 from '../../../../assets/image/smartplug2.png'
import SmartPic3 from '../../../../assets/image/smartplug3.png'

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
        },
        {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
      ]
};

const SmartPlug = (props) => {
    return (
        <Wrapper ref={props.refApp} data-aos="fade-up" data-aos-duration="1000">
            <Container>
                <TextWrap >
                    <Title>Smart Plug & Web Application</Title>
                </TextWrap>
                <Slider {...settingsSlider} className="slider" >
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
            </Container>
        </Wrapper>
    )
}

export default SmartPlug
