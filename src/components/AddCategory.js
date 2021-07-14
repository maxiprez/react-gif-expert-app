import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function AddCategory( { add } ) {


const[inputValue, setInputValue] = useState('');

const handleInputChange = (e)  => {
    setInputValue(e.target.value);
    //console.log(e.target.value)
}

//Funcion para prevenir que se actualice el navegador cuando hacemos enter
const handleSubmit = (e) => {
    e.preventDefault();

    if ( inputValue.trim().length > 2 ) {
        add( cats => [ inputValue, ...cats]  );
        setInputValue('');
    }    
}

    return (
      <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                />
      </form> 
       
    )
}


AddCategory.propTypes = {
    add: PropTypes.func.isRequired
}