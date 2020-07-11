import React from 'react'
import {Row, Menu, Button} from 'antd'
import { NavLink } from 'react-router-dom'

import './PageHeader.less'


export default class PageHeader extends React.Component {

    state = {
        selected: "list"
    }

    handleViewSwitch(choice) {
        this.setState({
            selected: choice
        })
    }
    render() {

        return (
            <div className="vaccination-style">
                <Row className="vaccination-header">
                    <Menu className = "vaccination-header-menu" mode="horizontal">
                        <Menu.Item disabled>
                            <span className="vaccination-header-title">Vaccination</span>
                        </Menu.Item>
                    </Menu>
                </Row>
                <Row className="vaccination-function">
                    <div className="vaccination-function-switch">
                        <Button className={this.state.selected === "list"?"vaccination-function-switch-selected":null} shape="round" onClick={(e)=>this.handleViewSwitch("list",e)}>
                            <NavLink to="/dashBoard/vaccination/list">Checklist</NavLink>
                        </Button>
                        <Button className={this.state.selected === "calendar"?"vaccination-function-switch-selected":null} shape="round" onClick={(e)=>this.handleViewSwitch("calendar",e)}>
                            <NavLink className="link-style" to="/dashBoard/vaccination/calendar">Calendar</NavLink>
                        </Button>
                    </div>
                    <div className="vaccination-function-record">
                        <Button shape="round">
                            <img src="/assets/icon/Add.svg" alt="add" />
                            New Record
                        </Button>
                    </div>
                </Row>
            </div>
        );
    }
}