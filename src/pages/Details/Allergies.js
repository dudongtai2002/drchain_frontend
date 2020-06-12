import React from 'react'
import {Card, Row, Col} from 'antd'
import './Allergies.less'
export default class Allergies extends React.Component {
    render() {
        return (
            <div className="body-section">
                <Card title="Allergies">
                    <Row>
                        <Col className="allergy-content">No known Drug Allergies</Col>
                    </Row>
                </Card>
            </div>
        );
    }
}