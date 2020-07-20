import React from 'react'
import {Card, Pagination, Col} from 'antd'

import './Notification.less'
export default class Notification extends React.Component {

    render(){

        return (
            <Card className="notification" title="Notification" extra={<a><img src="/assets/icon/dashboard/notification.svg" alt="notify"/></a>}>
                <Card className="notification-card">
                    <Col span={2}><img src="/assets/icon/dashboard/warn.svg"/></Col>
                    <Col span={20}>
                        <div className="notification-card-name">Dr.Lothbrook</div>
                        <div className="notification-card-action">is requesting access to the following document</div>
                        <ul className="notification-card-name">
                            <li><a href="/#/dashBoard/details">05/23 Visit Summary</a></li>
                        </ul>
                    </Col>
                    <Col className="notification-card-option" span={2}><a><img src="/assets/icon/dashboard/option.svg"/></a></Col>
                </Card>

                <Card className="notification-card">
                    <Col span={2}><img src="/assets/icon/dashboard/warn.svg"/></Col>
                    <Col span={20}>
                        <div className="notification-card-name">Anthem</div>
                        <div className="notification-card-action">is requesting access to the following document</div>
                        <ul className="notification-card-name">
                            <li><a href="/#/dashBoard/details">04/16 Visit Summary</a></li>
                            <li><a href="/#/dashBoard/details">05/23 Visit Summary</a></li>
                            <li><a href="/#/dashBoard/details">07/18 Visit Summary</a></li>
                        </ul>
                    </Col>
                    <Col className="notification-card-option" span={2}><a><img src="/assets/icon/dashboard/option.svg"/></a></Col>
                </Card>

                <Card className="notification-card">
                    <Col span={2}><img src="/assets/icon/dashboard/warn.svg"/></Col>
                    <Col span={20}>
                        <div className="notification-card-name">Dr.Lothbrook</div>
                        <div className="notification-card-action">is requesting access to the following document</div>
                        <ul className="notification-card-name">
                            <li><a href="/#/dashBoard/details">05/23 Visit Summary</a></li>
                        </ul>
                    </Col>
                    <Col className="notification-card-option" span={2}><a><img src="/assets/icon/dashboard/option.svg"/></a></Col>
                </Card>
                <Pagination defaultCurrent={1} onChange="{onChange}" total={5} style={{textAlign: 'center'}}/>
            </Card>
        );
    }
}