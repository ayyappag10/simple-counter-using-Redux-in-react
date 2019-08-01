import {createStore} from "redux"
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

export default store;