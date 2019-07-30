import React,{useState} from "react"
import {render} from "react-dom"
import {createStore} from "redux"

const Counter = ({value, onIncrement, onDecrement})=>{

    // const [count, setCount] = useState(0)
    return(

        <div>
            {value}
            <div>
            <button
            onClick={onDecrement}>
                -
            </button>
            <button
            onClick={onIncrement}>
                +
            </button>
            </div>
        </div>
    )
}

//reducer function
const counter = (state=0, action) =>{
    switch(action.type)
    {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        default:
            return state;
    }
}

const store = createStore(counter)

//function to render the Counter functinoal component
const func = ()=>{render(<Counter 
    value ={store.getState()}
    onIncrement={()=>{store.dispatch({type:"INCREMENT"})}}
    onDecrement={()=>{store.dispatch({type:"DECREMENT"})}} 
    />, document.getElementById("root"))}

store.subscribe(func)
func()

