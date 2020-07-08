import React from 'react'
import './accountPlaceHolder.less'
import { Icon, Row, Divider } from 'antd'
//import { FormOutlined } from '@ant-design/icons';

export default class AccountPlaceHolder extends React.Component {
    render(){
        return (
            <div className="account-place-holder">
                <Row className="info-header">
                    <span>Basic Info</span>
                    <Icon type="form" className="edit-icon"/>
                    </Row>
                <Divider/>
            </div>  
        );
    }
}