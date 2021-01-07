import React from 'react';
import {
  Wrapper,
  Container,
  WrapperContent,
  LinkButton,
  Detail,
  TextWrap,
  Title,
  DetailP,
  LinkButtonWrapper,
  Link,
} from './styled';
import StadiaClone1 from '../../../../assets/image/stadiaClone1.png';

const StadiaClone = ({ refApp }) => {
  return (
    <Wrapper ref={refApp} data-aos="fade-up" data-aos-duration="1000">
      <Container>
        <TextWrap>
          <Title>Stadia Clone Website</Title>
        </TextWrap>
        <WrapperContent>
          <img style={{ width: '100%' }} src={StadiaClone1} />
          <Detail>
            <div>
              <DetailP>
                <b>Stadia Website Clone</b> <br />
              </DetailP>
              <LinkButtonWrapper>
                <LinkButton href="https://github.com/Hanataba-Coder/StadiaClone">
                  React GitHub
                </LinkButton>
                <LinkButton href="https://stadia.google.com/" target="_blank">
                  Reference
                </LinkButton>
              </LinkButtonWrapper>
            </div>
          </Detail>
        </WrapperContent>
      </Container>
    </Wrapper>
  );
};

export default StadiaClone;
