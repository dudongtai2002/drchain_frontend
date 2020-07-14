import React from 'react'
import { Popover } from 'antd';
import moment from 'moment'
import EventDetail from './EventDetail'

import './index.less'

const Event = ({ event, resource, containerStartMoment, containerEndMoment, containerWidth }) => {
    const eventStartMoment = new moment(event.start);
    const eventEndMoment = new moment(event.end);
    const startPosition = (eventStartMoment - containerStartMoment) / (containerEndMoment - containerStartMoment) * containerWidth
    const endPosition = (eventEndMoment - containerStartMoment) / (containerEndMoment - containerStartMoment) * containerWidth
    return (
        <Popover 
            content={(
                <EventDetail event={event} resource={resource} />
            )}
            overlayClassName="event-popover"
        >
            <div
                className="event-container"
                style={{
                    left: startPosition,
                    width: endPosition - startPosition
                }}
            >
                <div className="event" style={{ backgroundColor: resource.color + "80" }}>
                    <div className={"event-indicator " + event.status + "-ind"} />
                    <div className="event-tag" style={{ backgroundColor: resource.color }}>{event.tag}</div>
                </div>
            </div>
        </Popover>
    )
}


export default Event