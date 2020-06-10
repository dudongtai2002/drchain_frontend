import React from 'react'
import './index.less'
import {Card, Button, Icon, Form, Table, Modal, Upload, message} from 'antd'

const {Dragger} = Upload;

export default class Record extends React.Component {
    
    render(){
        const columns = [
            {
              title: 'Date',
              dataIndex: 'Date',
              key: 'Date',
              align: 'center',
            },
            {
              title: 'Institute',
              dataIndex: 'Institute',
              key: 'Institute',
              align: 'center',
            },
            {
              title: 'Department',
              dataIndex: 'Department',
              key: 'Department',
              align: 'center',
            },
            {
                title: 'Dept_Phone',
                dataIndex: 'Dept_Phone',
                key: 'Dept_Phone',
                align: 'center',
            },
            {
                title: 'Status',
                dataIndex: 'Status',
                key: 'Status',
                align: 'center',
            },
        ];
        const dataSource = [
            {
                Date: "2020/01/20",
                Institute: "UMPC",
                Department: "CMU",
                Dept_Phone: "765-325-6984",
                Status: "Finished"
            },
            {
                Date: "2020/01/20",
                Institute: "UMPC",
                Department: "CMU",
                Dept_Phone: "765-325-6984",
                Status: "Finished"
            },
        ];
        return (
            <div class="container">
                <Card className="cardWrap" bordered={false} bodyStyle={{padding: "24px 0"}}>
                    <HeaderForm />
                </Card>
                <Card className="cardWrap" bordered={false} style={{border:"transparent"}}>
                    <Table
                        loading={false}
                        dataSource={dataSource}
                        columns={columns}
                        aligh= {"center"}
                        rowClassName = {(record, index) => 'table-row-style'}
                    />
                </Card>
            </div>
        );
    }
}
class HeaderForm extends React.Component{
    state = {
        visible: false,
        confirmLoading: false,
    };
    showRecordModal = () => {
        this.setState({
            visible: true,
        });
    };
    handleOk = () => {
        this.setState({
            confirmLoading: true,
        });
        setTimeout(()=>{
            this.setState({
                visible: false,
                confirmLoading: false,
            });
            message.success("You files have been successfully uploaded.");
            window.location.href = '/#/admin/details';
        }, 1000);
    }
    handleCancel = () => {
        this.setState({
            visible: false,
        });
    };

    render(){
        return (
            <div className="header">
                <span className="header-title">Medical Record</span>
                <Button className="button-left" size={"large"}><Icon type="filter" /></Button>
                <Button className="button-left" size={"large"}><Icon type="reload" /></Button>
                <Button className="button-left" size={"large"}><Icon type="more" /></Button>
                <Button className="button-right" type="primary" shape="round" size={"large"} onClick={this.showRecordModal}><Icon type="plus" />New Record</Button>
                <Modal
                    title={<span>Upload Attachments</span>}
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    confirmLoading={this.state.confirmLoading}
                    onCancel={this.handleCancel}
                >
                    <Dragger>
                        <p className="ant-upload-drag-icon">
                            <Icon type="inbox" />
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    </Dragger>
                </Modal>
            </div>
            
        );
    }
}
HeaderForm = Form.create({})(HeaderForm);