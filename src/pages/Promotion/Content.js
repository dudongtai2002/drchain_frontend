import React from 'react'
import {Row, Col, Button} from 'antd'
import './Content.less'

export default class Content extends React.Component {


    render() {

        return (
            <div className="promotion">
                <Row className="part1">
                    <Col span="6"></Col>
                    <Col span="12">
                        <div className="part1-title">
                            Manage Your Health Data
                        </div>
                        <div className="part1-subtitle">
                            In A Better Way
                        </div>
                        <div className="part1-info1">
                            We are here to provide a better experience
                        </div>
                        <div className="part1-info2">
                            dealing with medical record
                        </div>
                        <div className="part1-btn">
                            <Button type="primary" shape="round">Get Started</Button>
                        </div>
                    </Col>
                    <Col span="6"></Col>
                </Row>
                <Row>
                    <Col className="page-transient"/>
                </Row>
                <Row className="part2"></Row>
                <Row className="part3">
                    <div className="part3-title">Why Dr.Chain?</div>
                    <div className="part3-subtitle">To Be The Master Of Your Private Health Data</div>
                </Row>
                <Row className="part4">
                    <Col span="2"></Col>
                    <Col span="20">
                        <span className="part4-title">Your health data will be...</span>
                        <div>
                            <div className="part4-section">
                                <div className="part4-img"><img src="/assets/icon/promotion/doctor.svg"></img></div>
                                <div className="part4-info">Provided By Doctors</div>
                                <div className="part4-content">We ensure you all the data will come from professional organizations.</div>
                            </div>
                            <div className="part4-section">
                                <div className="part4-img"><img src="/assets/icon/promotion/blockchain.svg"></img></div>
                                <div className="part4-info">Guarded By Blockchain</div>
                                <div className="part4-content">We provide you the safest way to manage and store your private health data.</div>
                            </div>
                            <div className="part4-section">
                                <div className="part4-img"><img src="/assets/icon/promotion/user.svg"></img></div>
                                <div className="part4-info">Managed By Yourself</div>
                                <div className="part4-content">We release you from the hassle and grief of dealing with papar-hard medical records.</div>
                            </div>
                        </div>
                    </Col>
                    <Col span="2"></Col>
                </Row>
                <Row className="part5">
                    <div className="part5-title">Freemium & Premium</div>
                    <div className="part5-subtitle">We give you all the freedom to choose your plan.</div>
                    <Row>
                        <Col span="12" className="part5-odd">
                            <div className="part5-section">
                                <div className="part5-section-img">
                                    <img src="/assets/icon/promotion/record.svg"/>
                                </div>
                                <div className="part5-section-title">Free Medical Record Storage</div>
                                <div className="part5-section-subtitle">provide you with the electronic medical record (EMR) service all the time.</div>
                                <div className="part5-section-link">
                                    <span>Get Started</span>
                                    <a><img src="/assets/icon/promotion/arrow.svg"/></a>
                                </div>
                            </div>
                        </Col>
                        <Col span="12" className="part5-even">
                            <div className="part5-section">
                                <div className="part5-section-img">
                                    <img src="/assets/icon/promotion/money.svg"/>
                                </div>
                                <div className="part5-section-title">One Month Free-trial,</div>
                                <div className="part5-section-subtitle">helps you experience unlimited access to most features at any time you want.</div>
                                <div className="part5-section-link">
                                    <span>Try Now</span>
                                    <a><img src="/assets/icon/promotion/arrow.svg"/></a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="12" className="part5-odd">
                            <div className="part5-section">
                                <div className="part5-section-img">
                                    <img src="/assets/icon/promotion/queen.svg"/>
                                </div>
                                <div className="part5-section-title">Multiple Premium Plans</div>
                                <div className="part5-section-subtitle">will satisfy all your distinctive needs with selected features and access.</div>
                                <div className="part5-section-link">
                                    <span>More Information</span>
                                    <a><img src="/assets/icon/promotion/arrow.svg"/></a>
                                </div>
                            </div>
                        </Col>
                        <Col span="12" className="part5-even">
                            <div className="part5-section">
                                <div className="part5-section-img">
                                    <img src="/assets/icon/promotion/edit.svg"/>
                                </div>
                                <div className="part5-section-title">Paid by features</div>
                                <div className="part5-section-subtitle">make sure you make the most of it by building your unique plan.</div>
                                <div className="part5-section-link">
                                    <span>Check It Out</span>
                                    <a><img src="/assets/icon/promotion/arrow.svg"/></a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Row>
                <Row className="part6">

                </Row>
                <Row className="part7">
                    <div className="part7-title">Master your health data without hassle</div>
                    <div>
                        <Button className="part7-btn" type="primary" shape="round">Try Dr.Chain</Button>
                        <Button className="part7-btn" type="primary" shape="round">Contact Sales</Button>
                    </div>
                </Row>
            </div>
        );
    }
}