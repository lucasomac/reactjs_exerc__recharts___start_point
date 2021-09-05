import { apiProf, COURSE_BY_INSTITUICAO } from "./Service";


async function getQtdCoursesByInstitution() {
    return await apiProf.get(COURSE_BY_INSTITUICAO);
}

export { getQtdCoursesByInstitution };
