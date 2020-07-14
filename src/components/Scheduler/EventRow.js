import React from 'react'
import './index.less'
import Event from './Event'

const EventRow = ({ resource, events, startMoment, endMoment, schedulerRow }) => {
    const headerCellWidth = schedulerRow.firstElementChild.offsetWidth;
    return (
        <div
            className="event-row"
            style={{
                position: "absolute",
                width: schedulerRow.offsetWidth - headerCellWidth,
                height: schedulerRow.offsetHeight,
                top: schedulerRow.offsetTop,
                left: schedulerRow.offsetLeft + headerCellWidth
            }}>
            {events && events.map((item) =>
                <Event
                    event={item}
                    resource={resource}
                    containerStartMoment={startMoment}
                    containerEndMoment={endMoment}
                    containerWidth={schedulerRow.offsetWidth - headerCellWidth}
                />
            )}
        </div>
    )
}

export default EventRow