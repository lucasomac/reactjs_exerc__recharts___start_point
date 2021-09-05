import React, { useEffect, useState } from 'react'
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import Loaging from './Loading'
import { getQtdDisapprovalByYear } from './services/Call'

function GraphictQtdReprovacoesPorAno() {
    type RepXAno = { ano: string, rep: number }
    type StatRepXAno = RepXAno[]
    type ResponseRepXAno = { data: { data: StatRepXAno } }
    const [data, setData] = useState<StatRepXAno>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getStatQtdRepPerYear() {
            await getQtdDisapprovalByYear().then((res: ResponseRepXAno) => {
                setData(res.data.data)
                setLoading(false)
            }).catch((err: any) => {
                return <h1>Erro!!! {err.message}</h1>
            })
        }
        getStatQtdRepPerYear()
    }, [])
    if (loading) {
        return <Loaging />;
    } else {
        return <>
            <LineChart width={700} height={250} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="ano" />
                <YAxis />
                <Tooltip />
                <CartesianGrid strokeDasharray="3 3" />
                <Line type="monotone" dataKey="qtdreprov" stroke="purple" activeDot={{ r: 12 }} />
            </LineChart>
        </>
    }
}

export default GraphictQtdReprovacoesPorAno