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
                    <Col xs={9} sm={9} md={6} lg={5} xl={4}>
                        <NavLeft />
                    </Col>
                    <Col xs={15} sm={15} md={18} lg={19} xl={20}>
                        {this.props.children}
                    </Col>
                </Row>
            </div>
        );
    }
}