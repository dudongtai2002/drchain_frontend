import React from 'react'
import {Card, Row, Col, Menu, Dropdown, Icon,Select} from 'antd'
import './Summary.less'
import MenuConfig from './menuConfig'
const { Option, OptGroup } = Select;

export default class Summary extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            menuTreeNode: [],
            time: "05/23/2020 10:40AM",
            provider: "Steven Chen",
            department: "Surgical Department",
            dept_phone: "412-999-8716",
            institute: "UPMC Shadyside"
        })
    }
    componentWillMount() {
        const menuTreeNode = this.renderMenu(MenuConfig);
        this.setState({
            menuTreeNode
        })
    }
    renderMenu=(data)=> {
        return data.map((item)=>{
            if (item.children) {
                return (
                    <OptGroup label={item.title}>
                        {this.renderMenu(item.children)}
                    </OptGroup>
                )
            }
            return <Option value={item.title}>{item.title}</Option>
        })
    }
    render() {
        
        return (
            <div className="body-section">
                <Card title="Summary" className="summary-body">
                    <Row className="summary-row">
                        <Col span="10" className="summary-label">Time</Col>
                        <Col span="14" className="summary-content">{this.state.time}</Col>
                    </Row>
                    <Row className="summary-row">
                        <Col span="10" className="summary-label">Provider</Col>
                        <Col span="14" className="summary-content">{this.state.provider}</Col>
                    </Row>
                    <Row className="summary-row">
                        <Col span="10" className="summary-label">Department</Col>
                        <Col span="14" className="summary-content">
                            <Select defaultValue="Select Department" style={{ width: 180 }}>
                                {this.state.menuTreeNode}
                            </Select>
                        </Col>
                    </Row>
                    <Row className="summary-row">
                        <Col span="10" className="summary-label">Dept Phone</Col>
                        <Col span="14" className="summary-content">{this.state.dept_phone}</Col>
                    </Row>
                    <Row className="summary-row">
                        <Col span="10" className="summary-label">Institute</Col>
                        <Col span="14" className="summary-content">{this.state.institute}</Col>
                    </Row>
                </Card>
            </div>
        );
    }
}