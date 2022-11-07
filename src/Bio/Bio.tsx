import React, { useRef } from 'react';
import { useOnScreen } from '../Hooks/useOnScreen';
import './Bio.scss';

function Bio() {
    const bioRef = useRef<HTMLParagraphElement>(null); // DOM element to trigger useOnScreen hook
    const isOnScreen = useOnScreen(bioRef);

    return (
        <>
        <div className="bio-container">
            <h2>who am i?</h2>
            <p ref={bioRef} className={isOnScreen ? "fadeInOnView" : 'hide'}>
                I’m a Software Engineer with a bachelor’s degree in Computer Science, currently working at eHealth Queensland on a variety of enterprise apps.
                <br/><br/>
                With my creative problem-solving skills and continuous learning-attitude, I believe I can bring value to any team.
            </p>
        </div>
        </>
    );
}

export default Bio;
