---
templateKey: blog-post
locale: pt
pageKey: page_blogpost
title: Como criar testes no front-end em reactjs
titulo: Como criar testes no front-end em ReactJs
data: 2020-05-22 03:09:59
image: assets/img/capa.png
destaque: true
tag: ReactJs
---

Vamos aprender a testar ouvindo [Passionfruit do Drake](https://www.youtube.com/watch?v=COz9lDCFHjw).

Todo o Dev **independente do seu cargo**, tem que ter ciência da importância de testes de unidade em seu código. A propósito e esse assunto que irei abordar hoje! Especificamente no mundo front-end em ReactJs.

_Mas Lorena, como assim testar front-end??? Ele e realmente necessário??_

![really gif](https://media.giphy.com/media/VhneMg6g1xrDiEpVUu/giphy.gif)

A realidade é que é um assunto meio **dark** de se dizer inclusive agora com essa nova geração do javascript, antigamente haviam poucas maneiras de testar a parte visual da aplicação. É muito importante testar, principalmente, **bibliotecas de componentes, integração com biblioteca de terceiros** e claro o mais importante de tudo, **evitar bugs a longo prazo.**

![Entendi gif](https://media.giphy.com/media/xUySTD7evBn33BMq3K/giphy.gif)

A melhor parte é que com a evolução das tecnologias temos várias maneiras de fazer testes e manter a qualidade de seus projetos.

Hoje vou falar com um pouco dessas tecnologias e criar um projeto básico de login e listagem de produtos.

### Tecnologias que vamos utilizar

1. [Create react app (CRA)](https://github.com/facebook/create-react-app)

   Para criação de aplicação ReactJs

2. [Jest](https://jestjs.io/)

   Biblioteca padrão do CRA. Criado pelo facebook. Ele nos permite testar snapshots de uma forma muuuito rápida, mensagens de erros claras, configuração simples entre outros..

3. [Enzyme](https://github.com/enzymejs/enzyme)

   Permite ao desenvolvedor simplificar a renderização de componentes nos testes. Uma api semelhante a do Jquery para buscar elementos

4. [Enzyme-to-json](https://github.com/adriantoine/enzyme-to-json)

   > Converta wrappers de enzima em um formato compatível com o teste de captura instantânea Jest

### Criando o projeto!

A propósito você consegue ver o projeto completo [clicando aqui](https://github.com/LorenaKauane/react-login-testing).

`npm install -g create-react-app create-react-app react-login-testing cd react-testing npm install -S prop-types`

### Vamos preparar o ambiente de testes!

`npm i --save-dev enzyme enzyme-adapter-react-16 enzyme-to-json`

Para ver se esta tudo funcionando :

`npm test`

Você deve ter um resposta conforme imagem abaixo:

![test pass image](assets/img/1test.png)

Para configurar o ambiente de testes e o enzyme vá ate o arquivo **setupTest.js** que fica dentro da pasta src, adicione os seguintes códigos:

```js
import Enzyme from "enzyme"
import Adapter from "enzyme-adapter-react-16"

Enzyme.configure({ adapter: new Adapter() })
```

Tudo feito! Agora vamos ver a estrutura do projeto. Dentro da pasta src, adicione as seguintes pastas:

![pastas a serem criadas](assets/img/pastas.png)

No arquivo **App.js** adicionaremos um componente que recebe a propriedade isLoggedin, username e products. Esse componente deve renderizar a dashboard se ele estiver autenticado, caso contrario devera mostrar o componente de login.

```js
import React from "react"
import "./App.css"
import Login from "./pages/Login"
import Dashoboard from "./pages/Dashboard"
import PropTypes from "prop-types"

function App({ isLoggedin, username, products }) {
  return (
    <div className="App">
      {isLoggedin ? (
        <Dashoboard username={username} products={products} />
      ) : (
        <Login />
      )}
    </div>
  )
}

App.propTypes = {
  isLoggedin: PropTypes.bool,
  username: PropTypes.string,
  products: PropTypes.array,
}

export default App
```

Dashboard:

```js
import React from "react"
import PropTypes from "prop-types"

const Dashboard = ({ username, products }) => {
  return (
    <div>
      <p>Welcome, {username}!</p>
      {products ? (
        <>
          <ul>
            {products.map(product => (
              <li key={product.id}>
                <p>Name: {product.name}</p>|<p>Price: {product.price}</p>
              </li>
            ))}
          </ul>
          <strong>
            Total:
            {products
              .map(({ price }) => price)
              .reduce((total, price) => total + price)}
          </strong>
        </>
      ) : (
        <strong>{username} has no registered products</strong>
      )}
    </div>
  )
}

Dashboard.propTypes = {
  username: PropTypes.string,
  products: PropTypes.array,
}

export default Dashboard
```

Logins:

```js
import React from "react"

export default function Login() {
  return (
    <div>
      <strong>Hello stranger. Sign in to continue.</strong>
      Username:
      <input />
      Passoword: <input />
      <button onClick={() => alert("Hello")}>Sign</button>
    </div>
  )
}
```

### Vamos para os testes!!!

Mas peraaaaa, antes de escrever vamos validar o que iremos testar hehehe.

### Cases de testes

### APP

- ✅ Deve renderizar o login para o usuario não logado
- ✅ Deve renderizar a dashboard para o usuario logado
- ✅ Deve renderizar a dashboard para o usuario logado mas sem produtos e mostrar mensagem

### Login

- ✅ Clicar no botão e mostrar mensagem de alerta

### Dashboard

- ✅ Soma do valor total

Agora sim!!! Vamos testar!!!!

![Aleluia](https://media.giphy.com/media/BoIUmD3M39B0rTCF4I/giphy.gif)

Antes de irmos para o mais fácil, primeiro vamos fazer as verificações manuais do enzyme. No arquivo **App.test.js.**

```js
import React from "react"
import App from "./App"
import { mount } from "enzyme"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"

it("should render the Login for the non logged in user", () => {
  const props = {
    isLoggedin: false,
    username: null,
    products: [],
  }
  const app = mount(<App {...props} />)

  expect(app.find(Dashboard)).toHaveLength(0)
  expect(app.find(Login)).toHaveLength(1)
  expect(app.find("strong").at(0).text()).toEqual(
    "Hello stranger. Sign in to continue."
  )
  expect(app.find("button").at(0).text()).toEqual("Sign")
})

it("should render the Dashboard for the logged in user", () => {
  const props = {
    isLoggedin: true,
    username: "Pedro",
    products: [
      {
        id: 1,
        name: "T-shirt",
        price: 25,
      },
      {
        id: 2,
        name: "Pants",
        price: 50,
      },
    ],
  }
  const app = mount(<App {...props} />)

  expect(app.find(Dashboard)).toHaveLength(1)
  expect(app.find(Login)).toHaveLength(0)

  expect(app.find("p").at(0).text()).toEqual("Welcome, Pedro!")

  expect(app.find("li")).toHaveLength(2)
  expect(app.find("li").at(0).text()).toEqual("Name: T-shirt|Price: 25")
  expect(app.find("li").at(1).text()).toEqual("Name: Pants|Price: 50")
})

it("should render the Dashboard for the logged in user without Products", () => {
  const props = {
    isLoggedin: true,
    username: "Joana",
    products: null,
  }
  const app = mount(<App {...props} />)

  expect(app.find(Dashboard)).toHaveLength(1)
  expect(app.find("p").at(0).text()).toEqual("Welcome, Joana!")
  expect(app.find("strong").at(0).text()).toEqual(
    "Joana has no registered products"
  )
})
```

Opção mais fácil - **snapshots.**

As validações manuais do Enzyme é otima, mas temos como melhorar todo o processo sem precisar escrever essas condições. Segue:

```js
import React from "react"
import App from "./App"
import { mount } from "enzyme"
import toJson from "enzyme-to-json"

it("should render the Login for the non logged in user", () => {
  const props = {
    isLoggedin: false,
    username: null,
    products: [],
  }
  const app = mount(<App {...props} />)
  expect(toJson(app)).toMatchSnapshot()
})

it("should render the Dashboard for the logged in user", () => {
  const props = {
    isLoggedin: true,
    username: "Pedro",
    products: [
      {
        id: 1,
        name: "T-shirt",
        price: 25,
      },
      {
        id: 2,
        name: "Pants",
        price: 50,
      },
    ],
  }
  const app = mount(<App {...props} />)
  expect(toJson(app)).toMatchSnapshot()
})

it("should render the Dashboard for the logged in user without Products", () => {
  const props = {
    isLoggedin: true,
    username: "Joana",
    products: null,
  }
  const app = mount(<App {...props} />)

  expect(toJson(app)).toMatchSnapshot()
})
```

Adicionamos apenas **expect(toJson(app)).toMatchSnapshot()**. Sendo assim, será gerado um arquivo na pasta **snapshots** automaticamente, e esse arquivo contém toda a estrutura de renderização do componente. Se você alterar um componente e não alterar os **snapshots** seus testes vão quebrar.

![erro](assets/img/testeerrotojson.png)

Mas para atualizar e bem simples apenas pressionar "u" e o jest faz toda a mágica.

![changes snapshot](assets/img/changesnapto.png)

### Eventos:

Para adicionar eventos e muito simples.

Adicionei um arquivo de testes na pasta do Login. Chamado **login.test.js**

Pra mostrar um evento de clique:

```js
import React from "react"
import Login from "./"
import { mount } from "enzyme"

it("Click the button and show the alert", () => {
  const login = mount(<Login />)
  window.alert = jest.fn()
  login.find("button").simulate("click")
  expect(window.alert).toHaveBeenCalledWith("Hello")
})
```

Vários outros eventos que você consegue adicionar, a documentação e muito rica e fácil entendimento.

### Relatório

Para olhar o relatório do seu teste e apenas rodar:

`npm test -- --coverage`

![imagem relatorio testes](assets/img/covarege.png)

Temos também de visualizar na web, o arquivo gerado fica em: `/projeto/coverage/lcov-report/index.html`

Abra com qualquer navegador.

![finalizado navegador](assets/img/finalizando.png)

### Por fim...

Testes garantem que podemos evoluir nosso software com qualidade. Não há razão para não começar a testar hoje. Ambas tecnologias tem uma documentação exelente.

Boa sorte nos seus testes,

Até mais,

![bye](https://media.giphy.com/media/2YgCmRh9Arduw8LshF/giphy.gif)
