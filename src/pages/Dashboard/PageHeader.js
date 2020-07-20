import React from 'react'
import {Row, Menu, Button} from 'antd'
import { NavLink } from 'react-router-dom'

import './PageHeader.less'


export default class PageHeader extends React.Component {
    render() {

        return (
            <div className="dashboard-style">
                <Row className="dashboard-header">
                    <Menu className = "dashboard-header-menu" mode="horizontal">
                        <Menu.Item disabled>
                            <span className="dashboard-header-title">Dashboard</span>
                        </Menu.Item>
                    </Menu>
                </Row>
            </div>
        );
    }
}