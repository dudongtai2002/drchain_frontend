import React from 'react'
import './index.less'

//TODO: This is a very rough mock up since the fields of event and resource are not decided yet
//      Need to refactor
const EventDetail = ({ event, resource }) => {
    if (event.status === 'done')
        return (
            <div className="event-detail-wrapper">
                <div className="event-detail-header">
                    <span className="dot done-ind"></span>
                    <span className="status-text">Done</span>
                    <a href="/#">Edit</a>
                </div>
                <p><span>Name:</span> {resource.name}</p>
                <p><span>Date:</span> {event.start.split(' ')[0]}</p>
                <p><span>Provider:</span> {event.provider}</p>
                <p><span>Detail:</span> {event.detail}</p>
            </div>
        )
    else if (event.status === 'todo')
        return (
            <div className="event-detail-wrapper">
                <div className="event-detail-header">
                    <span className="dot todo-ind"></span>
                    <span className="status-text">Todo</span>
                    <a href="/#">Upload</a>
                </div>
                <p><span>Name:</span> {resource.name}</p>
                <p><span>Requirement:</span> {event.requirement}</p>
            </div>
        )
    else
        return (
            <div className="event-detail-wrapper">
                <div className="event-detail-header">
                    <span className="dot overdue-ind"></span>
                    <span className="status-text">Overdue</span>
                    <a href="/#">Upload</a>
                </div>
                <p><span>Name:</span> {resource.name}</p>
                <p><span>Requirement:</span> {event.requirement}</p>
            </div>
        )
}

export default EventDetail