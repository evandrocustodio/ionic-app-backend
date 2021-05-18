export interface  IAluno {
  nome: string,
  idade: number
}

export class Aluno {

}

export interface IProfessor extends Aluno {
  disciplina: string
}


export class Professor {

}