// B.1. Definição dos dados (JSON)

const catalogo = [
    {
    "id": 7777,"titulo": "Legalmente Loira","tipo": "filme","ano": 2001,"generos": ["comédia", "romance"],"nota": 10,"assistido": true
    },
    {
    "id": 6660,"titulo": "Invocação do Mal","tipo": "filme","ano": 2013,"generos": ["terror"],"nota": 9,"assistido": true
    },
    {
    "id": 6967,"titulo": "Euphoria","tipo": "série", "ano": 2019,"generos": ["drama"],"nota": 5,"assistido": true
    },
    {
    "id": 1000,"titulo": "The Last of Us","tipo": "série","ano": 2023,"generos": ["drama", "ação"],"nota": NaN,"assistido": false
    }
];

// B.2. Acesso e leitura dos dados
console.log(catalogo);
console.log("O título do primeiro filme/série é: " + catalogo[0].titulo);
console.log("O ano do último filme/série é: " + catalogo[3].ano);
console.log("O terceiro filme/série possui apenas um gênero.");

// B.3. Iterações com iterators (tarefas)
catalogo.forEach(item => {
  console.log(`- [${item.tipo}] ${item.titulo} (${item.ano})`);
});
const titulosEmCaixaAlta = catalogo.map(item => item.titulo.toUpperCase());
console.log(titulosEmCaixaAlta);
const naoAssistidos = catalogo.filter(item => item.assistido === false);
console.log("O número de filmes não assistidos é: ", naoAssistidos.length);
const maiorQueNove = catalogo.find(item => item.nota >= 9);
if(maiorQueNove){
  console.log(`Título: ${maiorQueNove.titulo} | Nota: ${maiorQueNove.nota}`);
} else {
  console.log("Não há nenhum filme com nota maior que 9.");
};
const notasValidas = catalogo.filter(item => !isNaN(item.nota));
const somaGeral = notasValidas.reduce((acumulador, item) => acumulador + item.nota, 0);
const mediaGeral = somaGeral / notasValidas.length;
const assistidos = catalogo.filter(item => item.assistido === true);
const somaAssistidos = assistidos.reduce((acumulador, item) => acumulador + item.nota, 0);
const mediaAssistidos = somaAssistidos / assistidos.length;
console.log("Média dos assistidos: ", mediaAssistidos.toFixed(2));
const existeAntigo = catalogo.some(item => item.ano < 2000);
console.log("Há filmes de antes de 2000:", existeAntigo);
const todosTemGenero = catalogo.every(item => Array.isArray(item.generos) && item.generos.length > 0);
console.log("Todos tem pelo menos 1 gênero:", todosTemGenero);

// B.4. Saída na tela (DOM simples)
const qtdFilmes = catalogo.filter(item => item.tipo === "filme").length;
const qtdSeries = catalogo.filter(item => item.tipo === "série").length;
const ranking = [...notasValidas]
  .sort((a, b) => b.nota - a.nota)
  .slice(0, 3);
const output = document.getElementById("output");
output.innerHTML = `
  <h2>Resumo do Catálogo</h2>
  <p><strong>Total de itens:</strong> ${catalogo.length}</p>
  <p><strong>Filmes:</strong> ${qtdFilmes}</p>
  <p><strong>Séries:</strong> ${qtdSeries}</p>
  <p><strong>Não assistidos:</strong> ${naoAssistidos.length}</p>
  <p><strong>Média geral:</strong> ${mediaGeral.toFixed(2)}</p>
  <h3>Top 3 melhores avaliados</h3>
  <ol>
    ${ranking.map(item => `<li>${item.titulo} - ${item.nota}</li>`).join("")}
  </ol>
`;