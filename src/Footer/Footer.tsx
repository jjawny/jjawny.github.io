import React, { useRef } from 'react';
import { useOnScreen } from '../Hooks/useOnScreen';
import './Footer.scss'

function Footer() {
    const footerRef = useRef<HTMLDivElement>(null); // DOM element to trigger useOnScreen hook
    const isOnScreen = useOnScreen(footerRef);

    return (
        <>
        <div className={`footer ${isOnScreen ? "fadeInOnView" : 'hide'}`}>
            <div className='elasticTopMidWrapperName'>
                <div className='elasticTopWrapperName'>
                    <div ref={footerRef} className='elasticTopName' />
                </div>
                <div className='elasticMidName' />
            </div>
            <div className='elasticBottomName' />
            <p>
                &copy; Johnny Madigan
                <br/>
                <a href="https://johnnymadigan.github.io/v1">V1</a>
                &nbsp;
                <a href="https://johnnymadigan.github.io/v2">V2</a>
            </p>
        </div>
        </>
    );
}

export default Footer;
