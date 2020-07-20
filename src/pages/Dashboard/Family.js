import React from 'react'
import {Card, Divider, Col, Pagination} from 'antd'

import './Family.less'
export default class Family extends React.Component {

    render(){

        return (
            <Card className="family" title="Family">
                <Card bordered={false}>
                    <Col className="family-img" span={6}><div><img src="/assets/images/dashboard/pic2.svg"/></div></Col>
                    <Col className="family-action" span={12}>Marrisa added a health record.</Col>
                    <Col className="family-time" span={6}>1 hour ago</Col>
                </Card>
                <Divider className="family-divider" type="vertical"/>
                <Card bordered={false}>
                    <Col className="family-img" span={6}><div><img src="/assets/images/dashboard/pic1.svg"/></div></Col>
                    <Col className="family-action" span={12}>Angelo added a health record.</Col>
                    <Col className="family-time" span={6}>2 hours ago</Col>
                </Card>
                <Pagination defaultCurrent={1} onChange="{onChange}" total={5} style={{textAlign: 'center', marginBottom: 30}}/>
            </Card>
        );
    }
}