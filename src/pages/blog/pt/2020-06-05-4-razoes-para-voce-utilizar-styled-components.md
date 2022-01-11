---
templateKey: blog-post
locale: pt
pageKey: page_blogpost
title: 4 razoes para voce utilizar styled components
titulo: 4 Razões para você utilizar styled components
data: 2020-06-05 02:44:22
image: assets/img/styledcapa.png
destaque: true
tag: ReactJs
---

Falaa Galeraaa! Antes de irmos para o assunto principal desse artigo, vamos ouvir juntos [Rosa de Saron - O Sol da Meia Noite](https://www.youtube.com/watch?v=QuRauC_JqY0&list=RDQuRauC_JqY0&start_radio=1).

Quando eu estava pensando em desenvolver esse blog, eu pensei...

> Eis a questão... Vou utilizar algum framework front-end tipo [bootstrap](https://getbootstrap.com/), [materialize](https://materializecss.com/) ou fazer **tudo** do 0 utilizando [Styled Components](https://styled-components.com/)?

![Perdido gif](https://media.giphy.com/media/Xa4cgAajpedUXUFoUw/giphy.gif)

Claro que o mais confortável e rápido a se fazer e utilizar um [framework ](https://pt.wikipedia.org/wiki/Framework)que agiliza todo o processo... Mas estava disposta a desenvolver **tudo do zero** utilizando apenas o Styled Components. E é sobre ele que irei falar hoje, mostrando **4 razões para você utilizar essa lib fantástica**!

![Perdido gif](https://media.giphy.com/media/JSvgjnJawWYqZJGsVU/giphy.gif)

### O que e o [Styled Components](https://styled-components.com/)?

O styled components e uma lib que nos permite escrever código css dentro do JS ele nos permitem traduzir a definição dos estilos de nosso aplicativo em **componentes**, em vez de trabalhar em folhas de estilo CSS. Ele e compatível com vários navegadores, fácil de usar, permite que você atualize dinamicamente por meio das props.

> _Co-creator Max Stoiber says:_
>
> _The basic idea of styled-components is to enforce best practices by removing the mapping between styles and components._

Vamos para o que interessa: As 4 Razões!

### 1. [ThemeProvider](https://styled-components.com/docs/api#themeprovider)

Uma das principais vantagens é a possibilidade de definir um theme para sua aplicação apenas envolvendo o **ThemeProvider** que consequentemente todos os componentes vão receber as variáveis do theme. **Obs**: Tudo isso e possível graças as [API do React Context](https://pt-br.reactjs.org/docs/context.html)!

como, por exemplo:

```js
const theme = {
	color: {
		red: '#ff0000'
	}
	fontSize:{
		h1: {
			fontSize: 2rem;
		}
	}
}

export default theme
```

No index.js

```js
import React from "react"
import ReactDOM from "react-dom"
import theme from "./config/theme"
import App from "./App"
import { ThemeProvider } from "styled-components"

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
)
```

Agora **qualquer** componente estilizado tem acesso ao seu theme!

```js
import styled from "styled-components"

export const Container = styled.div`
  background-color: ${props => props.theme.colors.red};
`
```

### 2. Passando atributos

Você consegue modificar o que irá renderizar em um componente e passar por parâmetros.

```js
import styled from "styled-components"

export const Container = styled.div`
  background: ${props => (props.background ? props.background : "#F5F5F5")};
`
```

```js
import React from "react"
import { Container } from "./styles"

const ContainerRed = () => {
  return <Container background="#fff"></Container>
}

export default ContainerRed
```

### 3. Referencias de elementos

Muito fácil fazer referências de elementos, muito semelhante também com o CSS ou Sass.

Supondo que um container e você deseja adicionar uma animação do hover, ficaria dessa maneira:

```js
import styled from "styled-components"

export const Container = styled.div`
  background: yellow;

  &:hover {
    background: red;
  }
`
```

### 4. Estenda componentes com estilo

Outra coisa divertida no styled components e que você consegue estender um estilo já criado, assim você não sobrecarrega os componentes como, por exemplo:

```js
import styled from "styled-components"

export const Button = styled.div`
  color: black;
`
```

```js
import styled from "styled-components"
import { Button } from "./stylesDafault"

export const ButtonCancel = styled(Button)`
  color: red;
`
```

Existe muitos outros macetes, você consegue ver em detalhes na [documentação](https://styled-components.com/docs).

### Conclusão

O styled components nos fornecem uma maneira prática de trabalhar com os estilos onde você consegue “componentizar” e principalmente reutilizar seus estilos. Se você está na dúvida se deveria usar ou não, eu só digo uma coisa: use, teste e abuse! **Conhecimento nunca e jogado fora**.

Já utilizou essa incrível lib? Compartilha comigo aqui nos comentários, gostaria muito de saber!

Até a próxima.

![bye gif](https://media.giphy.com/media/rrLt0FcGrDeBq/giphy.gif)
