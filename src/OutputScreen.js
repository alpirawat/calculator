import React from 'react';
import Output from './Output.js';

const OutputScreen = (props) => {
    console.log('++', props)
    return (
        <div className="screen">
            <Output value = {props.question}/>
            <Output value = {props.answer}/>
        </div>
    )
}

export default OutputScreen;