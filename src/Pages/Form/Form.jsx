import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Advanced from './Advanced';
import Basic from './Basic';

function Form(props) {

    const type = props.match.params.type;

    if (type === 'basic') { return ( <Basic/> ); }
    if (type === 'advanced') { return ( <Advanced/> ); }
    
}

export default Form;