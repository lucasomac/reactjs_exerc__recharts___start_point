import React from 'react'
import GraphictQtdCursosPorInstituicao from './GraphictQtdCursosPorInstituicao'
import GraphictQtdDisciplinasPorProfessor from './GraphictQtdDisciplinasPorProfessor'
import GraphictQtdProfPorEstadoCivil from './GraphictQtdProfPorEstadoCivil'
import GraphictQtdReprovacoesPorAno from './GraphictQtdReprovacoesPorAno'

function App() {
    return <div>  
             <GraphictQtdCursosPorInstituicao/>
             <GraphictQtdDisciplinasPorProfessor/>
             <GraphictQtdProfPorEstadoCivil/>
             <GraphictQtdReprovacoesPorAno/>
           </div>  
}

export default App;