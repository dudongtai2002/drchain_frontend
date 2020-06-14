import React from 'react'
import './index.less'

export default function PageHeader({title}) {
    return (
        <div className="page-header-container">
            <div className="page-header">
                <span className="header-title">{title}</span>
            </div>
        </div>
        
    )
}