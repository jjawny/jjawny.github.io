import React from 'react';

import './Project.css';

function Project(props) {
   /* return an individual project */
   return (
    <> 
        <img className='banner' src={props.banner} alt="Project banner"/>
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