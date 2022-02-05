import React from 'react';

const Dog = ({dog: {id, name}, dispatch}) => {

    const dogDeleter = () => {
      dispatch ({type: 'deleteDog', payload: {id}})
    }

    return (
        <div>
            {name}
            <button onClick={dogDeleter}>DELETE</button>
        </div>
    );
};

export default Dog;