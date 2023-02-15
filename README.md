# Pokédex

Este é um projeto de uma Pokedex, criado como parte de um desafio técnico de uma empresa. Ele utiliza [Typescript](https://www.typescriptlang.org/), [React](https://pt-br.reactjs.org/) e [Vite](https://vitejs.dev/) para o front-end, [Jest](https://jestjs.io/pt-BR/) e [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) para testes e [ESLint](https://eslint.org/) para linting.

Pokémon é uma franquia de jogos eletrônicos, desenhos animados, filmes e uma variedade de outras mídias, criada no Japão em 1996. Ela gira em torno de criaturas fictícias chamadas Pokémon, que os jogadores capturam, treinam e usam para batalhar entre si. A franquia Pokémon é extremamente popular em todo o mundo, com milhões de jogadores, fãs e colecionadores.

A Pokédex é uma enciclopédia virtual de Pokémon. Ela contém informações detalhadas sobre cada criatura, incluindo suas habilidades, movimentos, estatísticas e evoluções. Na franquia Pokémon, a Pokédex é frequentemente usada pelos jogadores para ajudá-los a completar a coleção de Pokémon, bem como para aprender mais sobre essas criaturas incríveis.
<br>
<br>

## Rotas

O projeto possui as seguintes rotas:

- `/`: exibe a página inicial, onde os usuários podem ver cards de diferentes Pokémons. Os usuários também podem pesquisar por um Pokémon específico na barra de pesquisa.

- `/pokemon/:id`: exibe mais detalhes sobre um Pokémon específico com base em seu ID.

- `/favorites`: exibe todos os Pokémons favoritados pelo usuário.

- `/about`: exibe informações sobre o projeto e detalhes de contato.

- `*`: exibe uma página de erro caso o usuário acesse uma URL inválida.
<br>

## API
O projeto utiliza a [PokeAPI](https://pokeapi.co/) para buscar informações sobre os Pokémons. A  `PokeAPI` é uma API de código aberto que oferece diversas informações sobre os Pokémons, como suas habilidades, características, entre outras. A URL base da API é `https://pokeapi.co/api/v2/`, com várias variações disponíveis na documentação.

Para utilizar a `PokeAPI`, o projeto utiliza a biblioteca [Axios](https://axios-http.com/ptbr/docs/intro) para fazer as requisições HTTP para a API. As informações são retornadas em formato JSON e são processadas pelo projeto para serem exibidas nas páginas do site.
<hr>
<br>
<details>
  <summary><strong>Como instalar a Pokédex</strong></summary><br />

## Instalação 

<br>

- Clone o repositório `git@github.com:Rafael-Souza-97/pokedex.git`:

```bash
git clone git@github.com:Rafael-Souza-97/exchange-pokedex.git
```

<br>

- Entre na pasta do repositório que você acabou de clonar:

```bash
cd pokedex
```

<br>

 - Instale as depëndencias, caso necessário, com `npm install`:

```bash
npm install
```

<hr>

### Scripts

 - Execute os testes com `npm teste`:
  > Executará os testes unitários e testes de integração.
 
```bash
npm test
```

 - Execute a aplicação com  com `npm start`:
  > Executará a aplicação em modo de desenvolvimento.
 
```bash
npm start
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para visualiza-lo.


<hr>

### Contribuição

 Contribuições são sempre bem-vindas! Para contribuir com o projeto, siga as instruções abaixo:

 - Fork este repositório

> Crie uma nova branch com sua feature ou correção de bug:

```bash
git checkout -b sua-feature-ou-correcao
```

- Faça as alterações necessárias e commit as mudanças:

```bash
git commit -m "sua mensagem de commit"
```

- Envie suas alterações para seu repositório remoto:

```bash
git push origin sua-feature-ou-correcao
```

- Crie um `Pull Request` para o repositório original.

<hr>
<br>

</details>

<br>

## Autor

- [Rafael Souza](https://github.com/Rafael-Souza-97)

## Referências

 - [PokeAPI](https://pokeapi.co/)

## Tecnologias / Ferramentas utilizadas

- [Typescript](https://www.typescriptlang.org/)
- [React](https://pt-br.reactjs.org/)
- [ContextAPI](https://reactjs.org/docs/context.html)
- [Axios](https://axios-http.com/ptbr/docs/intro)
- [CSS 3](https://www.w3.org/Style/CSS/Overview.en.html)
- [JSX](https://pt-br.reactjs.org/docs/introducing-jsx.html)
- [React-Icons](https://react-icons.github.io/react-icons/)
- [ESLint](https://eslint.org/)
- [VsCode](https://code.visualstudio.com/)
- [Git](https://git-scm.com/) & [GitHub](https://github.com/)
- [Linux - Ubuntu](https://ubuntu.com/)

## Testes

- [React Testing Library - RTL](https://testing-library.com/docs/react-testing-library/intro/)
- [Jest](https://jestjs.io/pt-BR/)

## Site / Deploy

- https://rafael-pokedex-challenge.vercel.app/
