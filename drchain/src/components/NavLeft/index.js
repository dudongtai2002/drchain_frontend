import React from 'react'
import {Progress, Icon, Menu} from 'antd'
import {NavLink} from "react-router-dom"
import './index.less'

export default class NavLeft extends React.Component {

    render() {
        const userInfo = {
            name: "Lawrence Liu",
            status: 30
        }
        return (
            <div className="nav-left">
                    <div className="title">Hi, {userInfo.name}</div>
                    <div className="loading-title">Set Up Your Profile</div>
                    <div className="loading">
                        <Progress percent={userInfo.status}
                            style={{
                                width: '240px',
                                strokeColor: '#294F8C'
                            }}
                            showInfo={false }
                        >
                        </Progress>
                    </div>
                    <div className="loading-status">
                        2/6 completed
                    </div>
                    <Menu className="menu">
                        <Menu.Item title="Medical Record" key = "/admin/record">
                            <NavLink className="link-style" to="/admin/record">
                                <Icon className="menuIcon" type="form" style={{fontSize: '20px',color:'white'}} />
                                <span class="menu-content">Medical Record</span>
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item title="Wellness Data" key="/admin/wellness">
                            <NavLink className="link-style" to="/admin/wellness">
                                <Icon className="menuIcon" type="fund" style={{fontSize: '20px',color:'white'}}/>
                                <span class="menu-content">Wellness Data</span>
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item title="Account Setting" key="/admin/account">
                            <NavLink className="link-style" to="/admin/account">
                                <Icon className="menuIcon" type="setting" style={{fontSize: '20px',color:'white'}} />
                                <span class="menu-content">Account Setting</span>
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item title="Finance" key="/admin/finance">
                            <NavLink className="link-style" to="/admin/finance">
                                <Icon className="menuIcon" type="transaction" style={{fontSize: '20px',color:'white'}} />
                                <span class="menu-content">Finance</span>
                                </NavLink>
                        </Menu.Item>
                        <Menu.Item title="To be decided" key="/admin/blank1">
                            <NavLink className="link-style" to="/admin/blank1">
                                <Icon className="menuIcon" type="check-square" style={{fontSize: '20px',color:'white'}} />
                                <span class="menu-content">To Be Decided</span>
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item title="To be decided" key="/admin/blank2">
                            <NavLink className="link-style" to="/admin/blank2">
                                <Icon className="menuIcon" type="check-square" style={{fontSize: '20px',color:'white'}} />
                                <span class="menu-content">To Be Decided</span>
                            </NavLink>
                        </Menu.Item>
                    </Menu>
            </div>
        );
    }
}