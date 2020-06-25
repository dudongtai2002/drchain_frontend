import React from 'react'
import {Row, Col, Layout} from 'antd'

import Header from './components/Header'
import NavLeft from './components/NavLeft'
const {Sider, Content } = Layout;


export default class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 280,
        };
    }
    render() {
        return (
            <div>
                <Row>
                    <Col span="24">
                        <Header />
                    </Col>
                </Row>
                <Row>
                    <Col xs={8} sm={7} md={6} lg={5} xl={4}>
                        <NavLeft />
                    </Col>
                    <Col xs={16} sm={17} md={18} lg={19} xl={20}>
                        {this.props.children}
                    </Col>
                </Row>
                {/* <Layout>
                    <Header>
                        <Row>
                            <Header/>
                        </Row>
                    </Header>
                    <Layout>
                        <Sider
                            width={this.state.width}
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
                                {this.props.children}
                                </Row>
                            </Col>
                        </Content>
                    </Layout>
                </Layout> */}
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