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
                                <img className="menu-logo-icon" src="/assets/DRCHAIN_LOGO.svg" alt="Logo"></img>
                                <img className="menu-logo" src='/assets/Dr.chainlogo.svg' alt="Logo" />
                            </Menu.Item>
                            <Menu.Item className="menu-item">DashBoard</Menu.Item>
                            <Menu.Item className="menu-item">Explore</Menu.Item>
                            <Menu.Item className="menu-item">Help</Menu.Item>
                            <Menu.Item>
                            <Search
                                placeholder="Search for everything you need..."
                                className="search-input"
                            />
                            </Menu.Item>
                            <Menu.Item className="header-right">
                            <Avatar style={{size: 20}} src="https://picsum.photos/200" />
                            <span className="header-user-icon" >Lawrence Liu</span>
                            <Icon type="down" style={{verticalAlign:'middle'}} />
                            </Menu.Item>
                            <Menu.Item className="header-right">
                                <img className="header-icon" src="/assets/icon/Horn.svg" alt="horn"></img>
                            </Menu.Item>
                            <Menu.Item className="header-right">
                                <img className="header-icon" src="/assets/icon/Bell.svg" alt="bell"></img>
                            </Menu.Item>
                        </Menu>
                    </Col>
                </Row>
        );
    }
}