import React, { useState } from 'react';
import useMediaQuery from "./useMediaQuery";
import ProjectCard from './ProjectCard';

import './Project.css'

function Project(props) {
    const [highlight, setHighlight] = useState({});

    const selectHighlight = (banner, title, desc) => {
        setHighlight({
            banner: banner,
            title: title,
            desc: desc
        });
    };

    // You can use any @media property
    const isMobile = useMediaQuery('(max-width: 900px)');

    /* another anonymous func within onClick to prevent immediate calling 
    see more: https://bobbyhadz.com/blog/react-too-many-re-renders-react-limits-the-number */
    return (
        <div className='flex-container'>
            <div className='project-name-container'>
                {props.data.map((p) => (<button key={p.title} onClick={() => selectHighlight(p.banner, p.title, p.desc)}>{p.title}</button>))}
            </div>
            <div className='project-info-container'>
                {
                    Object.keys(highlight).length !== 0 ? <ProjectCard banner={highlight.banner} title={highlight.title} desc={highlight.desc} /> : <></>
                }
            </div>
        </div>
    );
}

export default Project;