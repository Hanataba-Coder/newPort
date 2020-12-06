import React from 'react'
import { Wrapper, Container, WrapperContent, LinkButton, Detail, TextWrap, Title, DetailP, CenterVertical } from './styled'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import IonicUnsplash1 from '../../../../assets/image/ionicUnsplash1.png'
import IonicUnsplash2 from '../../../../assets/image/ionicUnsplash2.png'

const settingsSliderPhoto = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      
    ]
};

const ShowPhoto = ({refApp}) => {
    return (
        <Wrapper ref={refApp} data-aos="fade-up" data-aos-duration="1000">
            <Container>
                <TextWrap >
                    <Title>Show Photos</Title>
                </TextWrap>
                <Slider {...settingsSliderPhoto} className="slideOutside" >
                    <div>
                        <CenterVertical>
                            <img style={{ height: '400px'}} src={IonicUnsplash1} />
                        </CenterVertical>
                    </div>
                    <div>
                        <CenterVertical>
                            <img style={{ height: '400px' }} src={IonicUnsplash2} />
                        </CenterVertical>
                    </div>
                </Slider>
                <WrapperContent>
                    <Slider {...settingsSliderPhoto}  className="slideInside" >
                        <div>
                            <CenterVertical>
                                <img style={{ height: '400px'}} src={IonicUnsplash1} />
                            </CenterVertical>
                        </div>
                        <div>
                            <CenterVertical>
                                <img style={{ height: '400px' }} src={IonicUnsplash2} />
                            </CenterVertical>
                        </div>
                    </Slider>
                    <Detail>
                        <div>
                            <DetailP>
                                show photos from unsplash api and see detail of the photo  
                            </DetailP>
                            <LinkButton href="https://github.com/Hanataba-Coder/ionic-testRequest">
                                    Ionic
                            </LinkButton>
                            <LinkButton href="https://github.com/Hanataba-Coder/photosFromAPI" >
                                    Swift
                            </LinkButton>
                        </div>
                    </Detail>
                </WrapperContent>
            </Container>
        </Wrapper>
    )
}

export default ShowPhoto
