import React from 'react'
import {Card, Row, Col} from 'antd'
import './Visit.less'
export default class Visit extends React.Component {
    render() {
        return (
            <div className="body-section">
                <Card title="Visit Reason">
                    <Row>
                        <Col className="visit-content">Productive Cough</Col>
                    </Row>
                </Card>
            </div>
        );
    }
}