---
templateKey: blog-post
locale: pt
title: como criar extensao no vscode
titulo: Como criar extensão no vscode
data: 2020-10-16T09:24:32.000Z
image: assets/img/group-1-1-.png
destaque: false
tag: Programação
---

Falaaaa jovem!

Estou sumidinha um tempo, mas to voltando aqui hoje para compartilhar uma coisa com você que eu aprendi na última semana. Como criar e publicar uma extensão no vscode!

Nesses últimos dias decidi me aventurar e vou te contar o que aprendi e como você pode criar sua própria extensão.

![https://media.giphy.com/media/1YuBJLQooc6NFmn3N5/giphy.gif](https://media.giphy.com/media/1YuBJLQooc6NFmn3N5/giphy.gif)

### Por que uma extensão no vscode?

No [marketplace](https://marketplace.visualstudio.com/) da microsoft você encontra milhares de extensões que tem o principal objetivo ajudar e melhorar a sua produtividade enquanto você codifica.

Em uma certa situação no trabalho precisei criar uma extensão que gerasse alguns arquivos em automático para que aumentasse a produtividade do time de desenvolvimento.

Algo simples e objetivo, traz benefícios como:

- Time todo alinhado com a estrutura do projeto.
- Incentiva de criação de testes (já que a extensão cria automático o arquivo de teste e um teste bem simples).
- Aumenta a produtividade, agora não e necessário perder tempo criando todo a estrutura do 0 .

![https://media.giphy.com/media/uj8oO4Lreq4fTE61ku/giphy.gif](https://media.giphy.com/media/uj8oO4Lreq4fTE61ku/giphy.gif)

### Começando...

Bom vamos criar uma extensão que gere um arquivo index, testes e estilos(com styled components). Vou utilizar como base o projeto que desenvolvi sobre testes no react, você pode ler o artigo completo de [Como criar testes no front-end em ReactJs](https://lorenakauane.com.br/blog/pt/2020-05-22-como-criar-testes-no-front-end-em-reactjs/).

Mas antes de criar sua extensão você precisa estar com **vscode , node, git** e ter um projeto **react rodando com styled components**. Na [documentação do vscode](https://code.visualstudio.com/api) você tem algumas funções detalhadas caso precise se informar de alguma função especifica.

Nossa extensão vai gerar os seguintes códigos automáticos:

`index.js`

```jsx
import React from "react"
import { Container } from "./styled"

export default function NameComponent() {
  return (
    <Container>
      <strong>Hello stranger, NameComponent!</strong>
    </Container>
  )
}
```

`styled.js`

```jsx
import styled from "styled-components"

export const Container = styled.div`
  text-align: center;
`
```

`test.js`

```jsx
import React from "react"
import { mount } from "enzyme"
import NameComponent from "./"

it("Should mount component", () => {
  const wrap = mount(<NameComponent />)
  expect(wrap.find("strong").at(0).text()).toEqual(
    "Hello stranger, NameComponent!"
  )
})
```

**Uma observação importante!**

O nome **NameComponent**, vai ser de fato o nome do componente que você quer gerar!

Com vscode aberto você vai precisar instalar o [Yeoman](https://yeoman.io/) um gerador de projetos.

`npm install -g yo generator-code`

Quando tiver instalado rode o seguinte comando:

`yo code`

E você vai ter uma visão parecida com essa:

![Yo picture image](assets/img/yocode.png "Yo picture image")

![](assets/img/instalado.png)

Depois e só acessar o seu projeto que você acabou de criar. E temos a seguinte estrutura de projeto.

![estrutura yo](assets/img/estrutura.png "estrutura yo")

O arquivo extension.js e onde a magica acontece!

Bom vamos ver a mágica acontecendo!

Aperte F5 que isso irá executar sua aplicação de modo debug e irá abrir um host de desenvolvimento da extensão.

E execute o Hello Wold na paleta de comandos

![MOstra no comand pallete](assets/img/helloworld.png "MOstra no comand pallete")

Logo na lateral vai mostrar uma mensagem de Hello world!

Showwww de bolaa,

Agora vamos adicionar um item no menu quando apertamos botão direito do mouse em qualquer packege.

Para isso você precisa abrir o packege.json, lá e onde você configura todos os parâmetros, comandos de como sua extensão vai ser chamada, pode ser por linha de comando, Menus entre outros, [aqui](https://code.visualstudio.com/api/references/contribution-points) você consegue ver a lista completinha.

Vamos adicionar no nosso packege.json o seguinte código:

```json
...
"activationEvents": [
	"onCommand:extension.gerador-arquivos-react"
],
"main": "./extension.js",
"contributes": {
		"commands": [
			{
				"command": "extension.gerador-arquivos-react",
				"title": "Gerador de arquivos React"
			}
		],
		"menus": {
          "explorer/context": [
              {
                  "when": "true",
                  "command": "extension.gerador-arquivos-react",
                  "group": "navigation"
              }
          ],
          "commandPalette": [
              {
                  "command": "extension.gerador-arquivos-react",
                  "when": "editorHasSelection"
              }
          ]
      }
	},
...
```

E no arquivo `extension.js` vamos realizar as seguintes alterações:

```jsx
const vscode = require("vscode")

function activate(context) {
  console.log(
    'Congratulations, your extension "gerador-arquivos-react" is now active!'
  )
  let disposable = vscode.commands.registerCommand(
    "extension.gerador-arquivos-react",
    function () {
      vscode.window.showInformationMessage(
        "Hello World from gerador-arquivos-react!"
      )
    }
  )

  context.subscriptions.push(disposable)
}
exports.activate = activate

function deactivate() {}

module.exports = {
  activate,
  deactivate,
}
```

E você vai ter uma visão semelhante a essa:

![menu vscode](assets/img/geradormenu.png "menu vscode")

Show!

Agora vamos criar uma pasta chamada templates e vamos adicionar os arquivos de index, styled e test!

Index:

```jsx
module.exports = () =>
  `import styled from 'styled-components'

export const Container = styled.div${"`"}
    text-align: center;
${"`"}
`
```

```jsx
module.exports = nameComponent =>
  `import React from "react";
import { Container } from "./styled"

export default function ${nameComponent}() {
  return (
    <Container>
      <strong>Hello stranger, ${nameComponent}!</strong>
    </Container>
  );
}
`
```

```jsx
module.exports = nameComponent =>
  `import React from "react";
import { mount } from "enzyme";
import ${nameComponent} from "./";

it("Should mount component", () => {
    const wrap = mount(<${nameComponent} />);
    expect(wrap.find("strong").at(0).text()).toEqual("Hello stranger, ${nameComponent}!");
});
`
```

Arquivos criados!

Agora vamos, capturar o caminho de onde vai ser gerado o arquivo e pegar o nome da pasta

```jsx
let disposable = vscode.commands.registerCommand(
  "extension.gerador-arquivos-react",
  function (e) {
    const filePath = e.path // getFilePath
    const nameFolder = filePath.substring(filePath.lastIndexOf("/") + 1) //GetNameFolder
    vscode.window.showInformationMessage(
      "Hello World from gerador-arquivos-react!"
    )
  }
)
```

Agora vamos importar os arquivos gerados na pasta template e montar um [Map](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Map) de chave e valor e finalmente gerar nossos arquivos.

O arquivo final fica dessa maneira:

```jsx
const vscode = require("vscode")
const fs = require("fs")
const path = require("path")

const templateStyled = require("./templates/styled")
const templateIndex = require("./templates")
const templateTest = require("./templates/test")

function activate(context) {
  let disposable = vscode.commands.registerCommand(
    "extension.gerador-arquivos-react",
    function (e) {
      const filePath = e.path
      const nameFolder = filePath.substring(filePath.lastIndexOf("/") + 1)
      const mockTemplates = setMocks(nameFolder)

      for (let [key, value] of mockTemplates) {
        let objectCreate = value()
        createFile(filePath, objectCreate)
      }
      vscode.window.showInformationMessage("Done!")
    }
  )

  context.subscriptions.push(disposable)
}

function setMocks(nameFolder) {
  let mockTemplates = new Map()
  mockTemplates.set("Styled", () => {
    const fileName = "styled.js"
    const mockFunction = templateStyled()
    return { fileName, mockFunction }
  })
  mockTemplates.set("Index", () => {
    const fileName = "index.js"
    const mockFunction = templateIndex(nameFolder)
    return { fileName, mockFunction }
  })
  mockTemplates.set("Test", () => {
    const fileName = `${nameFolder}.test.js`
    const mockFunction = templateTest(nameFolder)
    return { fileName, mockFunction }
  })

  return mockTemplates
}

function createFile(pathFile, objectCreate) {
  fs.writeFile(
    path.join(`${pathFile}/`, `${objectCreate.fileName}`),
    objectCreate.mockFunction,
    async err => {
      if (err) {
        return vscode.window.showErrorMessage("Opss.. Error")
      }
    }
  )
}

exports.activate = activate

function deactivate() {}

module.exports = {
  activate,
  deactivate,
}
```

FEITO!

Agora e só testar, crie uma pasta e execute a extensão você vai ter um resultado semelhante a esse:

![resultado](assets/img/resultado.png "resultado")

Sensacional né?

![https://media.giphy.com/media/Kd5LwXZAVVmAOjqY3y/giphy.gif](https://media.giphy.com/media/Kd5LwXZAVVmAOjqY3y/giphy.gif)

O Código fonte você encontra [aqui](https://github.com/LorenaKauane/gerador-arquivos-react)!

Agora vamos gerar um packege e compartilhar com os amigos, mas antes você precisa definir o publisher no package.json e alterar o readme do projeto:

`npm install -g vsce`

`vsce package`

Ele vai gerar um package na raiz do projeto:

![](assets/img/geradorpackege.png)

Para instalar localmente e só rodar:

`code --install-extension my-extension-0.0.1.vsix.`

Me conta o que achou aqui nos comentários!

Espero ter ajudado,

Até a próxima.

![https://media.giphy.com/media/88iHyYghkmwsLzcRqK/giphy.gif](https://media.giphy.com/media/88iHyYghkmwsLzcRqK/giphy.gif)
