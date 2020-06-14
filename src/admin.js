import React from 'react'
import {Row, Col, Layout} from 'antd'

import Header from './components/Header'
import NavLeft from './components/NavLeft'
const {Sider, Content } = Layout;


export default class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            height: 0,
            windowDimension: ""
        };
    }
    render() {
        return (
            <div>
                <Layout>
                    <Header>
                        <Row>
                            <Header />
                        </Row>
                    </Header>
                    <Layout>
                        <Sider
                           width="300px"
                        >
                            <NavLeft/>
                        </Sider>
                        <Content>
                            <Col span="24" className="main">
                                <Row>
                                {this.props.children}
                                </Row>
                            </Col>
                        </Content>
                    </Layout>
                </Layout>
                {/* <Row className="header">
                    <Header />
                </Row>
                <Row className="container">
                    <Col span="4" className="nav-left">
                        <NavLeft />
                    </Col>
                    <Col span="20" className="main">
                        <Row>
                            {this.props.children}
                        </Row>
                    </Col>
                </Row> */}
            </div>
        );
    }
}