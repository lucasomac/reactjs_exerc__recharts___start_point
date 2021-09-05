import React, { useEffect, useState } from 'react'
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts'
import Loaging from './Loading'
import { getQtdCoursesByInstitution } from './services/Call'
import { GlobalStyle, SForm, STitle } from './StyledComponents'

function GraphictQtdCursosPorInstituicao() {
    type Course = { inst: string, qtd: number }
    type StateQtdCourseByIntitution = Course[]
    type ResponseCourseByInstitution = { data: { data: StateQtdCourseByIntitution } }
    const [dataQtdCourseByInstitution, setDataQtdCourseByInstitution] = useState<StateQtdCourseByIntitution>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getStatQtdCourseByIntitution() {
            await getQtdCoursesByInstitution().then((res: ResponseCourseByInstitution) => {
                setDataQtdCourseByInstitution(res.data.data)
                setLoading(false)
            }).catch((err: any) => {
                return <h1>Erro!!! {err.message}</h1>
            })
        }
        getStatQtdCourseByIntitution()
    }, [])
    if (loading) {
        return <Loaging />;
    } else {
        return <>
            <GlobalStyle />
            <SForm>
                <STitle> Quatidade de Cursos ccatalogdos por Instituicao</STitle>
                <BarChart width={600} height={600} data={dataQtdCourseByInstitution} reverseStackOrder={true}>
                    <XAxis dataKey="inst" stroke="#B49" />
                    <YAxis />
                    <Tooltip />
                    <CartesianGrid stroke="#CCC" strokeDasharray="S S" />
                    <Bar dataKey="qtd" fill="red" barSize={30} />
                </BarChart>
            </SForm>
        </>
    }
}

export default GraphictQtdCursosPorInstituicao;