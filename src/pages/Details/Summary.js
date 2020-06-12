import React from 'react'
import {Card, Row, Col} from 'antd'
import './Summary.less'

export default class Summary extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            time: "05/23/2020 10:40AM",
            provider: "Steven Chen",
            department: "Surgical Department",
            dept_phone: "412-999-8716",
            institute: "UPMC Shadyside"
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
                        <Col span="14" className="summary-content">{this.state.department}</Col>
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