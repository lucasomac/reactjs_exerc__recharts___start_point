import { apiProf, COURSE_BY_INSTITUICAO, DISCIPLINE_BY_TEACHER } from "./Service";


async function getQtdCoursesByInstitution() {
    return await apiProf.get(COURSE_BY_INSTITUICAO);
}
async function getQtdDisciplineByTeacher() {
    return await apiProf.get(DISCIPLINE_BY_TEACHER);
}

export { getQtdCoursesByInstitution, getQtdDisciplineByTeacher };
