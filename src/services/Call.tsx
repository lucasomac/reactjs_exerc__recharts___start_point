import { apiProf, COURSE_BY_INSTITUICAO, DISAPPROVAL_BY_YEAR, DISCIPLINE_BY_TEACHER, TEACHER_BY_MARITAL_STATUS } from "./Service";


async function getQtdCoursesByInstitution() {
    return await apiProf.get(COURSE_BY_INSTITUICAO);
}
async function getQtdDisciplineByTeacher() {
    return await apiProf.get(DISCIPLINE_BY_TEACHER);
}
async function getQtdTeacherByMaritalStatus() {
    return await apiProf.get(TEACHER_BY_MARITAL_STATUS);
}
async function getQtdDisapprovalByYear() {
    return await apiProf.get(DISAPPROVAL_BY_YEAR);
}

export { getQtdCoursesByInstitution, getQtdDisciplineByTeacher, getQtdTeacherByMaritalStatus, getQtdDisapprovalByYear };
