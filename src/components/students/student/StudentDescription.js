import React from 'react';
import s from './studentDescription.module.css'
import Button from "./common/Button";
import TableInfo from "./tableInfo/TableInfo";
import iconRefresh from './../../../img/arrow-repeat.svg'
import iconCalendar from './../../../img/calendar2.svg'


const StudentDescription = ({name, id, tests, averageScore, speed}) => {

    return <div className={s.wrapper}>
        <div className={s.nameAndId}>
            <span className={s.student}>student: </span>
            <span className={s.studentName}>{name}</span>
            <span className={s.id}>id: </span>
            <span className={s.idValue}>{id}</span>
        </div>
        <div className={s.buttonGroup}>
            <Button name='ALL CONCEPTS'/>
            <Button name='ALL SCORES'/>
            <Button name='ALL SPEED'/>
            <input placeholder='SELECT PERIOD'/>
            <img src={iconCalendar} alt="calendar"/>
            <img src={iconRefresh} alt='refresh' className={s.refreshIcon}/>
        </div>
        <div className={s.tableWrapper}>
            <div className={s.line}/>
            <div className={s.info}>
                <div className={s.labels}>
                    <div className={s.scoreContainer}>
                        <span>score</span>
                        <span className={s.accuracyContainerBlue}>
                            <div className={s.circleBlue}/>
                            <span>90%+ accuracy</span>
                        </span>
                        <span className={s.accuracyContainerGreen}>
                            <div className={s.circleGreen}/>
                            <span>80 - 89% accuracy</span>
                        </span>
                        <span className={s.accuracyContainerYellow}>
                            <div className={s.circleYellow}/>
                            <span>50 - 79% accuracy</span>
                        </span>
                        <span className={s.accuracyContainerRed}>
                            <div className={s.circleRed}/>
                            <span>below 50% accuracy</span>
                        </span>
                    </div>
                    <div className={s.speedContainer}>
                        <span>speed</span>
                        <span className={s.accuracyContainerBlue}>
                            <div className={s.circleBlue}/>
                            <span>above expected</span>
                        </span>
                        <span className={s.accuracyContainerGreen}>
                            <div className={s.circleGreen}/>
                            <span>as expected</span>
                        </span>
                        <span className={s.accuracyContainerRed}>
                            <div className={s.circleRed}/>
                            <span>below expected</span>
                        </span>
                    </div>
                </div>
            </div>
            <TableInfo tests={tests} averageScore={averageScore} speed={speed}/>
        </div>
    </div>
};

export default StudentDescription;