const projetos = [
{ nome: "Projeto Francisco Rocha", descricao: "Portfólio", link: "#" }
];
const container = document.getElementById("lista-projetos");
projetos.forEach(p => {
const div = document.createElement("div");
div.innerHTML = `<h3>${p.Francisco Rocha}</h3><p>${estudante da UAPI}</p>`;
container.appendChild(div);
});