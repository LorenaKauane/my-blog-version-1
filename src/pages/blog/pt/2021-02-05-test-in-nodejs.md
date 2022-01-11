---
templateKey: blog-post
locale: pt
title: e hora de aprender a testar!
titulo: É hora de aprender a testar!
data: 2021-02-05T09:55:01.000Z
image: assets/img/testenode.png
destaque: false
tag: NodeJs
---

Falaaaa Galera!

Estou muito animada para esse post, hoje vamos aprender a testar uma API com **tdd** e utilizar **typescript** no nodejs principalmente se você for iniciante, então esse artigo vai ser bem técnico! Já prepara o café e abre o [vscode](https://code.visualstudio.com/)!

![https://media.giphy.com/media/jvu00LhbjzAJi/giphy.gif](https://media.giphy.com/media/jvu00LhbjzAJi/giphy.gif)

Mas antes de iniciar você precisa das seguintes ferramentas:

- [Vscode](https://code.visualstudio.com/)
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)

Com as ferramentas em mãos, agora só botar a mão na massa.

### ⚫ O que e TDD?

Indo direto ao ponto o TDD ([Test-driven development](https://en.wikipedia.org/wiki/Test-driven_development)) é uma metodologia para escrever os testes **primeiro** para um determinado módulo/regra de negócio e para a implementação real **depois**.

O TDD e um processo de 3 etapas:

- Os desenvolvedores implementam os requisitos do projeto e casos de teste específicos;
- Os casos de teste falham porque os desenvolvedores ainda não escreveram o código;
- Os desenvolvedores escrevem o código para passar nos testes;

Se você nunca utilizou. Espero que esse artigo te **motive** a utilizar, por que e sensacional!

![https://media.giphy.com/media/ZO91JimmRdDrV6qzFT/giphy.gif](https://media.giphy.com/media/ZO91JimmRdDrV6qzFT/giphy.gif)

### 🏳️ Contexto do projeto

Iremos criar uma api de todo list.

Esse projeto e com foco 100% em testes, aqui **não** vamos aprender sobre JWT, configuração do banco de dados, segurança etc.

**Funcionalidades**:

- ✅ Usuário pode listar os todos;
- ✅ Usuário pode criar um todo;
- ✅ Usuário pode filtrar um todo por id;
- ✅ Usuário pode deletar um todo;
- ✅ Usuário pode atualizar um todo;

Tempos atrás fiz um post de [Como criar testes no front-end em ReactJs](https://lorenakauane.com.br/blog/pt/2020-05-22-como-criar-testes-no-front-end-em-reactjs/) caso tenha interesse também de testar o seu front!

### 📚 Models

Aqui são os modelos do como os dados deve retornar no JSON.

**task:**

```json
{
  "id": "",
  "task": "",
  "status": ""
}
```

### 📍 Routes

Aqui você vai conseguir ter a visão das rotas que iremos criar no nosso back-end.

```
[GET]   api/todo - View all todos
[GET]   api/todo/:id - Search by id
[POST]  api/todo - Save new todo
[PUT]   api/todo - Update todo
[DELETE] api/todo/:id - Delete todo
```

Maravilha, agora a gente tem tudo que a gente precisa para criar nossa api. Bora por a mão no código!

### ⭐ Iniciando o projeto

Para iniciar o projeto e bem simples, se certifique que está utilizando o npm ok?

```bash
mkdir node-todos-testing
cd node-todos-testing
npm init
```

### 💻 Instalando as dependências

```bash
npm install --save typescript @types/express express body-parser nodemon
```

### 📢 Configurando o TypeScript

Na raiz do projeto crie um arquivo chamado `tsconfig.json` e coloque o seguinte bloco de código

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "esModuleInterop": true,
    "target": "es6",
    "noImplicitAny": true,
    "moduleResolution": "node",
    "sourceMap": true,
    "outDir": "dist",
    "baseUrl": ".",
    "paths": {
      "*": ["node_modules/*"]
    }
  },
  "include": ["src/**/*", "__tests__/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

Vamos criar também o arquivo de configuração do `nodemon.json` para ele entender nossos arquivos `.ts`

```json
{
  "ignore": ["**/*.test.ts", "**/*.spec.ts", ".git", "node_modules"],
  "watch": ["src"],
  "exec": "npm run dev:server-debug",
  "ext": "ts"
}
```

Agora vamos criar a estrura do projeto src e arquivo `app.ts` mas vamos deixar esse arquivo em branco inicialmente ok?

```json
.
├── node_modules
├── nodemon.json
├── package-lock.json
├── package.json
├── src
│   ├── app.ts
└── tsconfig.json
```

Agora vamos instalar mais algumas dependências para os testes e realizar nosso primeiro test!

- [Jest](https://jestjs.io/)
- [ts-jest](https://kulshekhar.github.io/ts-jest/) (Um pré-processador TypeScript com suporte a mapa de origem para Jest que permite usar Jest para testar projetos escritos em TypeScript.)
- [supertest](https://github.com/visionmedia/supertest), Biblioteca HTTP
- Jest types
- supertest types

```bash
npm i -D jest ts-jest supertest @types/jest @types/supertest
```

Em seguida, adicione mais um arquivo de configuração para o Jest: `jest.config.js`

```javascript
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
}
```

Depois de adicionar o script de teste ao `./package.json`:

```json
{
...
    "scripts": {
...
        "test": "jest",
...
    },
...
}
```

Crie mais uma pasta na raiz do projeto `__tests__` e chame nosso arquio `src/app` lembrando que esse arquivo está em branco!

Mas agora vamos adicionar código nele. Vamos revisar nossa estrutura de projeto, verifique se está igual a sua.

```json
.
├── __tests__
│   ├── app.test
├── node_modules
├── nodemon.json
├── jest.config.js
├── package-lock.json
├── package.json
├── src
│   ├── app.ts
└── tsconfig.json
```

UFAAAA! Agora podemos escrever nosso primeiro teste \o

![https://media.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif](https://media.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif)

No arquivo `app.test` vamos adicionar um endpoint de hello world, para ver se está tudo funcionando.

```javascript
import { newApp } from "../src/app"
import request from "supertest"

const app = newApp()

describe("Test public routes", () => {
  it("should respond with a 200 response and a 'Hello World' body in / ", () => {
    return request(app).get("/").expect(200, "Hello World!")
  })
})
```

Provavelmente a primeira importação vai estar com erro, vamos adicionar o seguinte código no arquivo `src/app`

```javascript
import express from "express"
import { Express } from "express"

export function newApp(): Express {
  const app = express()

  app.get("/", (_, res: express.Response) => {
    res.send("Hello World!")
  })

  return app
}
```

Se executarmos o comando no terminal: `npm test`

Você deve ter algo parecido com isso no seu terminal:

```bash
PASS  __tests__/app.test.ts
  Test public routes
    ✓ should respond with a 200 response and a 'Hello World' body in /  (32 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.055 s
```

Agora precisamos refatorar nosso arquivo `app` né? transformar em `class`, e adicionar nosso arquivos de `router`;

Novo arquivo `route.ts`

```javascript
import express from "express";

export class Routes {
  app = express();
  public routes(app: any): void {
    app.get("/", (_: any, res: express.Response) => {
      res.send("Hello World!");
    });
  }
}
```

Arquivo `app.ts`

```javascript
import * as bodyParser from "body-parser";
import express from "express";
import { Routes } from "./routes";

class App {
  public app: express.Application;
  public routePrv: Routes = new Routes();

  constructor() {
    this.app = express();
    this.config();
    this.routePrv.routes(this.app);
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.set("json spaces", 2);
  }
}

export default new App().app;
```

Arquivo `app.test.ts`

```javascript
import app from "../src/app"
import request from "supertest"

describe("Test public routes", () => {
  it("should respond with a 200 response and a 'Hello World' body in / route", () => {
    return request(app).get("/").expect(200, "Hello World!")
  })
})
```

Se você rodar o `npm test`

Vai ter o mesmo retorno de success!

Sensacional né?

Agora vamos criar mais um teste que retorna a lista de todos:

`app.test.ts`

```javascript
import app from "../src/app"
import request from "supertest"

describe("Test public routes", () => {
  it("should respond with a 200 response and a 'Hello World' body in / route", () => {
    return request(app).get("/").expect(200, "Hello World!")
  })

  it("should respond with a 200 response and a list todos body in /todos route", async () => {
    const res = await request(app).get("/todos")
    expect(res.status).toEqual(1)
    expect(res.body).toHaveLength(1)
  })
})
```

Se você rodar `npm test` vai ter o seguinte retorno:

```bash
FAIL  __tests__/app.test.ts
  Test public routes
    ✓ should respond with a 200 response and a 'Hello World' body in / route (22 ms)
    ✕ should respond with a 200 response and a list todos body in /todos route (7 ms)

  ● Test public routes › should respond with a 200 response and a list todos body in /todos route

    expect(received).toEqual(expected) // deep equality

    Expected: 200
    Received: 404

       9 |   it("should respond with a 200 response and a list todos body in /todos route", async () => {
      10 |     const res = await request(app).get("/todos");
    > 11 |     expect(res.status).toEqual(200);
         |                        ^
      12 |     expect(res.body).toHaveLength(1);
      13 |   });
      14 | });

      at __tests__/app.test.ts:11:24
      at fulfilled (__tests__/app.test.ts:5:58)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 passed, 2 total
Snapshots:   0 total
Time:        2.346 s, estimated 3 s
Ran all test suites.
npm ERR! Test failed.  See above for more details.
```

Falhou, mas por que ainda não criamos o `endpoint` todos, vamos criar!

No arquivo `routes.ts`:

```javascript
import express from "express";

const todos = [
  {
    id: "1",
    task: "Go to the gym",
    status: "OK",
  },
];

export class Routes {
  app = express();
  public routes(app: any): void {
    app.get("/", (_: any, res: express.Response) => {
      res.send("Hello World!");
    });

    app.get("/todos", (_: any, res: express.Response) => {
      res.send(todos);
    });
  }
}
```

Se você rodar `npm test` vai ter o seguinte retorno:

```bash
PASS  __tests__/app.test.ts
  Test public routes
    ✓ should respond with a 200 response and a 'Hello World' body in / route (21 ms)
    ✓ should respond with a 200 response and a list todos body in /todos route (5 ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        0.931 s, estimated 3 s
Ran all test suites.
```

YEAHHHH!

Agora vamos seguir todo o fluxo: **Primeiro o teste**, depois **implementação**, como a gente fez no exemplo a cima!

Inicialmente vai dar problema, mas vamos adaptando no meio do desenvolvimento, isso é **TDD**!

O arquivo completo de teste vai ficar desse jeito!

Criei um arquivo `TaskType.ts`

```javascript
export type Task = {
  id?: string,
  task?: string,
  status?: string,
}
```

`routes.ts`

```javascript
import express from "express";
import { Task } from "./TaskType";

let todos = [
  {
    id: "1",
    task: "Go to the gym",
    status: "OK",
  },
];

export class Routes {
  app = express();
  public routes(app: any): void {
    app.get("/", (_: any, res: express.Response) => {
      res.send("Hello World!");
    });

    app.get("/todos", (_: any, res: express.Response) => {
      res.send(todos);
    });

    app.get("/todo/:id", (req: express.Request, res: express.Response) => {
      const { id } = req.params;
      todos = todos.filter(
        (task: Task) => task.id.toString() !== id.toString()
      );
      res.json(todos);
    });

    app.post("/todo", (req: express.Request, res: express.Response) => {
      const task = req.body;
      todos.push(task);
      res.json(todos);
    });

    app.put("/todo", (req: express.Request, res: express.Response) => {
      const taskToUpdate = req.body;
      todos = todos.map((task: Task) =>
        task.id === taskToUpdate.id ? { ...task, ...taskToUpdate } : task
      );
      res.json(todos);
    });
  }
}
```

`app.test.ts`

```javascript
import app from "../src/app"
import request from "supertest"
import { Task } from "../src/TaskType"

describe("Test public routes", () => {
  it("should respond with a 200 response and a 'Hello World' body in / route", () => {
    return request(app).get("/").expect(200, "Hello World!")
  })

  it("should respond with a 200 response and a list todos body in /todos route", async () => {
    const res = await request(app).get("/todos")
    expect(res.status).toEqual(200)
    expect(res.body).toHaveLength(1)
  })

  it("should create new task in /todo route", async () => {
    const task: Task = {
      id: "2",
      task: "Learning IA",
      status: "NOT",
    }

    const res = await request(app).post("/todo").send(task)
    expect(res.status).toEqual(200)
    expect(res.body).toHaveLength(2)
  })

  it("should update a task in /todo route", async () => {
    const taskToUpdate: Task = {
      id: "2",
      task: "Learning IA",
      status: "OK",
    }

    const res = await request(app).put("/todo").send(taskToUpdate)
    const todos = res.body
    const obj = todos.find(
      (task: Task) => task.id.toString() === taskToUpdate.id.toString()
    )

    expect(res.status).toEqual(200)
    expect(res.body).toHaveLength(2)
    expect(obj.status).toBeTruthy()
  })

  it("should return a task in /todo:id route", async () => {
    const res = await request(app).get(`/todo/${1}`)
    expect(res.status).toEqual(200)
    expect(res.body).toHaveLength(1)
  })
})
```

Testes criados! Agora você tem mais segurança para alterar o código e implementar novas regras de negócio.

```bash
PASS  __tests__/app.test.ts
  Test public routes
    ✓ should respond with a 200 response and a 'Hello World' body in / route (22 ms)
    ✓ should respond with a 200 response and a list todos body in /todos route (6 ms)
    ✓ should create new task in /todo route (22 ms)
    ✓ should update a task in /todo route (4 ms)
    ✓ should return a task in /todo:id route (3 ms)

Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        2.241 s, estimated 3 s
Ran all test suites.
```

O código fonte você encontra [aqui](https://github.com/LorenaKauane/node-todos-testing)!

Obrigada pelo seu tempo!

![https://media.giphy.com/media/13CoXDiaCcCoyk/giphy.gif](https://media.giphy.com/media/13CoXDiaCcCoyk/giphy.gif)
