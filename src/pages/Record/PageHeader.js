import React from 'react'
import {Button, Modal, Upload, Icon, message, Card, Dropdown, Menu, Input, Avatar, Col} from 'antd'
import './PageHeader.less'
const {Dragger} = Upload;


export default class HeaderForm extends React.Component{
    state = {
        recordVisible: false,
        flagVisible: false,
        confirmRecordLoading: false,
        confirmFlagLoading: false,
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
            window.location.href = '/#/admin/details';
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

    render(){
        const menu = (
            <Menu className="form-selection">
              <Menu.Item key="0">
                <Button onClick={this.showFlagModal}><Icon type="flag" theme="filled" /><span className="form-selection-content">Share Flagged</span></Button>
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item key="1">
              <Button><Icon type="select" /><span className="form-selection-content">Manually Select</span></Button>
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
            <Card className="record-header" bordered={false}>
                <span className="record-header-title">Medical Record</span>
                <span className="record-header-divider"></span>
                <Button className="record-button-left" size={"large"}><Icon type="filter" /></Button>
                <Button className="record-button-left" size={"large"}><Icon type="reload" /></Button>
                <Dropdown overlay={menu} trigger={['click']}>
                    <Button className="record-button-left" size={"large"}><Icon type="form" /></Button>
                </Dropdown>
                <Button className="record-button-left" size={"large"}><Icon type="more" /></Button>
                <Button className="record-button-right" type="primary" shape="round" size={"large"} onClick={this.showRecordModal}><Icon type="plus" />New Record</Button>
                <Modal
                    title={<span className="shareEMR"><Icon type="mail" theme="filled" /><span  className="shareEMRContent">Share EMR</span></span>}
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
            </Card>
        );
    }
}