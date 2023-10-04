import React from 'react';

import Facebook from '../../../assets/Facebook.svg';
import Instagram from '../../../assets/Instagram.svg';
import Github from '../../../assets/Github.svg';

function Footer() {
    return (
        <React.Fragment>
            <footer className='footer'>
                <div className='footer__navigation'>
                    <ul className='footer__list'>
                        <li className='footer__item'>
                            <a href='https://www.facebook.com/profile.php?id=100000451431595'>
                                <img className='footer__img' src={Facebook} alt='Facebook' />
                            </a>
                        </li>
                        <li className='footer__item'>
                            <a href='https://www.instagram.com/luke0619s/'>
                                <img className='footer__img' src={Instagram} alt='Instagram' />
                            </a>
                        </li>
                        <li className='footer__item'>
                            <a href='https://github.com/luke0619'>
                                <img className='footer__img' src={Github} alt='Github' />
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </React.Fragment>
    );
}

export default Footer;