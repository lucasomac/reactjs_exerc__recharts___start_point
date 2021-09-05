import axios from "axios";
import qs from "qs";

const URL = "https://prog-iii-api.herokuapp.com/api/"
const URL_PROF = "https://pcn662vet2.execute-api.us-east-1.amazonaws.com/dev/"
const COURSE_BY_INSTITUICAO = "stat_qtd_cursos_por_instituicao/"
const DISCIPLINE_BY_TEACHER = "stat_qtd_disciplinas_por_professor/"
const TEACHER_BY_MARITAL_STATUS = ""
const DISAPPROVAL_BY_YEAR = ""

const apiLucas = axios.create({
    baseURL: URL,
    responseType: 'json',
    paramsSerializer: function (params) {
        return qs.stringify(params, { arrayFormat: 'brackets' });
    }
});

const apiProf = axios.create({
    baseURL: URL_PROF,
    responseType: 'json',
    // paramsSerializer: function (params) {
    //     return qs.stringify(params, { arrayFormat: 'brackets' });
    // }
});

export { apiLucas, apiProf, COURSE_BY_INSTITUICAO, DISCIPLINE_BY_TEACHER, TEACHER_BY_MARITAL_STATUS, DISAPPROVAL_BY_YEAR };