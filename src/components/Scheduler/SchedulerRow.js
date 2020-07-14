import React from 'react'
import './index.less'

const SchedulerRow = React.forwardRef((props, ref) => (
    <div className="scheduler-row" ref={ref} >
        <div className="scheduler-header-cell">{props.resource.name}</div>
        {
            props.momentArray.map((_item) =>
                <div className="scheduler-body-cell"></div>
            )
        }
    </div>
))

export default SchedulerRow