import React, { Fragment } from 'react'
import './accountSettings.less'
import { Row, Col, Divider, Icon, Select } from 'antd'
//import { CaretDownOutlined, PlusSquareFilled, DeleteOutlined, MoreOutlined } from '@ant-design/icons';
const { Option } = Select;
export default class AccountSettings extends React.Component {
    render(){
        const accountSettings = [{
            institute: "UPMC",
            access: 1
        },
        {
            institute: "Anthem",
            access: 1
        },
        {
            institute: "WellCare",
            access: 1
        }]

        return (
        <div className="account-settings">
            <div className="settings-header">
                <span>Data Authorization</span>
                <Icon type="CaretDownOutlined" className="icon" />
                <Icon type="PlusSquareFilled" className="icon" />
            </div>
            <div className="settings-list">
                <Row className="settings-list-header">
                    <Col span="8">Institute</Col>
                    <Col span="10">Access</Col>
                    <Col span="6" />
                </Row>
                <Divider/>
                {accountSettings.map((item)=>(
                    <Row className="settings-list-row">
                        <Col span="8" className="institute">{item.institute}</Col>
                        <Col span="10">
                            <Select className="access-select" value={item.access}>
                                <Option key={0} value={0}>Read</Option>
                                <Option key={1} value={1}>Read & Edit</Option>
                            </Select>
                        </Col>
                        <Col span="6" className="operations">
                            <Icon type="DeleteOutlined" className="icon" />
                            <Icon type="MoreOutlined" className="icon" />
                        </Col>
                    </Row>
                ))}
                
            </div>
        </div>
        );
    }
}