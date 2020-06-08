import React from 'react'
import {Progress, Icon, Menu} from 'antd'
import {NavLink} from "react-router-dom"
import './index.less'

export default class NavLeft extends React.Component {

    render() {
        return (
            <div className="nav-left">
                    <div className="title">Hi, Lawrence Liu</div>
                    <div className="loading-title">Set Up Your Profile</div>
                    <div className="loading">
                        <Progress percent={30}
                            style={{
                                width: '230px',
                                strokeColor: '#294f8c'
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
                            <NavLink className="link-style" to="/admin/record"><Icon type="form" style={{fontSize: '16px',color:'white'}} />  Medical Record</NavLink>
                        </Menu.Item>
                        <Menu.Item title="Wellness Data" key="/admin/wellness">
                            <NavLink className="link-style" to="/admin/wellness"><Icon type="fund" style={{fontSize: '18px',color:'white'}}/>  Wellness Data</NavLink>
                        </Menu.Item>
                        <Menu.Item title="Account Setting" key="/admin/account">
                            <NavLink className="link-style" to="/admin/account"><Icon type="setting" style={{fontSize: '18px',color:'white'}} />  Account Setting</NavLink>
                        </Menu.Item>
                        <Menu.Item title="Finance" key="/admin/finance">
                            <NavLink className="link-style" to="/admin/finance"><Icon type="transaction" style={{fontSize: '18px',color:'white'}} />  Finance</NavLink>
                        </Menu.Item>
                        <Menu.Item title="To be decided" key="/admin/blank1">
                            <NavLink className="link-style" to="/admin/blank1"><Icon type="check-square" style={{fontSize: '18px',color:'white'}} />  To be decided</NavLink>
                        </Menu.Item>
                        <Menu.Item title="To be decided" key="/admin/blank2">
                            <NavLink className="link-style" to="/admin/blank2"><Icon type="check-square" style={{fontSize: '18px',color:'white'}} />  To be decided</NavLink>
                        </Menu.Item>
                    </Menu>
            </div>
        );
    }
}