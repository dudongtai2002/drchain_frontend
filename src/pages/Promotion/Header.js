import React from 'react'
import {Col, Button, Menu, Avatar, Icon} from 'antd'
import './Header.less'
export default class Header extends React.Component {


    openDashBoard = ()=>{
        window.open('/#/dashBoard');
    }

    render() {
        return (
            <Col>
                <Menu className = "promotion-header-menu" theme="light" mode="horizontal">
                    <Menu.Item>
                        <img className="promotion-header-logo" src="/assets/drchain_logo.svg" alt="Logo"/>
                        <img className="promotion-header-logo-word" src='/assets/Dr.chainlogo.svg' alt="Logo" />
                    </Menu.Item>
                    <Menu.Item className="promotion-header-item">Features</Menu.Item>
                    <Menu.Item className="promotion-header-item">Explore</Menu.Item>
                    <Menu.Item className="promotion-header-item">Subscriptions</Menu.Item>
                    <Menu.Item className="promotion-header-item">Partners</Menu.Item>
                    <Menu.Item className="promotion-header-item">Support</Menu.Item>

                    <Menu.Item className="promotion-header-right">
                        <Avatar  src="https://picsum.photos/200" />
                        <span className="header-user-icon" >Lawrence Liu</span>
                        <Icon type="down" style={{verticalAlign:'middle'}} />
                    </Menu.Item>
                    <Menu.Item className="promotion-header-right">
                        <Button type="primary" shape="round" onClick={this.openDashBoard}>My DashBoard</Button>
                    </Menu.Item>
                </Menu>
            </Col>
        );
    }
}
