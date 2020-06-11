import React from 'react'
import {Card, Row, Col} from 'antd'
import './Medication.less'
export default class Medication extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            meditation:
                [{
                    medicine: "Fluticasone propionate (FLOVENT HFA) 110 mcg/actuation HFA Aerosol Inhaler",
                    direction: "Inhale 2 puffs twice daily and rinse your mouth thoroughly afterward - Inhalation"
                }],
        });
    }
    render() {
        let content = this.state.meditation;
        content = content.map((key) => {
            return (
                <Card title = "Medication">
                    <Row className="medicine-detail">
                        <Col>{key.medicine}</Col>
                    </Row>
                    <Row>
                        <div className="medicine-direction-title">Direction</div>
                        <Col className="medicine-direction-content">{key.direction}</Col>
                    </Row>      
                </Card>
            );
        })
        return (
            <div className="body-section">
                {content}
            </div>
        );
    }
}