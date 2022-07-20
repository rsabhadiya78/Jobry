import React from 'react'

const SecHead = (props) => {
    return (
        <div className={props.headversion}>
            <h2>{props.title}</h2>
            <span>{props.text}</span>
        </div>
    )
}

export default SecHead