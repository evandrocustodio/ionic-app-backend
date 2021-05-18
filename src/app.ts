import express, { Response, Request } from 'express';
import cors from 'cors';
const app = express();
app.use(express.json());
app.use(cors());


app.post('/autenticar', (req: Request, res: Response) => {

  const { usuario, senha } = req.body;

  if ((usuario != 'admin') || (senha != 'teste')) {

    return res.status(404).json({ 'erro': 'Senha ou usuário inválido' });

  } else {

    return res.status(200).json({"mensagem":"Usuario autenticado com sucesso !!!!"});
  }

});

/*

const itensPedido = [];

const alunos = [
   {
     nome: "JOAO",
     idade: 20
   },
   {
     nome:"AMALIA",
     idade: 21
   }
];

// LISTA ALUNOS
app.get('/alunos', (req: Request, res:Response)  =>{
  return res.json(alunos);
});

// LISTA ALUNOS PELO NOME
app.get('/alunos/:nome', (req: Request, res:Response)  =>{

  const nomePesquisa = req.params.nome;

  const alunosFiltrados = alunos.filter((aluno)=> aluno.nome.toUpperCase().includes(nomePesquisa.toUpperCase()))
  //aluno.nome.toUpperCase() === nomePesquisa.toUpperCase());

  return res.json(alunosFiltrados);

})

app.delete('/alunos/:nome', (req: Request, res:Response)  =>{

  const nomeExcluir = req.params.nome;

  const alunosFiltrados = alunos.filter((aluno)=> aluno.nome.toUpperCase() === nomeExcluir.toUpperCase());

  alunosFiltrados.forEach( aluno => {
    const posicao = alunos.indexOf(aluno);
    if (posicao > -1) {
      alunos.splice(posicao, 1);
    }
  });
  return res.json(alunos);
})

// CRIA UM NOVO ALUNO
app.post('/alunos', (req: Request, res:Response)  =>{  
  const novoAluno = req.body;
  alunos.push(novoAluno);
   return res.json(alunos);
})

*/


app.listen(5000, () => {
  return console.log("SERVIDOR NO AR na porta 5000.")
});