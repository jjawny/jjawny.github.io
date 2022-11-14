import React from 'react';
import { Spinner } from 'reactstrap';
import { LoadedState } from '../Shared/types';

interface Image extends LoadedState {
    src: string | undefined
}

function LazyImage(props: Image) {

    // Inspired by https://stackoverflow.com/a/59396181
    // Uses state passed down from Projects > Project > LazyImage
    // State determines when image has loaded
    return (
        <>
            {props.loaded ? null : <Spinner animation="border" role="status"/>}
            <img
                className='img-fluid rounded-4'
                style={props.loaded ? {} : { display: 'none' }}
                src={props.src}
                onLoad={() => props.setLoaded(true)}
                alt="Project preview"
            />
        </>
    );
}

export default LazyImage;
