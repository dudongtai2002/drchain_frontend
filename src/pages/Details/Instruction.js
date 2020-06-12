import React from 'react'
import {Card, Row, Col} from 'antd'
import "./Instruction.less"
export default class Instruction extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            instruction: {
                content: [
                    " Your cough and sputum production is likely due to recent viral infection.",
                    "We will obtain a chest x-ray to rule out bacterial infection. We will call you later today with results.",
                    "You may also obtain blood work today",
                    "We recommend steroid inhaler called Flovent, You will use ......"
                ]
            }
        });
    }
    render() {
        let content = this.state.instruction.content;
        content = content.map((key, index) => {
            return (
                <Col className="instruction-content"><span>{index+1}.</span>{key}</Col>
            );
        })
        return (
            <div className="body-section">
                <Card title="Patient Instructions">
                    <Row className="instruction-body">
                        {content}
                    </Row>
                </Card>
            </div>
        );
    }
}