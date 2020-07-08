import React from 'react'
import './index.less'
import {Button} from 'antd'

export default function PageHeader({title, icons = []}) {

    return (
        <div className="page-header-container">
            <div className="page-header">
                <span className="header-title">{title}</span>
                {
                    icons.map((icon) => 
                    (<Button className="button-icon" size={"large"} shape = "circle">
                        {icon}
                    </Button>))
                }
            </div>

           
        </div>
        
    )
}