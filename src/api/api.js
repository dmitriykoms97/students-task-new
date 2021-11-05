import axios from "axios";

const instance = axios.create({
    baseURL: 'https://test-task-j.herokuapp.com/',
})

export const studentsAPI = {
    getStudents(page = 1, size = 10, searchText, sortBy, sortDir) {
        if(searchText) {
            return instance.get(`data?page=${page}&size=${size}&search=${searchText}`)
        } else if (sortBy && sortDir) {
            return instance.get(`data?page=${page}&size=${size}&sortBy=${sortBy}&sortDir=${sortDir}`)
        }
        return instance.get(`data?page=${page}&size=${size}`)
    }
}
