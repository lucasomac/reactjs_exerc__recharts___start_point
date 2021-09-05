import React, { useEffect, useState } from 'react'
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts'
import Loaging from './Loading'
import { getQtdDisciplineByTeacher } from './services/Call'
import { GlobalStyle, SForm, STitle } from './StyledComponents'

function GraphictQtdDisciplinasPorProfessor() {
    type DiscXProf = { prof: string, qtd: number }
    type StateDiscXProf = DiscXProf[]
    type ResponseDiscXProf = { data: { data: StateDiscXProf } }
    const [data, setData] = useState<StateDiscXProf>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getStatQtdDisciplineXTeacher() {
            await getQtdDisciplineByTeacher().then((res: ResponseDiscXProf) => {
                setData(res.data.data)
                setLoading(false)
            }).catch((err: any) => {
                return <h1>Erro!!! {err.message}</h1>
            })
        }
        getStatQtdDisciplineXTeacher()
    }, [])
    if (loading) {
        return <Loaging />;
    } else {
        return <> <GlobalStyle />
            <SForm>
                <STitle> Quantidade de Disciplinas por professor</STitle>
                <BarChart layout="vertical" width={700} height={700} data={data} margin={{ top: 0, right: 20, bottom: 0, left: 20 }}>
                    <YAxis dataKey="prof" type="category" width={200}/>
                    <XAxis type="number"/>
                    <Tooltip />
                    <CartesianGrid stroke="#CCC" strokeDasharray="S S" />
                    <Bar dataKey="qtd" fill="gray" barSize={30} />
                </BarChart>
            </SForm>
        </>
    }
}
export default GraphictQtdDisciplinasPorProfessor