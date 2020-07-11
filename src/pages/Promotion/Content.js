import React from 'react'
import {Row, Col, Button, Card} from 'antd'
import './Content.less'

export default class Content extends React.Component {


    render() {

        return (
            <div className="promotion">
                <Row className="part1">
                    <Col span="2"></Col>
                    <Col span="12">
                        <div className="part1-title">
                            Manage
                        </div>
                        <div className="part1-subtitle">
                            Your Health Data
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
                            <Button type="primary" shape="round">TRY DR.CHAIN FOR FREE</Button>
                            <Button type="primary" shape="round">LEARN MORE</Button>
                        </div>
                    </Col>
                    <Col span="10"></Col>
                </Row>
                <Row className="part2">
                    <Col xs={1} sm={1} md={2} lg={2} xl={3} xxl={3}/>
                    <Col xs={22} sm={22} md={20} lg={20} xl={18} xxl={18}>
                        <img src="/assets/images/carousel.png" alt="carousel"></img> 
                    </Col>
                    <Col xs={1} sm={1} md={2} lg={2} xl={3} xxl={3}/>
                </Row>
                <Row className="part3">
                    <Col xs={2} sm={2} md={3} lg={3} xl={4} xxl={5}></Col>
                    <Col xs={20} sm={20} md={18} lg={18} xl={16} xxl={14}>
                        <div className="part3-header">- About Us -</div>
                        <div className="part3-title">Why Dr.Chain?</div>
                        <div className="part3-subtitle">To Be The Master Of Your Private Health Data</div>
                        <video controls>
                            <source src="movie.mp4" type="video/mp4"/>
                            <source src="movie.ogg" type="video/ogg"/>
                            Your browser does not support the video tag.
                        </video>
                    </Col>
                    <Col xs={2} sm={2} md={3} lg={3} xl={4} xxl={5}></Col>
                    
                </Row>
                <Row className="part4">
                    <Col xs={4} sm={4} md={3} lg={4} xl={5} xxl={6}></Col>
                    <Col xs={16} sm={16} md={18} lg={16} xl={14} xxl={12}>
                        <div className="part4-header">- Our Specialities -</div>
                        <div className="part4-title">You Have a 100% Proxy of Your Health Data</div>
                        <span className="part4-subtitle">Your health data will be...</span>
                        <Row gutter={24}>
                            <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
                                <Card className="part4-section">
                                    <div className="part4-img"><img src="/assets/icon/promotion/doctor.svg"></img></div>
                                    <div className="part4-info">Provided By Doctors</div>
                                    <div className="part4-content">We ensure you all the data will come from professional organizations.</div>
                                </Card>
                            </Col>
                            <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
                                <Card className="part4-section">
                                    <div className="part4-img"><img src="/assets/icon/promotion/lock.svg"></img></div>
                                    <div className="part4-info">Guarded By Blockchain</div>
                                    <div className="part4-content">We provide you the safest way to manage and store your private health data.</div>
                                </Card>
                            </Col>
                            <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
                                <Card className="part4-section">
                                    <div className="part4-img"><img src="/assets/icon/promotion/steering_wheel.svg"></img></div>
                                    <div className="part4-info">Managed By Yourself</div>
                                    <div className="part4-content">We release you from the hassle and grief of dealing with papar-hard medical records.</div>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={4} sm={4} md={3} lg={4} xl={5} xxl={6}></Col>
                </Row>
                <Row className="part8" gutter={83}>
                    <Col xs={0} sm={0} md={0} lg={3} xl={3} xxl={5}></Col>
                    <Col xs={24} sm={24} md={24} lg={9} xl={9} xxl={7}>
                        <Card bordered={false}>
                            <div className="part8-text-title">Never Miss One Health Service</div>
                            <div className="part8-text-content">With a calendar to integrate. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={9} xl={9} xxl={7}>
                        <Card bordered={false}>
                            <img src="/assets/images/calender.png"/>
                        </Card>
                    </Col>
                    <Col xs={0} sm={0} md={0} lg={3} xl={3} xxl={5}></Col>
                </Row>
                <Row className="part9" gutter={83}>
                    <Col xs={0} sm={0} md={0} lg={3} xl={3} xxl={5}></Col>
                    <Col xs={24} sm={24} md={24} lg={9} xl={9} xxl={7}>
                        <Card bordered={false}>
                            <img src="/assets/images/wellness.png"/>
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={9} xl={9} xxl={7}>
                        <Card bordered={false}>
                            <div className="part9-text-title">Intagrate Your Health Data in One Platform</div>
                            <div className="part9-text-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                        </Card>
                    </Col>
                    <Col xs={0} sm={0} md={0} lg={3} xl={3} xxl={5}></Col>
                </Row>
                <Row className="part10" gutter={83}>
                    <Col xs={0} sm={0} md={0} lg={3} xl={3} xxl={5}></Col>
                    <Col xs={24} sm={24} md={24} lg={9} xl={9} xxl={7}>
                        <Card bordered={false}>
                            <div className="part10-text-title">Family-shared Health Management</div>
                            <div className="part10-text-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={9} xl={9} xxl={7}>
                        <Card bordered={false}>
                            <img src="/assets/images/profile.png"/>
                        </Card>
                    </Col>
                    <Col xs={0} sm={0} md={0} lg={3} xl={3} xxl={5}></Col>
                </Row>
                <Row className="part5">
                    <div className="part5-header">- Our Offerings -</div>
                    <div className="part5-title">Freemium & Premium</div>
                    <div className="part5-subtitle">We give you all the freedom to choose your plan.</div>
                    <Row gutter={24}>
                        <Col xs={0} sm={0} md={2} lg={4} xl={5} xxl={6}></Col>
                        <Col xs={24} sm={24} md={10} lg={8} xl={7} xxl={6}>
                            <Card className="part5-section">
                                <div className="part5-section-title">
                                    <img src="/assets/icon/promotion/record.svg"/><span>Free Medical Record Storage</span>
                                </div>
                                <div className="part5-section-subtitle">provide you with the electronic medical record (EMR) service all the time.</div>
                                <div className="part5-section-link">
                                    <span>Get Started</span>
                                    <a><img src="/assets/icon/promotion/arrow.svg"/></a>
                                </div>
                            </Card>
                        </Col>
                        <Col xs={24} sm={24} md={10} lg={8} xl={7} xxl={6}>
                            <Card className="part5-section">
                                <div className="part5-section-title">
                                    <img src="/assets/icon/promotion/free.svg"/><span>One Month Free-trial</span>
                                </div>
                                <div className="part5-section-subtitle">helps you experience unlimited access to most features at any time you want.</div>
                                <div className="part5-section-link">
                                    <span>Try Now</span>
                                    <a><img src="/assets/icon/promotion/arrow.svg"/></a>
                                </div>
                            </Card>
                        </Col>
                        <Col  xs={0} sm={0} md={2} lg={4} xl={5} xxl={6}></Col>
                    </Row>
                    <Row gutter={24}>
                        <Col xs={0} sm={0} md={2} lg={4} xl={5} xxl={6}></Col>
                        <Col xs={24} sm={24} md={10} lg={8} xl={7} xxl={6}>
                            <Card className="part5-section">
                                <div className="part5-section-title">
                                    <img src="/assets/icon/promotion/premium.svg"/><span>Multiple Premium Plans</span>
                                </div>
                                <div className="part5-section-subtitle">will satisfy all your distinctive needs with selected features and access.</div>
                                <div className="part5-section-link">
                                    <span>More Information</span>
                                    <a><img src="/assets/icon/promotion/arrow.svg"/></a>
                                </div>
                            </Card>
                        </Col>
                        <Col xs={24} sm={24} md={10} lg={8} xl={7} xxl={6}>
                            <Card className="part5-section">
                                <div className="part5-section-title">
                                    <img src="/assets/icon/promotion/edit.svg"/><span>Paid by features</span>
                                </div>
                                <div className="part5-section-subtitle">make sure you make the most of it by building your unique plan.</div>
                                <div className="part5-section-link">
                                    <span>Check It Out</span>
                                    <a><img src="/assets/icon/promotion/arrow.svg"/></a>
                                </div>
                            </Card>
                        </Col>
                        <Col xs={0} sm={0} md={2} lg={4} xl={5} xxl={6}></Col>
                    </Row>
                </Row>
                <Row className="part6">
                    <div className="part6-header">- Future -</div>
                    <div className="part6-title">Unlock New Features Overtime</div>
                    <div className="part6-subtitle">Your continous-use of Dr.Chain can also unlock new features.</div>
                    <div className="part6-background">
                        <Col xs={0} sm={0} md={2} lg={4} xl={5} xxl={5}></Col>
                        <Col xs={24} sm={24} md={17} lg={15} xl={14} xxl={14}>
                            <img src="/assets/images/promotion_bot.png" alt="heart"/>
                        </Col>
                        <Col xs={0} sm={0} md={2} lg={4} xl={5} xxl={5}></Col>
                    </div>
                </Row>
                <Row className="part7">
                    <div className="part7-title">Master Your Health Data Without Hassle</div>
                    <div>
                        <Button className="part7-btn" type="primary" shape="round">TRY DR.CHAIN FOR FREE</Button>
                        <Button className="part7-btn" type="primary" shape="round">CONTACT SALES</Button>
                    </div>
                </Row>
            </div>
        );
    }
}