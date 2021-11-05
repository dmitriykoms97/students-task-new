import React from 'react';
import s from './subHeader.module.css'
import icon from './../../img/caret-down-fill.svg'
import iconClose from './../../img/x.svg'

const SubHeader = () => {
    return (
        <div className={s.container}>
            <div className={s.showAll}>
                show all
                <i className="fas fa-caret-down" />
            </div>
            <div className={s.allGrades}>
                all grades
                <img src={icon} alt='icon'/>
            </div>
            <div className={s.allClasses}>
                all classes
                <img src={icon} alt='icon'/>
            </div>
            <div className={s.avScore}>
                av.score
                <img src={icon} alt='icon'/>
            </div>
            <div className={s.avSpeed}>
                av.speed
                <img src={icon} alt='icon'/>
            </div>
            <div className={s.allClasses}>
                all classes
                <img src={icon} alt='icon'/>
            </div>
            <div className={s.clean}>
                <img src={iconClose} alt='icon'/>
                clean all
            </div>
        </div>
    );
};

export default SubHeader;