import React from 'react'
import {Row, Col, Menu, Input, Icon} from 'antd'
import './index.less'

const {Search} = Input
export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <Row>
                    <Col span="24">
                        <Menu className = "menu" theme="light" mode="horizontal">
                            <Menu.Item><img src="/assets/logo192.png"></img></Menu.Item>
                            <Menu.Item>DashBoard</Menu.Item>
                            <Menu.Item>Explore</Menu.Item>
                            <Menu.Item>Help</Menu.Item>

                            <Search
                                placeholder="Search for everything you need..."
                                onSearch={value => console.log(value)}
                                style={{ width: 300, padding: '0 0 0 15'}} />
                            <Menu.Item className="header-right">
                                <img src="/assets/logo192.png"></img>
                                <span>  Lawrence Liu  </span>
                                <Icon type="down" style={{verticalAlign:'middle'}} />
                            </Menu.Item>
                            <Menu.Item className="header-right" style={{padding:'0 2px'}}><Icon type="sound" style={{ fontSize: '18px', verticalAlign:'middle'}} /></Menu.Item>
                            <Menu.Item className="header-right" style={{padding:'0 2px'}}><Icon type="bell" style={{ fontSize: '18px', verticalAlign:'middle'}} /></Menu.Item>

                        </Menu>
                    </Col>
                </Row>
            </div>
            
        );
    }
}