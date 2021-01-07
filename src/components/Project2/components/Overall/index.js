import React from 'react';
import nexty01 from '../../../../assets/image/nexty01.png';
import BnCReact from '../../../../assets/image/BnCNew.png';
import ChatApp3 from '../../../../assets/image/chatapp3.png';
import StadiaClone1 from '../../../../assets/image/stadiaClone1.png';
import IonicUnsplash1 from '../../../../assets/image/ionicUnsplash1.png';
import {
  Card,
  Wrapper,
  Container,
  WrapperContent,
  TextWrap,
  Title,
} from './styled';

const Overall = ({
  schollToRef,
  refSmartPlug,
  refShowPhoto,
  refChatApp,
  refBullNCow,
  refStadia,
}) => {
  return (
    <Wrapper>
      <Container>
        <TextWrap>
          <Title>Projects</Title>
        </TextWrap>
        <WrapperContent>
          <Card onClick={() => schollToRef(refSmartPlug)}>
            <img alt="Smart Plug" src={nexty01} />
            <div className="overlay">
              <div className="text"> Smart Plug & Web Application</div>
            </div>
          </Card>
          <Card onClick={() => schollToRef(refBullNCow)}>
            <img style={{ width: '100%' }} alt="Bull & Cow" src={BnCReact} />
            <div className="overlay">
              <div className="text">Bull & Cow React Js</div>
            </div>
          </Card>
          <Card onClick={() => schollToRef(refStadia)}>
            <img
              style={{ width: '100%' }}
              alt="Stadia Clone"
              src={StadiaClone1}
            />
            <div className="overlay">
              <div className="text">Stadia Clone Website</div>
            </div>
          </Card>
          <Card onClick={() => schollToRef(refChatApp)}>
            <img style={{ width: '100%' }} alt="Chat App" src={ChatApp3} />
            <div className="overlay">
              <div className="text">Chat App For Practice</div>
            </div>
          </Card>
          <Card onClick={() => schollToRef(refShowPhoto)}>
            <img
              style={{ width: '100%' }}
              alt="Show Photos"
              src={IonicUnsplash1}
            />
            <div className="overlay">
              <div className="text"> Show Photos</div>
            </div>
          </Card>
        </WrapperContent>
      </Container>
    </Wrapper>
  );
};

export default Overall;
