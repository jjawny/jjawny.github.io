import React from 'react';
import { Spinner } from 'reactstrap';

import './LazyImage.css';

import { ILoadedState } from '../common-interfaces';

interface IImage extends ILoadedState {
    src: string | undefined
}

function LazyImage(props: IImage) {

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