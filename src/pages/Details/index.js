import React from 'react'
import './index.less'
import './common.less'
import {Card, Button, Icon, Col, Row} from 'antd'
import Upload from './Upload'
import Summary from './Summary'
import Instruction from './Instruction'
import Medication from './Medication'
import Note from './Note'
import Vitals from './Vitals'
import Allergies from './Allergies'
import Visit from './Visit'
import Prescription from './Prescription'
import Attachment from './Attachment'
export default class Details extends React.Component {

    handleClick = () => {
        window.location.href = '/#/record';
    }
    handleConfirm = () => {
        window.location.href = '/#/record';
    }

    render() {
        return (
            <div className="detail-container">
                <Card className="card-wrap" bordered={false} bodyStyle={{padding: "24px 0"}}>
                    <Button className="returnBtn" onClick={this.handleClick}><Icon type="arrow-left"/>Medical Record / Add a new record</Button>
                </Card>
                <Card className="card-wrap" style={{border:'none'}} bordered={false} bodyStyle={{padding: '0 0 0 10px'}}>
                    <div className="card-title">Attachments</div>
                </Card>
                <Upload />
                <Card className="card-wrap" style={{border:'none'}} bordered={false} bodyStyle={{padding: '30px 0 0 10px'}}>
                    <div className="card-title clearfix">Below is your EMR</div>
                </Card>
                <div className="body-wrap">
                    <Row type="flex" gutter={48} align="top">
                        <Col  xs={24} sm={24} md={12} lg={12} xl={12} >
                            <Summary />
                            <Instruction />
                            <Medication />
                            <Note />
                        </Col>
                        <Col  xs={24} sm={24} md={12} lg={12} xl={12} >
                            <Vitals />
                            <Allergies />
                            <Visit />
                            <Prescription />
                            <Attachment />
                            <Button type="primary" size="large" shape="round" onClick={this.handleConfirm}>Confirm and Save</Button>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}