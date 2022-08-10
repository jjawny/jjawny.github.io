import './Nav.css'

import GitHubIcon from './icon-github.png';
import LinkedInIcon from './icon-linkedin.gif';
import MailIcon from './icon-mail.png';

function Nav() {
    return (
        <div>
            <ul>
                <li><a href='https://github.com/johnnymadigan'><img src={GitHubIcon} alt='GitHub'/>GitHub</a></li>
                <li><a href='https://www.linkedin.com/in/johnnymadigan/'><img src={LinkedInIcon} alt='LinkedIn'/>LinkedIn</a></li>
                <li><a href='mailto:johnny.madigan@icloud.com'><img src={MailIcon} alt='Email'/>Email</a></li>
            </ul>
            <h2>johnny madigan</h2>
        </div>
    );
}

export default Nav;