import React from 'react';
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='logoTopMidWrapperName'>
            <div className='logoTopWrapperName'>
                <div className='logoTopName'></div>
            </div>
            <div className='logoMidName'></div>
        </div>
        <div className='logoBottomName'></div>
            <p>
                Copyright &copy; Johnny Madigan. All rights reserved.<br/>
                <a href="https://johnnymadigan.github.io/v1">V1</a>&nbsp;
                <a href="https://johnnymadigan.github.io/v2">V2</a><br/><br/>
            </p>
        </div>
    );
}

export default Footer;