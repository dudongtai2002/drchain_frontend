import React from 'react'
import { Card, Divider } from 'antd';
import './index.less'

export default function PageHeader({title}) {
    return (
        <Card className="cardWrap" bordered={false} bodyStyle={{padding: "24px 0"}}>
            <div className="page-header">
                <span className="header-title">{title}</span>
            </div>
        </Card>
        
    )
}