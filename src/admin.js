import React from 'react'
import {Row, Col, Layout} from 'antd'

import Header from './components/Header'
import NavLeft from './components/NavLeft'

import './admin.less'
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
            <div style={{overflow: 'hidden'}}>
                <Layout>
                    <Header>
                        <Row>
                            <Header />
                        </Row>
                    </Header>
                    <Layout>
                        <Sider
                            breakpoint="lg"
                            width="230px"
                            collapsedWidth="0"
                            onBreakpoint={broken => {
                            console.log(broken);
                            }}
                            onCollapse={(collapsed, type) => {
                            console.log(collapsed, type);
                            }}
                           
                        >
                            <NavLeft/>
                        </Sider>
                        <Content>
                            <Col span="24" className="main">
                                <Row>
                                    <Col span={1} />
                                    <Col span={22}>
                                        {this.props.children}
                                    </Col>
                                    <Col span={1}/>
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