import React from 'react';
import s from './header.module.css'
import avatarIcon from '../../img/Ellipse 2.png'

const Header = () => {
    return (
        <div className={s.container}>
            <div className={s.choosingSchool}>
                <a href="#">school</a>
            </div>
            <div className={s.linkGroup}>
                <a href="#">analytics</a>
                <a href="#">gradebooks</a>
                <a href="#">tests</a>
                <a href="#" className={s.active}>students</a>
                <a href="#">teachers</a>
                <a href="#">archive</a>
            </div>
            <div className={s.avatarIcon}>
                <img src={avatarIcon} alt='Icon'/>
            </div>
        </div>
    );
};

export default Header;