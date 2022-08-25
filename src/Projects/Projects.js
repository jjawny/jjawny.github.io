import React, { useState } from 'react';

import iBack from './iBack.png';
import Project from './Project';

import './Projects.css';

function Projects(props) {
    // sides: true = show left, false = show right
    const [ side , setSide ] = useState(false);

    // last selected project to highlight
    const [ highlight, setHighlight ] = useState({});

    // called when user selects a project to view (button)...
    // switching sides and showing the currently highlighted project
    const selectHighlight = (project) => {
        // only update highlight if there was a change to save resources/loading time
        if (highlight !== project) {
            setHighlight(project);
            console.log("Changed highlight");
        }
        setSide(currentSide => !currentSide);
    };

    // Projects titles are mapped as a list of buttons (LEFT), with a event listener that changes the current highlighted project.
    // The project that is currently highlighted is displayed (RIGHT), with another inner map for each shield/badge.
    return (
        <div className="projects-container" >
            <div className={`both-sides left-side ${side? 'slideLeft' : ''}`}>
                {props.projects.map((p) => (<button key={p.title} onClick={() => selectHighlight(p)}>{p.title}</button>))}
            </div>
            <div className={`both-sides right-side ${!side? 'slideRight' : ''}`}>
                <button style={{width: "100%", textAlign: "right"}} onClick={() => selectHighlight(highlight)}><img src={iBack} alt='Go back' className='back-button'/></button>
                <Project {...highlight}/>
            </div>
        </div>
    );
}

export default Projects;