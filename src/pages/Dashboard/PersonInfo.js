import React from 'react'
import {Card, Divider, Avatar, Col} from 'antd'
import './PersonInfo.less'
export default class PersonInfo extends React.Component {

    render(){

        return (
            <Card className="personInfo">
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={8}>
                    <div className="personInfo-left">
                        <div className="personInfo-left-pic">
                            <img src="/assets/images/dashboard/profile.svg" alt="profile"/>
                        </div>
                        <div className="personInfo-left-content">
                            <span className="personInfo-left-name">Lawrence Liu</span>
                            <span className="personInfo-left-email">threedaysPark@gmail.com</span>
                        </div>
                    </div>
                </Col>
                <Col xs={0} sm={0} md={0} lg={0} xl={0} xxl={1}>
                    <Divider className="divider" type="vertical" orientation="center"/>
                </Col>
                <Col xs={23} sm={23} md={23} lg={23} xl={23} xxl={13}>
                    <div className="personInfo-right">
                        <div className="personInfo-right-row1">
                            <span className="personInfo-right-title">Height</span>
                            <span className="personInfo-right-content">177cm</span>
                            <span className="personInfo-right-title">Weight</span>
                            <span className="personInfo-right-content">69.6kg</span>
                        </div>
                        <div>
                            <span className="personInfo-right-title">Blood Type</span>
                            <span className="personInfo-right-content">A Rh+</span>
                            <span className="personInfo-right-title">Insurance</span>
                            <span className="personInfo-right-content">Anthem</span>
                        </div>
                    </div>
                </Col>
                <Col xs={1} sm={1} md={1} lg={1} xl={1} xxl={2}>
                    <div className="profile-edit">
                        <button><img src="/assets/icon/dashboard/edit.svg"/></button>
                    </div>
                </Col>
            </Card>
        );
    }
}