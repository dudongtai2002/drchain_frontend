import React from 'react'
import {Row, Col, Menu, Input, Icon, Avatar} from 'antd'
import './index.less'

const {Search} = Input
export default class Header extends React.Component {
    render() {
        return (
                <Row className="header">
                    <Col>
                        <Menu className = "menu" theme="light" mode="horizontal">
                            <Menu.Item>
                            <img src='/assets/Dr.chainlogo.svg' alt="Logo" />
                            </Menu.Item>
                            <Menu.Item className="menu-item">DashBoard</Menu.Item>
                            <Menu.Item className="menu-item">Explore</Menu.Item>
                            <Menu.Item className="menu-item">Help</Menu.Item>

                            <Search className="menu-item"
                                placeholder="Search for everything you need..."
                                style={{ width: 300}} />
                            <Menu.Item className="header-right">
                            <Avatar style={{size: 20}} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                <span>  Lawrence Liu  </span>
                                <Icon type="down" style={{verticalAlign:'middle'}} />
                            </Menu.Item>
                            <Menu.Item className="header-right" style={{padding:'0 2px'}}><Icon type="sound" style={{ fontSize: '18px', verticalAlign:'middle'}} /></Menu.Item>
                            <Menu.Item className="header-right" style={{padding:'0 2px'}}><Icon type="bell" style={{ fontSize: '18px', verticalAlign:'middle'}} /></Menu.Item>
                        </Menu>
                    </Col>
                </Row>
        );
    }
}