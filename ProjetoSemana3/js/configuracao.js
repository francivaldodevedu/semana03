"use strict";
// PERSONALIZE AQUI: nomes e preços. Use ponto nos números, não vírgula.
const configuracao = {
    nomeLoja: "pALHA DE fOGO",
    nomeProduto: "Brasa Bacon",
    nomeQueijo: "Queijo extra",
    nomeBacon: "Bacon extra",
    precoProduto: 31.90,
    precoQueijo: 4,
    precoBacon: 5,
    // Destino autorizado por Luzardo para a demonstração da oficina.
    // Só configure um destino autorizado, com país + DDD + número, apenas dígitos.
    telefoneWhatsApp: "5586999883494"
};

// Catálogo: mantenha os IDs. O primeiro lanche usa os campos acima,
// sem copiar seu nome/preço para um segundo lugar.
configuracao.produtos = [
    { id: "brasa-bacon", get nome() { return configuracao.nomeProduto; },
      get preco() { return configuracao.precoProduto; },
      descricao: "Pão, hambúrguer, queijo e bacon.", imagem: "img/burger-bacon.svg" },
    { id: "classico", nome: "Clássico", preco: 24.90,
      descricao: "Pão, hambúrguer, queijo e salada.", imagem: "img/burger-classico.svg" },
    { id: "veggie", nome: "Veggie", preco: 27.90,
      descricao: "Pão, hambúrguer vegetal e salada. Os extras são opcionais.", imagem: "img/burger-veggie.svg" }
];

// Permite testar com Node sem exigir ferramentas para abrir o site.
if (typeof module !== "undefined" && module.exports) {
    module.exports = configuracao;
}
