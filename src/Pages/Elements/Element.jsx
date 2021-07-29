import React from 'react';
import Modal from './Modal';

function Element(props) {
    
    const type = props.match.params.type;

    if (type === 'modal') { return ( <Modal/> ); }
}

export default Element;