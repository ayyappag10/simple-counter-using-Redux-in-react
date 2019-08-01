import React,{useState} from "react"
import {render} from "react-dom"
import Counters from "./Counters"
import store from "./store"
import RandomChild from "./RandomChild"

const App = ()=>{
    return(
        <div>
        <Counters
    value ={store.getState()}
    onIncrement1={()=>{store.dispatch({type:"INCREMENT", counterNo: 1})}}
    onDecrement1={()=>{store.dispatch({type:"DECREMENT", counterNo: 1})}} 
    onIncrement2={()=>{store.dispatch({type:"INCREMENT", counterNo: 2})}}
    onDecrement2={()=>{store.dispatch({type:"DECREMENT", counterNo: 2})}} 
    >        
    </Counters>
        <RandomChild></RandomChild>
        </div> )
}

//function to render the Counter functinoal component
const func = ()=>{render(<App/>, document.getElementById("root"))}

store.subscribe(func)
func()

