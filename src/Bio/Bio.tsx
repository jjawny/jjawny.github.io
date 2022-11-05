import React from 'react';
import './Bio.css';

function Bio() {
    return (
        <div className="bio-container">
            <div className='logoTopMidWrapper'>
                <div className='logoTopWrapper'>
                    <div className='logoTopBio'></div>
                </div>
                <div className='logoMidBio'></div>
            </div>
            <div className='logoBottomBio'></div>
            <p>
                I’m a Software Engineer with a bachelor’s degree in Computer Science, currently working at eHealth Queensland on a variety of enterprise apps.
                <br/><br/>
                With my creative problem-solving skills and continuous learning-attitude, I believe I can bring value to any team.
            </p>
        </div>
    );
}

export default Bio;
