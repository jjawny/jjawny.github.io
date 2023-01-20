import React, { useRef } from 'react';
import { useOnScreen } from '../Hooks/useOnScreen';
import './Bio.scss';

function Bio() {
    const bioRef = useRef(null);
    const isOnScreen = useOnScreen(bioRef);

    return (
        <div ref={bioRef} className={`bio-container ${isOnScreen ? "fadeInOnView" : "hide"}`}>
            <h2 className="noselect">who am i?</h2>
            <p >
                I'm a Software Developer currently working at eHealth Queensland on a portfolio of enterprise apps.
                <br/><br/>
                With my creative problem-solving skills and continuous learning-attitude, I believe I can bring value to any team.
                <br/><br/>
                My tools:
                <img src={'img/icons/dotnet.png'} alt='.NET'/>
                <img src={'img/icons/aspnet.png'} alt='ASP.NET'/>
                <img src={'img/icons/ef.png'} alt='Entity Framework'/>
                <img src={'img/icons/sqlserver.png'} alt='SQL Server'/>
                <img src={'img/icons/blazor.png'} alt='Blazor'/>
                <img src={'img/icons/react.png'} alt='React'/>
                <img src={'img/icons/redux.png'} alt='Redux'/>
                <img src={'img/icons/mui.png'} alt='Material UI'/>
                <img src={'img/icons/mudblazor.png'} alt='MudBlazor'/>
                <img src={'img/icons/bootstrap.png'} alt='Bootstrap'/>
                <img src={'img/icons/csharp.png'} alt='C#'/>
                <img src={'img/icons/js.png'} alt='JavaScript'/>
                <img src={'img/icons/ts.png'} alt='TypeScript'/>
                <img src={'img/icons/git.png'} alt='Git'/>
            </p>
        </div>
    );
}

export default Bio;
