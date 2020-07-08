import React from 'react'
import {Row} from 'antd'
import PageHeader from './PageHeader'

import './index.less'

export default class Index extends React.Component {

    render() {

        return (
            <div className="vaccination-page">
                <Row>
                    <PageHeader />
                </Row>
                <Row>
                    {this.props.children}
                </Row>
            </div>
        );
    }
}