import React from 'react'
import {Icon} from 'antd'

import './EventDetail.less'
const EventDetail = ({element, value}) => {
if (value != null) {
        return (
            <div className="event-detail-wrapper">
                <div className="event-detail-header">
                    <span><Icon type="heart" theme="filled" /></span>
                    <span className="category">{value.details[0].category}</span>
                    <a className="action" style={{float: 'right'}} href="/#">details</a>
                </div>
                <div className="event-detail-title">Date:</div>
                <div className="event-detail-content">{value.date}</div>
                <div className="event-detail-title">Institute:</div>
                <div className="event-detail-content">{value.details[0].Institute}</div>
                <div className="event-detail-title">Doctor:</div>
                <div className="event-detail-content">{value.details[0].Doctor}</div>
            </div>
        )
    }else {
        return false;
    }
}

export default EventDetail