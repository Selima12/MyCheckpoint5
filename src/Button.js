import React from 'react';
function Button(props){
    return(
        <>
        <button onClick={props.onSimpleClick}>{props.name}</button>
        </>

    );
}

export default Button;

