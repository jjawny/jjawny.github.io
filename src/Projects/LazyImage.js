import React, { useState } from 'react';
import { Spinner } from 'reactstrap';

import './LazyImage.css';

function LazyImage(props) {
    const [ loaded, setLoaded ] = useState(false);
    
    // Inspired by https://stackoverflow.com/a/59396181
    return (
        <>
            {loaded ? null : <Spinner animation="border" role="status"/>}
            <img 
                className='banner' 
                style={loaded ? {} : { display: 'none' }}
                src={props.src}
                onLoad={() => setLoaded(true)}
                alt="Project banner"
            />
        </>
    );
}

export default LazyImage;