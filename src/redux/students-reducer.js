import {studentsAPI} from "../api/api";

const SET_STUDENTS = 'SET-STUDENTS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';

const initialState = {
    students: [],
    size: 10,
    currentPage: 1,
    totalPages: 0
}

export const studentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STUDENTS:
            return {...state, students: action.students};
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_COUNT: {
            return {...state, totalPages: action.totalPages}
        }
        default:
            return state;
    }
}

export const setStudents = (students) => {
    return {
        type: SET_STUDENTS,
        students
    }
}

export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}

export const setTotalCount = (totalPages) => {
    return {
        type: SET_TOTAL_COUNT,
        totalPages
    }
}

export const requestStudents = (currentPage, size, searchText, sortBy, sortDir) => async (dispatch) => {
    dispatch(setCurrentPage(currentPage))
    let data = await studentsAPI.getStudents(currentPage, size, searchText, sortBy, sortDir)
    dispatch(setStudents(data.data.data))
    dispatch(setTotalCount(data.data.totalPages))
}
