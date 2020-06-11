import React from 'react'
import {Row, Col, Card, Button, Icon} from 'antd'
import './Upload.less'
export default class Upload extends React.Component {
    render() {
        return (
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
        );
    }
}