import { useState } from 'react';

import './Slide.css';

function Slide(props) {
    // sides: true = show left, false = show right
    const [ side , setSide ] = useState(false);

    // last selected project to highlight
    const [highlight, setHighlight] = useState({});

    const selectHighlight = (project) => {
        setHighlight(project);
        setSide(currentSide => !currentSide);
    };
       
    return (
        <div className="project-container">
            <div className={`box boxA ${side? 'slideLeft' : ''}`}>
                {props.data.map((p) => (<button key={p.title} onClick={() => selectHighlight(p)}>{p.title}</button>))}
            </div>
            <div className={`box boxB ${!side? 'slideRight' : ''}`}>
                <button style={{float: "right"}} onClick={() => selectHighlight({})}>x</button>
                <img src={highlight.banner} alt="test"/>
                <h1>{highlight.title}</h1>
                <p>{highlight.desc}</p>
            </div>
        </div>
    );
}

export default Slide;