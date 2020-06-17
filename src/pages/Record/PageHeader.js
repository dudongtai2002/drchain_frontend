import React from 'react'
import {Button, Modal, Upload, Icon, message, Card, Dropdown, Menu, Input, Avatar, Row,Col, Radio, Divider} from 'antd'
import './PageHeader.less'
const {Dragger} = Upload;

export default class HeaderForm extends React.Component{
    state = {
        recordVisible: false,
        flagVisible: false,
        filterVisible: false,
        confirmRecordLoading: false,
        confirmFlagLoading: false,
        confirmFilterLoading: false,
        sharedEMRContact: [
            {
                name: "Tarika Jain",
                email: "upmcjain@upmc.com"
            },
            {
                name: "Tarika Jain",
                email: "upmcjain@upmc.com"
            },
            {
                name: "Tarika Jain",
                email: "upmcjain@upmc.com"
            }
        ]
    };
    showFilterModal = () => {
        this.setState({
            filterVisible: true,
        });
    };
    handleFilterOk = () => {
        this.setState({
            confirmFilterLoading: true,
        });
        setTimeout(()=>{
            this.setState({
                filterVisible: false,
                confirmFilterLoading: false,
            });
            message.success("You search result have been successfully displayed.");
        }, 1000);
    }
    handleFilterCancel = () => {
        this.setState({
            filterVisible: false,
        });
    };

    showRecordModal = () => {
        this.setState({
            recordVisible: true,
        });
    };
    handleRecordOk = () => {
        this.setState({
            confirmRecordLoading: true,
        });
        setTimeout(()=>{
            this.setState({
                recordVisible: false,
                confirmRecordLoading: false,
            });
            message.success("You files have been successfully uploaded.");
            window.location.href = '/#/details';
        }, 1000);
    }
    handleRecordCancel = () => {
        this.setState({
            recordVisible: false,
        });
    };

    showFlagModal = () => {
        this.setState({
            flagVisible: true,
        });
    };
    handleFlagOk = () => {
        this.setState({
            confirmFlagLoading: true,
        });
        setTimeout(()=>{
            this.setState({
                flagVisible: false,
                confirmFlagLoading: false,
            });
            message.success("You email has been sent out.");
        }, 1000);
    }
    handleFlagCancel = () => {
        this.setState({
            flagVisible: false,
        });
    };

    handleManualSelect = () => {
        
    }
    render(){

        const filterSelection = (
            <Menu className="filter-selection">
                <Radio.Group>
                <Radio className="filter-option">Last Updated (Default)</Radio>
                <Radio className="filter-option">Flagged Only</Radio>
                <Radio className="filter-option">Display by Institute</Radio>
                <Radio.Group>
                    <Radio className="filter-second-option">UMPC</Radio>
                    <Radio className="filter-second-option">UMPC</Radio>
                    <Radio className="filter-second-option">UMPC</Radio>
                </Radio.Group>
                </Radio.Group>
            </Menu>
        );
        const share = (
            <Menu className="form-selection">
              <Menu.Item key="0">
                <Button onClick={this.showFlagModal}><img className="form-selection-icon" src="/assets/icon/Flag.svg" alt="flag"></img><span className="form-selection-content">Share Flagged</span></Button>
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item key="1">
              <Button onClick="this.handleManualSelect"><img className="form-selection-icon" src="/assets/icon/Check_Box.svg"></img><span className="form-selection-content">Share Checked</span></Button>
              </Menu.Item>
            </Menu>
        );

        const more = (
            <Menu className="form-selection">
              <Menu.Item key="0">
                <Button>
                    <Icon type="question" />
                    <span className="form-selection-content">Share Flagged</span>
                </Button>
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item key="1">
                <Button>
                    <Icon type="question" />
                    <span className="form-selection-content">To be Decided</span>
                </Button>
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item key="2">
                <Button>
                    <Icon type="question" />
                    <span className="form-selection-content">To be Decided</span>
                </Button>
              </Menu.Item>
            </Menu>
        );

        let shareEMRContact = this.state.sharedEMRContact;
        shareEMRContact = shareEMRContact.map((key, index) => {
            return (
                <Card className="shareEMREmailList">
                    <Col className="shareEMRProfile" span="3">
                        <Avatar size={56} src="https://picsum.photos/200"/>
                    </Col>
                    <Col className="shareEMRInfo" span="18">
                        <div>{key.name}</div>
                        <div>{key.email}</div>
                    </Col>
                    <Col className="shareEMRDelete" span="3">
                        <Button key={index}><Icon type="close" /></Button>
                    </Col>
                </Card>
            );
        })

        return (
            <Row className="record-header">
                    <Menu className = "record-header-menu" mode="horizontal">
                        <Menu.Item disabled>
                            <span className="record-header-title">Medical Record</span>
                        </Menu.Item>
                        <Divider className="record-header-divider" type="vertical"/>
                        <Menu.Item disabled className="menu-item">
                            <Button className="record-button-left" size={"large"} onClick={this.showFilterModal}>
                                <img src="/assets/icon/Filter.svg" alt="filter"/>
                            </Button>
                        </Menu.Item>
                        <Menu.Item disabled className="menu-item">
                            <Button className="record-button-left" size={"large"}>
                                <img src="/assets/icon/Refresh.svg" alt="refresh"/>
                            </Button>
                        </Menu.Item>
                        <Menu.Item disabled  className="menu-item">
                            <Dropdown overlay={share} trigger={['click']}>
                                <Button className="record-button-left" size={"large"}>
                                    <img src="/assets/icon/Share.svg" alt="share"/>
                                </Button>
                            </Dropdown>
                        </Menu.Item>
                        <Menu.Item disabled  className="menu-item">
                            <Dropdown overlay={more} trigger={['click']}>
                                <Button className="record-button-left" size={"large"}>
                                    <Icon type="more" />
                                </Button>
                            </Dropdown>
                        </Menu.Item>
                        <Menu.Item disabled  style={{float: "right"}}>
                            <Button className="record-button-right" type="primary" shape="round" size={"large"} onClick={this.  showRecordModal}>
                                <img className="newRecord-icon" src="/assets/icon/Add.svg" />
                                New Record
                            </Button>
                        </Menu.Item>
                    </Menu>
                <Modal
                    title={<span className="shareFilter">Filter</span>}
                    visible={this.state.filterVisible}
                    confirmLoading={this.state.confirmFilterLoading}
                    onCancel={this.handleFilterCancel}
                    footer={[
                        <Button className="doFilter" onClick={this.handleFilterOk}>Search</Button>
                    ]}
                >   
                    To be Decided
                </Modal>
                <Modal
                    title={<span className="shareEMR"><Icon type="mail" theme="filled" /><span className="shareEMRContent">Share   EMR</span></span>}
                    visible={this.state.flagVisible}
                    confirmLoading={this.state.confirmFlagLoading}
                    onCancel={this.handleFlagCancel}
                    footer={[
                        <Button className="shareEMRBtn" onClick={this.handleFlagOk}>Send</Button>
                    ]}
                >
                    <Input className="shareEMRInput" placeholder="Email Address" />
                    {shareEMRContact}
                </Modal>
                <Modal
                    title={<span>Upload Attachments</span>}
                    visible={this.state.recordVisible}
                    onOk={this.handleRecordOk}
                    confirmLoading={this.state.confirmRecordLoading}
                    onCancel={this.handleRecordCancel}
                >
                    <Dragger>
                        <p className="ant-upload-drag-icon">
                            <Icon type="inbox" />
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    </Dragger>
                </Modal>
            </Row>
        );
    }
}