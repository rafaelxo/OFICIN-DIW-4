/*
 * Antes de rodar, instalar:
 * 1) node.js (https://nodejs.org/en)
 * 2) npm install -g json-server
 * 3) Na raiz do projeto, criar "db/db.json":
{
  "cidades": [
    {
      "id": 1,
      "img": "img/be.png",
      "cidade": "Belo Horizonte",
      "estado": "MG",
      "populacao": 3800000
    },
    {
      "id": 2,
      "img": "img/sa.png",
      "cidade": "São Paulo",
      "estado": "SP",
      "populacao": 11800000
    },
    {
      "id": 3,
      "img": "img/ri.png",
      "cidade": "Rio de Janeiro",
      "estado": "RJ",
      "populacao": 5300000
    },
    {
      "id": 4,
      "img": "img/cu.png",
      "cidade": "Curitiba",
      "estado": "PR",
      "populacao": 1200000
    },
    {
      "id": 5,
      "img": "img/fo.png",
      "cidade": "Fortaleza",
      "estado": "CE",
      "populacao": 2100000
    }
  ]
}
 *  
 * Para rodar, executar o comando abaixo:
 * 4) json-server --watch db/db.json --port 3333
*/

const url = "https://840e3b36-3b07-447d-8dbe-779690c03fdd-00-1wprorg80se1x.worf.replit.dev";
const urlCidades = url + "/cidades"; 
console.log(urlCidades);
let cidades = [];

function carregarDadosJSONServer(funcaoImprimirDadosDoBancoDeDados) {
  fetch(urlCidades)
    .then(function(response) { return response.json(); })
    .then(function(dados) {
      //cidades = dados.cidades;
      cidades = dados;
      console.log('Dados carregados:');
      console.log(cidades);
      funcaoImprimirDadosDoBancoDeDados();
    })
}