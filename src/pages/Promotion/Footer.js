import React from 'react'

import './Footer.less'
import { Col } from 'antd';


export default class Footer extends React.Component {


    render() {
        return (
            <Col className="footer">
                <div>
                    <ul>
                        <li className="title">PRODUCT</li>
                        <li>Features</li>
                        <li>Enterprise</li>
                        <li>Security</li>
                        <li>Customer Stories</li>
                        <li>Pricing</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className="title">SLACK FOR TEAMS</li>
                        <li>Features</li>
                        <li>Features</li>
                        <li>Features</li>
                        <li>Features</li>
                        <li>Features</li>
                        <li>Features</li>
                        <li>Features</li>
                        <li>Features</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className="title">RESOURCES</li>
                        <li>Features</li>
                        <li>Features</li>
                        <li>Features</li>
                        <li>Features</li>
                        <li>Features</li>
                        <li>Features</li>
                        <li>Features</li>
                        <li>Features</li>
                        <li>Features</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className="title">COMPANY</li>
                        <li>Features</li>
                        <li>Features</li>
                        <li>Features</li>
                        <li>Features</li>
                        <li>Features</li>
                        <li>Features</li>
                    </ul>
                </div>
            </Col>
        );
    }
}