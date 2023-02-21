# Pokédex

Este é um projeto de uma Pokédex, criado como parte de um desafio técnico de uma empresa. Ele utiliza [Typescript](https://www.typescriptlang.org/), [React](https://pt-br.reactjs.org/) e [Vite](https://vitejs.dev/) para o front-end, [Jest](https://jestjs.io/pt-BR/) e [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) para testes e [ESLint](https://eslint.org/) para linting. Este projeto continuará tendo atualizações.

Pokémon é uma franquia de jogos eletrônicos, desenhos animados, filmes e uma variedade de outras mídias, criada no Japão em 1996. Ela gira em torno de criaturas fictícias chamadas Pokémon, que os jogadores capturam, treinam e usam para batalhar entre si. A franquia Pokémon é extremamente popular em todo o mundo, com milhões de jogadores, fãs e colecionadores.

A Pokédex é uma enciclopédia virtual de Pokémon. Ela contém informações detalhadas sobre cada criatura, incluindo suas habilidades, movimentos, estatísticas e evoluções. Na franquia Pokémon, a Pokédex é frequentemente usada pelos jogadores para ajudá-los a completar a coleção de Pokémon, bem como para aprender mais sobre essas criaturas incríveis.

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

<br>

## Context API
O [ContextAPI](https://reactjs.org/docs/context.html) é uma das funcionalidades do [React](https://pt-br.reactjs.org/) que permite compartilhar dados entre componentes sem precisar passar `props` manualmente em cada nível da árvore de componentes. Vantagens do [ContextAPI](https://reactjs.org/docs/context.html):

- Reduz a necessidade de passar `props` manualmente em cada nível da árvore de componentes, tornando o código mais limpo e fácil de ler.
- Permite compartilhar dados em toda a árvore de componentes sem precisar se preocupar com a hierarquia dos componentes.
- Facilita a criação de temas personalizados, permitindo que os componentes tenham acesso a um tema global sem a necessidade de passá-lo manualmente em cada componente.
- Ajuda a manter o estado da aplicação em um único lugar, tornando mais fácil a manipulação e a atualização dos dados.
- Permite o uso de múltiplos contextos em uma única aplicação, tornando a organização e a estruturação da aplicação mais flexíveis.
- Melhora a performance da aplicação, uma vez que reduz a necessidade de atualizar vários componentes ao mesmo tempo.

<br>

## Dark Mode
O dark mode é uma opção de interface de usuário que permite que o usuário mude a aparência da página de um esquema de cores claro para um esquema de cores escuro. Ele é particularmente útil para pessoas que preferem interfaces de usuário mais escuras ou para pessoas que trabalham em ambientes com pouca iluminação.

Na Pokédex, o dark mode foi implementado de forma que o usuário pode ativar ou desativar a opção por meio de um botão localizado no canto superior esquerdo. A implementação foi feita usando renderização condicional e [CSS](https://www.w3.org/Style/CSS/Overview.en.html) em conjunto com [Typescript](https://www.typescriptlang.org/) e [React](https://pt-br.reactjs.org/), sem a necessidade de usar bibliotecas externas.

A renderização condicional é feita usando a sintaxe de interpolação de string em [CSS](https://www.w3.org/Style/CSS/Overview.en.html), com o estado `isDarkModeOn` que controla a classe CSS aplicada aos elementos da página. Exemplo:

`className={ isDarkModeOn ? 'grid-container dark-mode' : 'grid-container' }`

Essa abordagem é simples e flexível, permitindo que o usuário altere a aparência da página de acordo com suas preferências.

<br>

## Responsividade
A responsividade é uma técnica de design que permite que o layout de um site ou aplicativo se adapte ao tamanho da tela em que ele está sendo exibido. Na Pokedex, foi utilizada a técnica de responsividade por meio de `media queries` do [CSS](https://www.w3.org/Style/CSS/Overview.en.html) para criar uma experiência de usuário mais agradável em diferentes dispositivos.

Ao tornar a Pokedex responsiva, garantimos que ela seja acessível em uma ampla gama de dispositivos, desde smartphones até desktops. Além disso, a responsividade também ajuda a melhorar a velocidade de carregamento do site, reduzindo o tempo necessário para carregar imagens e outros elementos da página.

Todas as adaptações foram feitas utilizando apenas [CSS](https://www.w3.org/Style/CSS/Overview.en.html), o que torna o processo de manutenção mais simples e fácil de entender. Em vez de ter que lidar com diferentes versões do código para diferentes dispositivos, a responsividade por meio de `media queries` permite que todo o código seja mantido em um único arquivo.

<br>

## Testes
Foram implementados testes automatizados para garantir que a aplicação funcione corretamente e evitar possíveis erros no código. Esses testes foram escritos usando [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) e [Jest](https://jestjs.io/pt-BR/), e incluem testes unitários e de integração. Os testes unitários verificam a funcionalidade de componentes individuais da aplicação, enquanto os testes de integração verificam o comportamento de componentes quando interagem uns com os outros. A utilização de [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) e [Jest](https://jestjs.io/pt-BR/)  permite que os testes sejam escritos de forma simples e eficiente, garantindo que a aplicação continue funcionando corretamente mesmo após as alterações no código.

<br>
<br>

<details>
  <summary><strong>COMO INSTALAR A POKÉDEX</strong></summary><br />

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
<br>

### Executando a aplicação:


- Execute a aplicação com  com `npm start`:
> Executará a aplicação em modo de desenvolvimento.
 
```bash
npm start
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para visualiza-lo.

<hr>
<br>

### Testando a aplicação:

- Execute os testes com `npm teste`:
> Executará os testes unitários e testes de integração.
 
```bash
npm test
```

<hr>
<br>

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

## Vídeo / Preview

https://user-images.githubusercontent.com/99055008/220432489-4d26cadf-4b02-4286-8f27-083aa72822ef.mp4
