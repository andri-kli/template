import React from 'react';
import Loading from './Loading';
import Modal from './Modal';
import Pagination from './Pagination';
import Spinner from './Spinner';
import Toast from './Toast';

function Element(props) {
    
    const type = props.match.params.type;

    if (type === 'modal') { return ( <Modal/> ); }
    else if (type === 'spinner') { return ( <Spinner/> ); }
    else if (type === 'pagination') { return ( <Pagination/> ); }
    else if (type === 'toast') { return ( <Toast/> ); }
    else if (type === 'loading-overlay') { return ( <Loading/> ); }
}

export default Element;