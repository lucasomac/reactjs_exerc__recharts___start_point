import React, { useEffect, useState } from 'react'
import { Cell, Pie, PieChart, Tooltip } from 'recharts'
import Loaging from './Loading'
import { getQtdTeacherByMaritalStatus } from './services/Call'
import { GlobalStyle, SForm, STitle } from './StyledComponents'

function GraphictQtdProfPorEstadoCivil() {
    type EstadoCivil = { ec: string, qtd: number }
    type StatQtdTeacherByMaritalStatus = EstadoCivil[]
    type ResponseTeacherByMaritalStatus = { data: { data: StatQtdTeacherByMaritalStatus } }
    const PIECOLORS = ['#346785', '#AC45FD', '#1010FF', '$FFCDA5']
    const [data, setData] = useState<StatQtdTeacherByMaritalStatus>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getStatQtdTeacherByMaritalStatus() {
            await getQtdTeacherByMaritalStatus().then((res: ResponseTeacherByMaritalStatus) => {
                let data = res.data.data
                let tmpData: EstadoCivil[] = []
                for (let index = 0; index < data.length; index++) {
                    tmpData.push({ ec: data[index].ec, qtd: parseInt(String(data[index].qtd)) })
                }
                setData(tmpData)
                setLoading(false)
            }).catch((err: any) => {
                return <h1>Erro!!! {err.message}</h1>
            })
        }
        getStatQtdTeacherByMaritalStatus()
    }, [])
    if (loading) {
        return <Loaging />;
    } else {
        return <>
            <GlobalStyle />
            <SForm>
                <STitle>Quantidade de Professores por estado Civil</STitle>
                <PieChart width={700} height={700}>
                    <Pie dataKey="qtd" isAnimationActive={true} data={data} cx="50%" cy="50%" outerRadius={80} fill="#8884D8" label={(entry) => `${entry.ec} - ${entry.qtd}`}>
                        {data.map((entry, index) => {
                            <Cell key={`cell-${index}`} fill={PIECOLORS[index % PIECOLORS.length]} />
                        })}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </SForm>

        </>
    }
}

export default GraphictQtdProfPorEstadoCivil