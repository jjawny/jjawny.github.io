import React from 'react';
import { Spinner } from 'reactstrap';

import './LazyImage.css';

function LazyImage(props) {
    
    // Inspired by https://stackoverflow.com/a/59396181
    // Uses state passed down from Projects > Project > LazyImage
    // State determines when image has loaded
    return (
        <>
            {props.loaded ? null : <Spinner animation="border" role="status"/>}
            <img 
                className='banner' 
                style={props.loaded ? {} : { display: 'none' }}
                src={props.src}
                onLoad={() => props.setLoaded(true)}
                alt="Project preview"
            />
            
        </>
    );
}

export default LazyImage;