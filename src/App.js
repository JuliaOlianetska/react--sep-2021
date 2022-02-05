import {useReducer} from "react";

import Form from "../src/components/form/Form";
import Cats from "../src/components/cats/Cats";
import Dogs from "../src/components/dogs/Dogs";
import "./App.css";

export default function App() {
    const reducer = (state, action) => {
        switch (action.type) {
            case 'addCat':
                return {...state, cats: [...state.cats, {id: new Date().getTime(), name: action.payload.cat}]}
            case'addDog':
                return {...state, dogs: [...state.dogs, {id: new Date().getTime(), name: action.payload.dog}]}
            case 'deleteCat':
                return {...state, cats:state.cats.filter(cat=>cat.id !== action.payload.id)}
            case 'deleteDog':
                return {...state, dogs:state.dogs.filter(dog=> dog.id !== action.payload.id)}
            default:
            return state
        }
    }

    const [{cats, dogs}, dispatch] = useReducer(reducer, {cats: [], dogs: []});

    return (
        <div>
            <Form dispatch={dispatch}/>

            <div className={'cats-dogs'}>
                <Cats cats={cats} dispatch={dispatch}/>
                <Dogs dogs={dogs} dispatch={dispatch}/></div>
        </div>
    );
}