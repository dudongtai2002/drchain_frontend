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
                    <div className="title">{userInfo.name}</div>
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
                        <Menu.Item className="menu-firstItem" title="Dashboard" key = "/dashboard">
                            <NavLink className="link-style" to="/user/dashboard">
                                <img className="navLeft-icon" src="/assets/icon/dashboard.svg" alt="Dashboard"></img>
                                <span className="menu-content">Dashboard</span>
                                <img style={{float:'right'}} src="/assets/icon/arrow_back.svg"></img>
                            </NavLink>
                        </Menu.Item>
                        <Divider className="menu-divider"/>
                        <Menu.Item className="menu-divider" title="Vaccination" key="/vaccination/list">
                            <NavLink className="link-style" to="/user/vaccination/list">
                                <img className="navLeft-icon" src="/assets/icon/vaccine.svg" alt="Vaccination"></img>
                                <span className="menu-content">Vaccination</span>
                                <img style={{float:'right'}} src="/assets/icon/arrow_back.svg"></img>
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item title="Medical Record" key = "/record">
                            <NavLink className="link-style" to="/user/record">
                                <img className="navLeft-icon" src="/assets/icon/Record.svg" alt="record"></img>
                                <span className="menu-content">Medical Record</span>
                                <img style={{float:'right'}} src="/assets/icon/arrow_back.svg"></img>
                            </NavLink>
                        </Menu.Item>
                        <Divider className="menu-divider"/>
                        <Menu.Item title="Account Setting" key="/account">
                            <NavLink className="link-style" to="/user/account">
                                <img className="navLeft-icon" src="/assets/icon/profile.svg" alt="profile"></img>
                                <span className="menu-content">Profiles</span>
                                <img style={{float:'right'}} src="/assets/icon/arrow_back.svg"></img>
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item title="Finance" key="/finance">
                            <NavLink className="link-style" to="/user/finance">
                                <img className="navLeft-icon" src="/assets/icon/fin.svg" alt="finance"></img>
                                <span className="menu-content">Finance</span>
                                <img style={{float:'right'}} src="/assets/icon/arrow_back.svg"></img>
                                </NavLink>
                        </Menu.Item>
                        <Menu.Item title="To be decided" key="/blank1">
                            <NavLink className="link-style" to="/user/blank1">
                                <img className="navLeft-icon" src="/assets/icon/setting.svg" alt="setting"></img>
                                <span className="menu-content">Settings</span>
                                <img style={{float:'right'}} src="/assets/icon/arrow_back.svg"></img>
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item className="menu-divider" title="Wellness Data" key="/wellness">
                            <NavLink className="link-style" to="/user/wellness">
                                <img className="navLeft-icon" src="/assets/icon/Data.svg" alt="data"></img>
                                <span className="menu-content">Wellness Data</span>
                                <img style={{float:'right'}} src="/assets/icon/arrow_back.svg"></img>
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item title="Application" key="/application">
                            <NavLink className="link-style" to="/user/application">
                                <img className="navLeft-icon" src="/assets/icon/application.svg" alt="Application"></img>
                                <span className="menu-content">Application</span>
                                <img style={{float:'right'}} src="/assets/icon/arrow_back.svg"></img>
                            </NavLink>
                        </Menu.Item>
                    </Menu>
            </div>
        );
    }
}