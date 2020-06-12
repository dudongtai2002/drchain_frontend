import React from 'react'
import {Row, Col} from 'antd'

import Header from './components/Header'
import NavLeft from './components/NavLeft'


export default class Admin extends React.Component {

    render() {
        return (
            <div>
                <Row className="header">
                    <Header />
                </Row>
                <Row className="container">
                    <Col span="5" className="nav-left">
                        <NavLeft />
                    </Col>
                    <Col span="19" className="main">
                        <Row>
                            {this.props.children}
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}