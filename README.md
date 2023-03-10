# Many Pills Calculator <img src="https://github.com/Lucasarkh/many-pills-calculator/blob/main/favicon.png" style="width: 40px; height: 40px;">

No dia a dia muitos clientes de hospital veterinário, humano ou farmácias tem dúvidas sobre a quantidade de comprimidos que está pedindo na receita. Exemplo: Dar 1/4 de comprimido a cada 8hrs durante 13 dias, quantos serão necessários? O Objetivo foi criar uma ferramenta para facilitar a resolução deste problema do mundo real.

## Tópicos

- [Visão Geral](#visão-Geral)
  - [O desafio](#o-desafio)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [Processo de criação](#processo-de-criação)
  - [Desenvolvido em](#desenvolvido-em)
  - [O que eu aprendi](#o-que-eu-aprendi)
  - [Próximos passos para aprender](#próximos-passos-para-aprender)
- [Autor](#autor)

## Visão geral

### O desafio

Principais desafios a serem superados:

- Funcionalidades envolvendo javaScript.
- Criação de elementos interativos utilizando a pseudo-classe hover.
- Design agradável e chamativo.
- utilização de classes Bootstrap.

### Screenshots

<p align="center"> Home page </p>
<p align="center">
  <img align="center" src="https://github.com/Lucasarkh/many-pills-calculator/blob/main/screenshots/home.png" width="800" title="home">
</p>

<p align="center"> Home page mobile </p>
<p align="center">
  <img align="center" src="https://github.com/Lucasarkh/many-pills-calculator/blob/main/screenshots/home_mobile.png" width="200" title="home mobile">
</p>

### Links

- Live Site URL: [GitHub Pages](https://lucasarkh.github.io/many-pills-calculator/)

## Processo de criação

### Desenvolvido em

- HTML5 Semântico
- Framework Bootstrap
- CSS customizado.
- JavaScript Puro.
- Versionado com Git e hospedado no GitHub Pages.

### O que eu aprendi

Criar funções com JavaScript, referenciar elementos do HTML no código Js e cálculos aritiméticos.

```function getValueComp() {
  var selectedValueComp = parseFloat(document.getElementById("comp").value);
  return selectedValueComp;
}

function getValueInterval() {
  var selectedValueInterval = parseFloat(
    document.getElementById("interval").value
  );
  return selectedValueInterval;
}

function getValueDays() {
  var selectedValueDays = parseFloat(document.getElementById("days").value);
  return selectedValueDays;
}

function calculate() {
  var multiply = parseFloat(
    getValueComp() * getValueDays() * getValueInterval()
  );

  if (isNaN(multiply)) {
    multiply = null;
  }
  document.getElementById("result").innerHTML = multiply;
}
```

### Próximos passos para aprender

Melhorar habilidades de desenvolvimento com Js.


## Autor

- LinkedIn - [Lucas Archanjo](https://www.linkedin.com/in/lucasarkh)
