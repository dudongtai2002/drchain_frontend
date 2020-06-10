import React from 'react'
import './index.less'
import {Card, Button, Icon, Col, Row} from 'antd'
export default class Details extends React.Component {

    handleClick = () => {
        window.location.href = '/#/admin/record';
    }

    render() {
        return (
            <div className="container">
                <Card className="card-wrap" bordered={false} bodyStyle={{padding: "24px 0"}}>
                    <Button className="returnBtn" onClick={this.handleClick}><Icon type="arrow-left"/>Medical Record / Add a new record</Button>
                </Card>
                <Card className="card-wrap" style={{border:'none'}} bordered={false} bodyStyle={{padding: '0 0 0 10px'}}>
                    <div className="card-title">Attachments</div>
                </Card>
                <div>
                    <Row>
                     <Col span={10} style={{marginLeft: '40px'}}>
                        <Card className="card-wrap-upload">
                            <div className="clearfix">
                                <span className="upload-file-type"><Icon type="paper-clip" />PDF</span>
                                <span className="upload-file-content">05/23 Visit Summary</span>
                                <span className="upload-file-delete">2 minutes ago<Icon className="upload-delete" type="close" /></span>
                            </div>
                            <div className="clearfix">
                                <span className="upload-file-type"><Icon type="paper-clip" />JPG</span>
                                <span className="upload-file-content">X-ray Radiography</span>
                                <span className="upload-file-delete">2 minutes ago<Icon className="upload-delete" type="close" /></span>
                            </div>
                        </Card>
                    </Col>
                    <Col span={8} style={{marginLeft: '40px'}}>
                        <Button className="uploadBtn"><Icon type="plus" style={{fontSize: '30px'}}/></Button>
                    </Col>
                    </Row>
                </div>
                <Card className="card-wrap" style={{border:'none'}} bordered={false} bodyStyle={{padding: '30px 0 0 10px'}}>
                    <div className="card-title clearfix">Below is your EMR</div>
                </Card>
            </div>
        );
    }
}