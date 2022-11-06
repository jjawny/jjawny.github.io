import React from 'react';
import './Project.scss';
import LazyImage from './LazyImage';
import { ILoadedState, ISingleProject } from '../Shared/typescript-interfaces';

function Project(props: ISingleProject & ILoadedState) {
   /* return an individual project */
   return (
    <>
        <LazyImage src={props.banner} loaded={props.loaded} setLoaded={props.setLoaded}/>
        <h1 className='project-title'>{props.title}</h1>
        {(props.shields !== undefined)? props.shields.map((s) => <img key={s} className='shield' src={s} alt="badge from shields.io"/>) : <></>}
        <p className='project-text'>
            {props.desc}
            {(props.link !== undefined)? (<>&nbsp;Link to repo <a href={props.link}>here</a>.</>) : <></>}
        </p>
    </>
   );
}

export default Project;
