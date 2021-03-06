import React, {useState} from 'react';
import icon from './../../img/arrow-down-up.svg'
import iconUp from './../../img/sort-alpha-up.svg'
import iconDown from './../../img/sort-alpha-down.svg'
import chevronDown from './../../img/chevron-compact-down.svg'
import chevronUp from './../../img/chevron-compact-up.svg'
import style from './students.module.css'
import StudentDescription from "./student/StudentDescription";
import {identifyColor, identifyColorSpeed} from "./student/common/helper";


const Students = ({students, checkActive, checkboxChanged, sortBy, sortClick}) => {

    const [descriptionActive, setDescriptionActive] = useState(null)

    const showDescription = (i) => {
        if (descriptionActive === i) {
            return setDescriptionActive(null)
        }
        setDescriptionActive(i)
    }

    return (
        <div className='container'>
            <table className="table table-striped" style={{'marginTop': '10px'}}>
                <thead>
                <tr>
                    <th scope="col">
                        <input type='checkbox' onClick={checkboxChanged}/>
                    </th>
                    <th onClick={() => {
                        sortBy('name')
                    }} scope="col">
                        Name
                        <img src={sortClick ? iconDown : iconUp} alt='icon'/>
                    </th>
                    <th scope="col">
                        ID
                    </th>
                    <th onClick={() => {
                        sortBy('class')
                    }} scope="col">
                        Class
                        <img src={icon} alt='icon'/>
                    </th>
                    <th onClick={() => {
                        sortBy('score')
                    }} scope="col">
                        Av.Score, %
                        <img src={icon} alt='icon'/>
                    </th>
                    <th onClick={() => {
                        sortBy('speed')
                    }} scope="col">
                        Av.Speed
                        <img src={icon} alt='icon'/>
                    </th>
                    <th scope="col">
                        Parents
                    </th>
                </tr>
                </thead>
                <tbody>
                {students.map((s, i) => (
                    <>
                        <tr key={i}>
                            <th scope='row' style={{'width': '50px'}}>
                                <input type='checkbox'
                                       checked={checkActive}
                                       value={i}
                                /></th>
                            <td style={{'width': '350px'}}>{s.name}</td>
                            <td>{s.id}</td>
                            <td>{s.class}</td>
                            <td style={identifyColor(s.score)}>{s.score}</td>
                            <td style={identifyColorSpeed(s.speed)}>{s.speed}</td>
                            <td className={style.parents}>
                                {`${s.parents[0]}, ${s.parents[1]}`}
                                <img onClick={() => showDescription(i)}
                                     src={descriptionActive === i ? chevronUp : chevronDown}
                                     alt='icon'
                                     className={style.chevron}/>
                            </td>
                        </tr>
                        {descriptionActive === i ? <tr className={style.showContent}>
                            <td colSpan='7'>
                                <StudentDescription
                                    name={s.name}
                                    id={s.id}
                                    tests={s.tests}
                                    averageScore={s.score}
                                    speed={s.speed}
                                />
                            </td>
                        </tr> : null}
                    </>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Students;