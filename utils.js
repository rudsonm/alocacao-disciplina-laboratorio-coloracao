Array.prototype.last = () => {
	if(this.length)
		return this[this.length-1];
	return null;
}

function Swap(a, b) {
	[a, b] = [b, a];
}

function obterValorAvaliacao(laboratorio, disciplina, pesoRecurso, pesoOcupacao) {
	let recursosAtendidos = disciplina.recursos.filter(d => laboratorio.recursos.some(l => l === d)).length;
	let recursos = pesoRecurso * (disciplina.recursos.length - recursosAtendidos);
	let fragmentacao = pesoOcupacao * Math.abs(laboratorio.capacidade - disciplina.alunos);	
	// penaliza quando excede capacidade do laboratorio
	if(disciplina.alunos > laboratorio.capacidade)
		fragmentacao = Math.pow(fragmentacao, 2);
	return (recursos + fragmentacao) / (pesoRecurso + pesoOcupacao);
}

function obterMelhorLaboratorioParaDisciplina(disciplina, laboratorios, pesoRecurso, pesoOcupacao) {
	let melhorLaboratorio = {
		indice: null,
		contribuicao: Infinity
	}
	for(let i = 0; i < laboratorios.length; i++) {
		let laboratorio = laboratorios[i];
		let contribuicao = obterValorAvaliacao(laboratorio, disciplina, pesoRecurso, pesoOcupacao);		
		if(contribuicao < melhorLaboratorio.contribuicao) {
			melhorLaboratorio.contribuicao = contribuicao;
			melhorLaboratorio.indice = i;
		}
	}
	return melhorLaboratorio;
}

function obterSolucaoAleatoria(instancia) {
    let solucao = new Solucao(instancia.disciplinas.length, instancia.laboratorios.length);
    for(let i = 0; i < solucao.alocacoes.length; i++) {
        let laboratorio;
        do {
            laboratorio = Math.round(Math.random() * (instancia.laboratorios.length - 1));
        } while(solucao.usoLaboratorios[laboratorio] >= instancia.aulasPorSemana);
        solucao.alocacoes[i] = laboratorio;
        solucao.usoLaboratorios[laboratorio]++;
        solucao.qualidade += obterValorAvaliacao(instancia.laboratorios[laboratorio], instancia.disciplinas[i], instancia.pesoAlunos, instancia.pesoRecurso);
    }
    return solucao;
}

let obterVizinhos = (origem, matriz) => matriz[origem].map((v, i) => [i, v]).filter(v => v[1] > 0).map(v => v[0]);