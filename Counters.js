import React,{useState} from "react"
import {render} from "react-dom"
const Counters = ({value, onIncrement1, onDecrement1, onIncrement2, onDecrement2})=>{

    console.log(value)
    return(
        <div>
        <div>
            {value.count1}
            <div>
            <button
            onClick={onDecrement1}>
                -
            </button>
            <button
            onClick={onIncrement1}>
                +
            </button>
            </div>
        </div>
                <div>
                {value.count2}
                <div>
                <button
                onClick={onDecrement2}>
                    -
                </button>
                <button
                onClick={onIncrement2}>
                    +
                </button>
                </div>
            </div>
            </div>
    )
}

export default Counters;
