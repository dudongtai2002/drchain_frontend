import React from 'react'
import {Row,Col, Button, Menu, Avatar, Icon} from 'antd'
import './Header.less'
export default class Header extends React.Component {
    
    
    constructor(props) {
        super(props);
        this.state = {
          width: window.innerWidth,
        };
    }

    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({width: window.innerWidth});
    }

    openDashBoard = ()=>{
        window.open('/#/user/dashboard');
    }

    render() {
        const {width} = this.state;
        const isMobile = width <= 1190;
        if (isMobile) {
            return (
                <Row>
                    <Menu className = "promotion-header-menu" theme="light" mode='horizontal'>
                            <Menu.Item className="promotion-header-item">
                                <img className="promotion-header-logo" src="/assets/DRCHAIN_LOGO.svg" alt="Logo"/>
                                <img className="promotion-header-logo-word" src="/assets/DRCHAIN.svg" alt="text-Logo" />
                            </Menu.Item>
                            <Menu.Item className="promotion-header-item">Features</Menu.Item>
                            <Menu.Item className="promotion-header-item">Explore</Menu.Item>
                            <Menu.Item className="promotion-header-item">Subscriptions</Menu.Item>
                            <Menu.Item className="promotion-header-item">Partners</Menu.Item>
                            <Menu.Item className="promotion-header-item">Support</Menu.Item>
                            <Menu.SubMenu style={{float: "right"}} title={
                                    <img src="/assets/icon/promotion/expand.svg" style={{width: '30px', paddingTop: '15px'}}/>
                            }>
                                <Menu.Item className="promotion-header-item">
                                    <Avatar  src="https://picsum.photos/200" />
                                    <span className="header-user-icon" >Lawrence Liu</span>
                                    <Icon type="down" style={{verticalAlign:'middle'}} />
                                </Menu.Item>
                                <Menu.Item className="promotion-header-item">
                                    <Button type="primary" shape="round" onClick={this.openDashBoard}>My DashBoard</Button>
                                </Menu.Item>
                            </Menu.SubMenu>
                    </Menu>
                </Row>
            );
        }else {
            return(
                <Row>
                    <Menu className = "promotion-header-menu" theme="light" mode='horizontal'>
                            <Menu.Item className="promotion-header-item">
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
                </Row>
            );
        }
    }
}
