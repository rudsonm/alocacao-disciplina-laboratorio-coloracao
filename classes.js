class Disciplina {
	constructor(curso, semestre, alunos, recursos = [], nome = null, ocupacao = 1) {
		this.curso = curso;
		this.semestre = semestre;
		this.nome = nome;
		this.ocupacao = ocupacao;
		this.alunos = alunos;
		this.recursos = recursos;
	}
}

class Laboratorio {
	constructor(capacidade, recursos = [], nome = null) {
		this.nome = nome;
		this.capacidade = capacidade;
		this.recursos = recursos;
	}
}

class Instancia {
	constructor(disciplinas, laboratorios, qtdDiasAulas = 5, pesoRecurso = 2, pesoAlunos = 1) {
		this.disciplinas = disciplinas;
		this.laboratorios = laboratorios;
		this.pesoRecurso = pesoRecurso;
		this.pesoOcupacao = pesoAlunos;
		this.qtdDiasAulas = qtdDiasAulas;
	}
}

class Solucao {
	constructor(qtdDisciplinas, qtdLaboratorios) {
		this.qualidade = 0;
		this.alocacoes = new Array(qtdDisciplinas);
		this.usoLaboratorios = new Array(qtdLaboratorios).fill(0);
	}
}