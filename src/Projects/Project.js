import React, { useState } from 'react';
import { Spinner } from 'reactstrap'

import './Project.css';

function Project(props) {
    // reset loaded state (to false) via props as the state does not reset upon re-renders (the point of state)
    // but in this special case, we want the state to be set to false again to display 
    // the loading wheel until image is loaded
    const [ loaded, setLoaded ] = useState(props.loaded);

   /* return an individual project */
   return (
    <> 
        {loaded? null : <Spinner color="dark">Loading...</Spinner>}
        <img style={loaded? {display: ""} : {display: "none"}} className='banner' src={props.banner} alt="Project banner" onLoad={() => (setLoaded(true))}/>
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