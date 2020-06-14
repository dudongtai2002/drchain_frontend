import React from 'react'
import {Progress, Icon, Menu, Divider} from 'antd'
import {NavLink} from "react-router-dom"
import './index.less'

export default class NavLeft extends React.Component {

    render() {
        const userInfo = {
            name: "Lawrence Liu",
            role: "Owner",
            status: 33
        }
        return (
            <div className="nav-left">
                    <div className="title">Hi, {userInfo.name}</div>
                    <div className="role">Role: {userInfo.role}</div>
                    <div className="loading-title">Set Up Your Profile</div>
                    <div className="loading">
                        <Progress percent={userInfo.status}
                            showInfo={false }
                        >
                        </Progress>
                    </div>
                    <div className="loading-status">
                        2/6 completed
                    </div>
                    <Menu className="menu">
                        <Menu.Item className="menu-firstItem" title="Medical Record" key = "/record">
                            <NavLink className="link-style" to="/record">
                                <Icon className="menuIcon" type="form" style={{fontSize: '18px',color:'white'}} />
                                <span class="menu-content">Medical Record</span>
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item className="menu-divider" title="Wellness Data" key="/wellness">
                            <NavLink className="link-style" to="/wellness">
                                <Icon className="menuIcon" type="fund" style={{fontSize: '18px',color:'white'}}/>
                                <span class="menu-content">Wellness Data</span>
                            </NavLink>
                        </Menu.Item>
                        <Divider className="menu-divider"/>
                        <Menu.Item title="Account Setting" key="/account">
                            <NavLink className="link-style" to="/account">
                                <Icon className="menuIcon" type="user" style={{fontSize: '18px',color:'white'}} />
                                <span class="menu-content">Profile Management</span>
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item title="Finance" key="/finance">
                            <NavLink className="link-style" to="/finance">
                                <Icon className="menuIcon" type="dollar" style={{fontSize: '20px',color:'white'}} />
                                <span class="menu-content">Finance</span>
                                </NavLink>
                        </Menu.Item>
                        <Menu.Item title="To be decided" key="/blank1">
                            <NavLink className="link-style" to="/blank1">
                                <Icon className="menuIcon" type="setting" style={{fontSize: '20px',color:'white'}} />
                                <span class="menu-content">Settings</span>
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item title="To be decided" key="/blank2">
                            <NavLink className="link-style" to="/blank2">
                                <Icon className="menuIcon" type="check-square" style={{fontSize: '20px',color:'white'}} />
                                <span class="menu-content">To Be Decided</span>
                            </NavLink>
                        </Menu.Item>
                    </Menu>
            </div>
        );
    }
}