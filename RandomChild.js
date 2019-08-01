import React from "react"
import store from "./store"

const RandomChild = ()=>{
    return(
        <div>
            <h3>random component using above values from common redux store</h3>
            <div>
            {store.getState().count1}
            </div>
            <div>
            {store.getState().count2}
            </div>
        </div>
    )
}

export default RandomChild;