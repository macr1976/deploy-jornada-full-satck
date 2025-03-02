// tudo que se repete em várias páginas é um componente e vai ter:
// um arquivo .jsx e uma formatação no arquivo .css
// o header
// o main

// rafce React Arrow function component export
// const App = () => h1>Olá, Mundo!</h1>;};

//Nomeação de componentes
//PascalCase palavras juntas com a 1ª em maiucscula

// Nomeação de variavel, função, arquivo...
// camelCase 1ª palavra minuscula e as demais em maiuscula

//Nomeação de classes em css
// BEM Block Element Modifier nomes em minuscula e separados por 2 _ e 2-
// Blocks
// Elements
// Modifiers
// bloco__elemento--modificador
// header
// header__link
// header__link--small
// item-list__header
// kebab-case palavras separadas por -
// Nomes compostos são separados por -

// export default, posso importar qualquer nome e sem chaves
// export 'sem default', so pode importa com chaves e com o mesmo nome
//

// Tags <></> vazias em react se chamam fragment ou Fragmento

// Self closing tag
// <Header></Header>
// <Header/>

// element.style {
//   background-color: antiquewhite;
//   padding: 20px;
//   margin: 20px;
//   border: solid 5px black;
//   /* box-sizing: content-box; */
//   width: 500px;
// }

// Estruturas if else
// if (5 === "5") {
//   console.log("Iguais");
// } else {
//   console.log("Diferentes");
// }

// if ternário
// 5 === "5" ? console.log("Iguais") : console.log("Diferentes");
// {items === 5 ? (
//   <>
//     <SingleItem />
//     <SingleItem />
//   </>
// ) : (
//   <>
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//   </>
// )}

// {artist ? artist : "Artistas"} // operador ternário
// {artist ?? "Artistas"} // nullish coalescing operator

// const usado para valores constantes e imutáveis
// let usado para valores mutáveis
// var usado para valores mutáveis, mas não é recomendado

// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++; // i = i + 1;
// }

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// const array = [1, 2, 3, 4, 5];
// array.forEach((element) => {
//   console.log(element);
// });

// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]); // array[0], array[1], array[2], array[3], array[4]
// }

// array.map((element, index) => {
//   console.log(element);
// });

// Array(items).fill().map(() => 'SingleItem');

// template String
// {'${title}-${index}'} isso da erro pois usou ' aspa simples
// {`${title}-${index}`} isso é template string ` usou crase

// {artistArray
//   .filter((index) => index < items)
//   .map((currObj, index) => (
//     <SingleItem id={currObj.id} name={currObj.name} image={currObj.image} banner={currObj.banner} key={`${title}-${index}`} /> //forma longa de passar props
// ))}

// {...currObj} //forma curta de passar props

// react-router-dom {uselocation}
// console.log(useLocation());
// const pathname = useLocation().pathname;
// const { pathname } = useLocation();

// O react somente re-renderiza componentes quando alguma variavel de estado dele é alterada. Alterar variaveis locais não re-renderiza a tela
// let items = 5; // variavel local
// onClick={() => {items += 5);}} // mesmo aumentando a qtd de iten o react não mostra pois nao re-rendeiza a tela
// import React, { useState } from "react";
// const [items, setItems] = useState(5); // variavel definida como variavel de estado
// onClick={() => {setItems(items + 5);}}
