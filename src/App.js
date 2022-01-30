import {useReducer} from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case 'inc':
            return {...state, count1: state.count1 + 1}
        case 'dec' :
            return {...state, count1: state.count1 - 1}
        case 'reset':
            return {...state, count1: action.payload}
        case 'inc1':
            return {...state, count2: state.count2 + 1}
        case 'dec1' :
            return {...state, count2: state.count2 - 1}
        case 'reset1':
            return {...state, count2: action.payload}
        case 'inc2':
            return {...state, count3: state.count3 + 1}
        case 'dec2' :
            return {...state, count3: state.count3 - 1}
        case 'reset2':
            return {...state, count3: action.payload}
        default:
            throw new Error('My error')
    }
}

export default function App() {

    const [state, dispatch] = useReducer(reducer, {count1: 0, count2: 1000, count3: -100});


    return (
        <div>
            <div>{state.count1}</div>
            <button onClick={() => dispatch({type: 'inc'})}>Increment</button>
            <button onClick={() => dispatch({type: 'dec'})}>Decrement</button>
            <button onClick={() => dispatch({type: 'reset', payload: 0})}>Reset</button>
            <div>{state.count2}</div>
            <button onClick={() => dispatch({type: 'inc1'})}>Increment</button>
            <button onClick={() => dispatch({type: 'dec1'})}>Decrement</button>
            <button onClick={() => dispatch({type: 'reset1', payload: 1000})}>Reset</button>
            <div>{state.count3}</div>
            <button onClick={() => dispatch({type: 'inc2'})}>Increment</button>
            <button onClick={() => dispatch({type: 'dec2'})}>Decrement</button>
            <button onClick={() => dispatch({type: 'reset2', payload: -100})}>Reset</button>

        </div>
    );
}