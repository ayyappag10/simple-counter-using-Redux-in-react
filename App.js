import React,{useState} from "react"
import {render} from "react-dom"
import {createStore} from "redux"

const Counter = ({value, onIncrement, onDecrement})=>{

    console.log(value)
    // const [count, setCount] = useState(0)
    return(
        <div>
        <div>
            {value.count1}
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
                <div>
                {value.count2}
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
            </div>
    )
}

//reducer function
const counter = (state = {count1: 0, count2: 0}, action) =>{
    console.log(state, typeof(state), action)
    switch(action.type)
    {
        case "INCREMENT":
                if(action.counterNo == 1)
                return Object.assign({}, state, {count1: state.count1 + 1});
                else if(action.counterNo == 2)
                return Object.assign({}, state, {count2: state.count2 + 1});
        case "DECREMENT":
                if(action.counterNo == 1)
                return Object.assign({}, state, {count1: state.count1 - 1});
                else if(action.counterNo == 2)
                return Object.assign({}, state, {count2: state.count2 - 1});
        default:
            return state;
    }
}

const store = createStore(counter)

//function to render the Counter functinoal component
const func = ()=>{render(<Counter 
    value ={store.getState()}
    onIncrement={()=>{store.dispatch({type:"INCREMENT", counterNo: 1})}}
    onDecrement={()=>{store.dispatch({type:"DECREMENT", counterNo: 2})}} 
    />, document.getElementById("root"))}

store.subscribe(func)
func()

