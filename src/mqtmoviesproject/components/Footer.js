import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons';

function Footer(){
    return(
        <div className="footercontainer">
            <div className="iconscontainer">
                <Link to=""><FontAwesomeIcon
                    icon={faFacebook}
                    color="#F5C518"
                    size="2x"
                    className="fbicon"
                /></Link>
                <Link to=""><FontAwesomeIcon
                    icon={faInstagram}
                    color="#F5C518"
                    size="2x"
                    className="instaicon"
                /></Link>
                <Link to=""><FontAwesomeIcon
                    icon={faTwitter}
                    color="#F5C518"
                    size="2x"
                    className="twittericon"
                /></Link>
            </div>
        </div>
    )
}

export default Footer;