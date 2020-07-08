import React from 'react'
import {Row, Col, Menu, Dropdown, Icon, Divider, Button, Table, Input} from 'antd'
import './List.less'

export default class List extends React.Component {



    

    render() {
        const userList = (
            <Menu>
              <Menu.Item key="0">List 1</Menu.Item>
              <Menu.Item key="1">List 2</Menu.Item>
              <Menu.Divider />
              <Menu.Item key="3">List 3</Menu.Item>
            </Menu>
        );
        
        const recordAction = (
            <Menu>
                <Menu.Item key="0">Share</Menu.Item>
                <Menu.Item key="1">Delete</Menu.Item>
                <Menu.Item key="3">Hide</Menu.Item>
            </Menu>
        )

        const userListColumns = [
            {
              title: 'Status',
              dataIndex: 'Status',
              key: 'Status',
              render: Status => (
                  <Button><img src={Status === "finish" ? "/assets/icon/finished.svg" : "/assets/icon/unfinished.svg"}></img></Button>
              ),
            },
            {
              title: 'CheckList',
              dataIndex: 'CheckList',
              key: 'CheckList',
              render: CheckList => (
                <span>{CheckList}</span>
              )
            },
            {
              title: 'Event Date',
              dataIndex: 'Event',
              key: 'Event',
            },
            {
              title: 'Comment',
              key: 'Comment',
              dataIndex: 'Comment',
            },
            {
              title: 'Record',
              dataIndex: 'Record',
              key: 'Record',
              render: Record => (
                Record==null ? "" : <Button><img src="/assets/icon/userDoc.svg" /></Button> 
              ),
            },
            {
                title: 'Last Updated',
                key: 'Update',
                dataIndex: 'Update',
                render: Update => (
                    Update == null ? <Button>Upload</Button> : Update
                )
              },
          ];

        const requestedListData = [
            {
              key: '1',
              Status: 'finish',
              CheckList: 'Hepatitis A- Brand Unspecified',
              Event: '6/25/2020',
              Comment: 'Result: Negative',
              Record: "file name",
              Update: '7/5/2020'
            },
            {
                key: '2',
                Status: 'finish',
                CheckList: 'Hepatitis A- Brand Unspecified',
                Event: '6/25/2020',
                Comment: "",
                Record: null,
                Update: '7/5/2020'
            },
            {
                key: '3',
                Status: 'finish',
                CheckList: 'Hepatitis A- Brand Unspecified',
                Event: '6/25/2020',
                Comment: 'Result: Negative',
                Record: "file name",
                Update: '7/5/2020'
            },
            {
                key: '4',
                Status: 'finish',
                CheckList: 'Hepatitis A- Brand Unspecified',
                Event: '6/25/2020',
                Comment: 'Result: Negative',
                Record: "file name",
                Update: '7/5/2020'
            },
            {
                key: '5',
                Status: 'unfinish',
                CheckList: 'Hepatitis A- Brand Unspecified',
                Event: '6/25/2020',
                Comment: "",
                Record: null,
                Update: null
            },
            {
                key: '6',
                Status: 'unfinish',
                CheckList: 'Hepatitis A- Brand Unspecified',
                Event: '6/25/2020',
                Comment: "",
                Record: null,
                Update: null
            },
          ];
        
        const userRecordColumns = [
            {
                title: '#',
                dataIndex: 'Number',
                key: 'Number',
            },
            {
                title: 'Name',
                dataIndex: 'Name',
                key: 'Name',
            },
            {
                title: '',
                dataIndex: 'Action',
                key: 'Action',
                render: Action => (
                    <Dropdown overlay={recordAction} trigger={['click']}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            <Icon type="more" />
                        </a>
                    </Dropdown>
                ),
            },
        ];
        const requestedRecordData =[
            {
                key: '1',
                Number: '1',
                Name: 'Hepatitis A- Brand Unspecified',
                Action: ''
            },
            {
                key: '2',
                Number: '2',
                Name: 'Hepatitis A- Brand Unspecified',
                Action: ''
            },
            {
                key: '3',
                Number: '3',
                Name: 'Hepatitis A- Brand Unspecified',
                Action: ''
            },
            {
                key: '4',
                Number: '4',
                Name: 'Hepatitis A- Brand Unspecified',
                Action: ''
            },
            {
                key: '5',
                Number: '5',
                Name: 'Hepatitis A- Brand Unspecified',
                Action: ''
            },
            {
                key: '6',
                Number: '6',
                Name: 'Hepatitis A- Brand Unspecified',
                Action: ''
            },
            {
                key: '7',
                Number: '7',
                Name: 'Hepatitis A- Brand Unspecified',
                Action: ''
            },
            {
                key: '8',
                Number: '8',
                Name: 'Hepatitis A- Brand Unspecified',
                Action: ''
            }
        ];
        return (
            <div className="vaccination-list-style">
                <Row justify={"space-between"} className="vaccination-list">
                    <Col className="vaccination-list-card" span={16}>
                        <div className="vaccination-list-function">
                            <div className="vaccination-list-function-left">
                                <Dropdown overlay={userList} trigger={['click']}>
                                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                        Untitled List<Icon type="down" />
                                    </a>
                                </Dropdown>,
                            </div>
                            <div className="vaccination-list-function-right">
                                <Button>Create New List</Button>
                                <Divider className="vaccination-list-function-divider" type="vertical" />
                                <Button>Delete</Button>
                                <Divider className="vaccination-list-function-divider" type="vertical" />
                                <Button>Export</Button>
                            </div>
                        </div>
                        <div className="vaccination-list-filter">
                            <Button shape="circle"><img src="/assets/icon/Filter2.svg"></img></Button>
                        </div>
                        <div className="vaccination-list-table">
                            <Table 
                                columns={userListColumns} 
                                dataSource={requestedListData} 
                                pagination={false}
                                rowClassName = {(record, index) => 'vaccination-list-table-row-style'}
                            />
                        </div>
                        <div className="vaccination-list-add">
                            <Button shape="circle">
                                <img src="/assets/icon/Add2.svg"/>
                            </Button>
                        </div>
                    </Col>
                    <Col span={1}></Col>
                    <Col className="vaccination-record vaccination-list-card" span={7}>
                        <div className="vaccination-record-title">
                            My Record
                        </div>
                        <div className="vaccination-record-search">
                            <Input className="vaccination-record-search-input"/>
                            <Button shape="circle">
                                <img src="/assets/icon/Search.svg"/>
                            </Button>
                        </div>
                        <div className="vaccination-record-table">
                            <Table 
                                columns={userRecordColumns} 
                                dataSource={requestedRecordData} 
                                pagination={true}
                                rowClassName = {(record, index) => 'vaccination-record-table-row-style'}
                            />
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}