import React from 'react';
import s from "./searchBlock.module.css";
import search from "../../img/search.svg";
import {CSVLink} from "react-csv";
import upload from './../../img/cloud-upload.svg'


const SearchBlock = ({onChangeHandler, title, onSearchTitle, students}) => {

    function pivot(students) {
        let mp = new Map();

        function setValue(a, path, val) {
            if (Object(val) !== val) {
                const pathStr = path.join('.');
                let i = (mp.has(pathStr) ? mp : mp.set(pathStr, mp.size)).get(pathStr);
                a[i] = val;
            } else {
                for (let key in val) {
                    setValue(a, key === '0' ? path : path.concat(key), val[key]);
                }
            }
            return a;
        }

        let result = students.map( obj => setValue([], [], obj) );
        return [[...mp.keys()], ...result];
    }

    function toCsv(arr) {
        return arr.map( row =>
            row.map ( val => isNaN(val) ? JSON.stringify(val) : +val ).join(',')
        ).join('\n');
    }

    const newArr = toCsv(pivot(students));

    const csvExport = {
        filename: 'Students.csv',
        data: newArr
    }

    return (
        <div className={s.container}>
            <h1>students</h1>
            <div>
                <input onChange={onChangeHandler}
                       value={title}
                       className={s.inputHeader}
                       placeholder='Enter Student Name, Parent or ID here'/>
                <img className={s.search} src={search} alt='search' onClick={() => onSearchTitle(title)}/>
            </div>
            <CSVLink {...csvExport} className={s.csvButton}><img src={upload} alt='upload'/>Export csv</CSVLink>
        </div>
    );
};

export default SearchBlock;