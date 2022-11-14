import React, { useState } from 'react';
import Project from './Project';
import './Projects.scss';
import iBack from './iBack.png';
import { SingleProject, AllProjects } from '../Shared/types';

function Projects(props: AllProjects) {
    const [ side , setSide ] = useState(false); // set side to be in view: false = LEFT, true = RIGHT
    const [ loaded, setLoaded ] = useState(false); // banner image loading state
    const [ highlight, setHighlight ] = useState<SingleProject>({ // set selected project
        banner: undefined,
        title: undefined,
        desc: undefined,
        link: undefined,
        shields: undefined
    });

    // called when user selects a project to view (buttons) or back button...
    const selectHighlight = (selectedProject: SingleProject) => {

        // update highlight only if different from previous selection
        if (selectedProject !== highlight) {
            setLoaded(false);
            setHighlight(selectedProject);
        }

        setSide(currentSide => !currentSide);
    };

    return (
        <div className="d-flex" style={side ? {overflow: ''} : {overflow: 'hidden'}}>
            <div className={`both-sides left-side ${side ? 'slideLeft' : ''}`}>
                {/* LEFT-SIDE: list of project titles as buttons */}
                {props.projects.map((p: SingleProject) => (<button key={p.title} onClick={() => selectHighlight(p)}>{p.title}</button>))}
            </div>
            <div className={`both-sides right-side ${!side ? 'slideRight' : ''}`}>
                {/* RIGHT-SIDE: the current project selected */}
                <button className='w-100' style={{ textAlign: "right"}} onClick={() => selectHighlight(highlight)}>
                    <img src={iBack} alt='Go back' style={{height: "50px"}}/>
                </button>
                <Project {...highlight} loaded={loaded} setLoaded={setLoaded}/>
            </div>
        </div>
    );
}

export default Projects;
