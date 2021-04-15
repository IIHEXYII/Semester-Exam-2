import React from 'react'

export default function Title({title}) {
    return (
        <div className="section-title">
            <h2 className="section-title__h2">{title}</h2>
            <div className="section-title__div" />
        </div>
    )
}
