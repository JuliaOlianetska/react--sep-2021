import React from 'react';

const Cat = ({cat: {id, name}, dispatch}) => {

const catDeleter = () => {
    dispatch ({type: 'deleteCat', payload: {id}})
}

    return (
        <div>
            {name}
            <button onClick={catDeleter}>DELETE</button>
        </div>
    );
};

export default Cat;