import React from 'react'
import Aux from '../../components/Aux/Aux'
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { Row, Col } from 'antd';
import { Input, Select } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    padding-top: 100px;

    & a{
        text-decoration: none;
        color: unset;
    }

`

const Card = styled.div`
    padding: 20px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    border-radius: 10px;
    width: auto;
    text-align: center;
    font-weight: bold;
    margin: 10px 0px;
`

const HeaderMenu = styled.span`
    font-size: 22px;
    font-weight: bold;
    margin: 20px 0;
`

const Menu = (props) => {
    return (
        <Container>
            <Row>
                <Col span={12}>
                    <HeaderMenu>
                        Bulls and Cows
                    </HeaderMenu>
                </Col>
                <Col span={12} >
                    <Link
                        to='/game'
                    >
                        <Card>
                            Start
                        </Card>
                    </Link>
                    <Link
                    to='/howTo'
                >
                        <Card>
                            How To
                        </Card>
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}

export default Menu;