import React from 'react';
import s from './tableInfo.module.css'
import {identifyColor, identifyColorSpeed} from "../common/helper";



const TableInfo = ({tests, averageScore, speed}) => {

    console.log(averageScore)

    return (
        <div>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Test Label</th>
                    <th scope="col">Score</th>
                    <th scope="col">Speed</th>
                    <th scope="col">Total Q-ns</th>
                    <th scope="col">Exp.Speed</th>
                    <th scope="col">Concept</th>
                    <th scope="col">Date</th>
                    <th scope="col">Absent</th>
                </tr>
                </thead>
                <tbody>
                {tests.map((t, i) => <tr>
                    <th scope="row">{i+1}.</th>
                    <td style={{'width': '250px'}}>{t.label}</td>
                    <td className={s.score} style={identifyColor(t.score)}>{t.score ? t.score : '-'}</td>
                    <td className={s.score} style={identifyColorSpeed(speed)}>{t.speed ? t.speed : '-'}</td>
                    <td style={{'width': '150px'}}>{t.total}</td>
                    <td style={{'width': '150px'}}>{t.expSpeed}</td>
                    <td style={{'width': '150px'}}>{t.concept}</td>
                    <td>{t.date}</td>
                    <td style={{'textAlign': 'center'}}><input type='checkbox' checked={t.absent}/></td>
                </tr>)}
                </tbody>
            </table>
            <div className={s.line}/>
            <div className={s.footerBlock}>
                <p className={s.average}>average</p>
                <p className={s.averageScore} style={identifyColor(averageScore)}>{averageScore}</p>
                <p className={s.averageSpeed} style={identifyColorSpeed(speed)}>{speed}</p>
            </div>
        </div>
    );
};

export default TableInfo;