import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import {requestStudents, setCurrentPage} from "../../redux/students-reducer";
import Students from "../students/Students";
import Paginator from "../paginator/Paginator";
import s from './table.module.css'
import SearchBlock from "../SearchBlock/SearchBlock";

const Table = (props) => {

    const [checkActive, setCheckActive] = useState(false)
    const [title, setTitle] = useState('')
    const [studentPerPage, setStudentPerPage] = useState(props.pageSize)
    const [sortClick, setSortClick] = useState(false)

    useEffect(() => {
        props.requestStudents(props.currentPage, studentPerPage, title)
    }, [props.currentPage, studentPerPage, title])

    const onChangeHandler = (e) => {
        setTitle(e.currentTarget.value)
        props.requestStudents(props.currentPage, studentPerPage, title)
    }

    const onSearchTitle = (text) => {
        setTitle(text)
        props.requestStudents(props.currentPage, studentPerPage, text)
    }

    const checkboxChanged = () => {
        setCheckActive(!checkActive)
    }

    let pages = [];
    for (let i = 1; i <= props.totalPages; i++) {
        pages.push(i)
    }

    const onPageChanged = (page) => {
        props.requestStudents(page, studentPerPage, title)
    }
    const studentPerPageChanged = (e) => {
        const selectedPage = e.target.value;
        setStudentPerPage(selectedPage)
    }

    const sortBy = (field) => {
        setSortClick(!sortClick)
        if(sortClick) {
            props.requestStudents(props.currentPage, studentPerPage, title, field, 1)
        }
        props.requestStudents(props.currentPage, studentPerPage, title, field, -1)
    }

    return (
        <div>
            <SearchBlock title={title}
                         onChangeHandler={onChangeHandler}
                         onSearchTitle={onSearchTitle}
                         students={props.students}
            />
            <Students students={props.students}
                      pageSize={props.pageSize}
                      currentPage={props.currentPage}
                      checkActive={checkActive}
                      checkboxChanged={checkboxChanged}
                      sortBy={sortBy}
                      sortClick={sortClick}
            />
            <div className={s.paginatorContainer}>
                <div className={s.selectContainer}>
                    <label>Rows per page: </label>
                    <select className={s.select}
                            onChange={studentPerPageChanged}
                            defaultValue="10"
                            value={studentPerPage}>
                        <option value="10" selected>10</option>
                        <option value="5">5</option>
                        <option value="3">3</option>
                    </select>
                </div>
                <Paginator pages={pages} currentPage={props.currentPage} onPageChanged={onPageChanged}/>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        students: state.studentsPage.students,
        pageSize: state.studentsPage.size,
        currentPage: state.studentsPage.currentPage,
        totalPages: state.studentsPage.totalPages
    }
}

export default compose(connect(mapStateToProps, {setCurrentPage, requestStudents}))(Table)