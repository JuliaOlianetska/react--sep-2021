import React from 'react';
import {useRef} from 'react';


const Form = ({dispatch}) => {
    const catRef = useRef();
    const dogRef = useRef();

    const form = (e) => {
        e.preventDefault();
        e.target.reset();
    }

const catSaver = () => {
dispatch ({type: 'addCat', payload: {cat:catRef.current.value}})

}
const dogSaver =() => {
        dispatch ({type: 'addDog', payload: {dog:dogRef.current.value}})
}

    return (
        <div>
            <form onSubmit={form}>
                <label>CATS <input type="text" placeholder={'cat'} ref={catRef}/></label>
                <button onClick={catSaver}>SAVE</button>
                <label>DOGS <input type="text" placeholder={'dog'} ref={dogRef}/></label>
                <button onClick={dogSaver}>SAVE</button>
            </form>



        </div>
    );
};

export default Form;