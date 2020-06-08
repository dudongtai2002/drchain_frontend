import React, { Fragment } from 'react'
import './accountInfo.less'
import { Avatar, Row, Col, Divider, Icon } from 'antd'
//import { FormOutlined } from '@ant-design/icons';

export default class AccountInfo extends React.Component {
    render(){
        const accountInfo = {
            firstName: "Lawrence",
            lastName: "Liu",
            email: "threedaysPark@gmail.com",
            gender: "Male",
            birth: "01/31/1992",
            height: 177,
            weight: 69.6,
            bloodType: "A Rh+",
            insurance: "Anthem",
            profilePicSrc: "https://picsum.photos/200"
        }
        return (
        <Fragment>
            <div className="account-summary">
                <Avatar size={64} src={accountInfo.profilePicSrc}/>
                <div className="account-owner">
                    <span className="account-username">{accountInfo.firstName + " " + accountInfo.lastName}</span>
                    <span className="account-email">{accountInfo.email}</span>
                </div>
            </div>
            <div className="account-detail">
                <Row className="info-header">
                    <span>Basic Info</span>
                    <Icon type = "FormOutlined" className="edit-icon"/>
                </Row>
                <Divider/>
                <Row>
                    <Col span="6" className="info-label">First Name</Col>
                    <Col span="6" className="info-value">{accountInfo.firstName}</Col>
                    <Col span="6" className="info-label">Last Name</Col>
                    <Col span="6" className="info-value">{accountInfo.lastName}</Col>
                </Row>
                <Divider/>
                <Row>
                    <Col span="6" className="info-label">Email</Col>
                    <Col span="18" className="info-value">{accountInfo.email}</Col>
                </Row>
                <Divider/>
                <Row>
                    <Col span="6" className="info-label">Gender</Col>
                    <Col span="6" className="info-value">{accountInfo.gender}</Col>
                    <Col span="6" className="info-label">Date of Birth</Col>
                    <Col span="6" className="info-value">{accountInfo.birth}</Col>
                </Row>
                <Divider/>
                <Row>
                    <Col span="6" className="info-label">Height</Col>
                    <Col span="6" className="info-value">{accountInfo.height}cm</Col>
                    <Col span="6" className="info-label">Weight</Col>
                    <Col span="6" className="info-value">{accountInfo.weight}kg</Col>
                </Row>
                <Divider/>
                <Row>
                    <Col span="6">Blood Type</Col>
                    <Col span="6">{accountInfo.bloodType}</Col>
                    <Col span="6">Insurance</Col>
                    <Col span="6">{accountInfo.insurance}</Col>
                </Row>
            </div>
        </Fragment>
    );
}
}