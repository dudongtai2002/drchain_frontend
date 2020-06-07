import React from 'react'
import './accountPlaceHolder.less'
import { Row, Divider } from 'antd'
import { FormOutlined } from '@ant-design/icons';

export default class AccountPlaceHolder extends React.Component {
    render(){
        return (
            <div className="account-place-holder">
                <Row className="info-header">
                    <span>Basic Info</span>
                    <FormOutlined className="edit-icon"/>
                    </Row>
                <Divider/>
            </div>  
        );
    }
}