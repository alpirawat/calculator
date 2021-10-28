import React from 'react';

const Output = (props) => {
    console.log('----------props.value', props.value)
    return (
        <div className="screen-row">
            <input type="text" readOnly value = {props.value}/>
        </div>
    )
}

export default Output;