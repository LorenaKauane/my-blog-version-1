---
templateKey: blog-post
locale: en
title: its time to learn how to test
titulo: It's time to learn how to test!
data: 2021-02-05T09:55:01.000Z
image: assets/img/testenode.png
destaque: false
tag: NodeJs
---

Hello Guys!

I'm really excited for this post, today we're going to learning how to test an API with TDD and use typescript in nodejs especially if you are a beginner, so this article will be very technical. Prepare the coffe and open [vscode](https://code.visualstudio.com/)!

![https://media.giphy.com/media/jvu00LhbjzAJi/giphy.gif](https://media.giphy.com/media/jvu00LhbjzAJi/giphy.gif)

Before you start you need the following tools:

- [Vscode](https://code.visualstudio.com/)
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)

With the tools in hand, now just get your hands dirty.

### ⚫ What is TDD?

Going straight to the point TDD (Test-driven development) is a methodology to write the tests **first** for a given module/business rule and for the actual implementation **after**.

The TDD is a 3-step process:

- Developers implement the project requirements and specific test cases;
- The test cases fail because the developers have not yet written the code;
- The developers write the code to pass the tests;

If you have never used. I hope this article will **motivate** you to use it, why is it sensational!

![https://media.giphy.com/media/ZO91JimmRdDrV6qzFT/giphy.gif](https://media.giphy.com/media/ZO91JimmRdDrV6qzFT/giphy.gif)

### 🏳️ Project context

We will create an api of todo list.

This project is 100% focused on testing, here **not** we will learn about JWT, database configuration, security etc.

**Functionalities**:

- ✅ User can list them all;
- ✅ User can create a whole;
- ✅ User can filter a whole by id;
- ✅ User can delete a whole;
- ✅ User can update a whole;

A while ago I made a post of [How to create front-end tests in ReactJs](https://lorenakauane.com.br/blog/pt/2020-05-22-como-criar-testes-no-front-end-em-reactjs/) in case you are also interested in testing your front!

### 📚 Models

Here are the models of how the data should return in JSON.

```json
{
  "id": "",
  "task": "",
  "status": ""
}
```

### 📍 Routes

Here you will get the view of the routes we will create in our back-end.

```
[GET]   api/todo - View all todos
[GET]   api/todo/:id - Search by id
[POST]  api/todo - Save new todo
[PUT]   api/todo - Update todo
[DELETE] api/todo/:id - Delete todo
```

Great, now we have everything we need to create our api. Let's put our hand in the code!

### ⭐ Starting the project

To start the project and very simple, make sure you are using npm ok?

```bash
mkdir node-todos-testing
cd node-todos-testing
npm init
```

### 💻 Installing the dependencies

```bash
npm install --save typescript @types/express express body-parser nodemon
```

### 📢 Setting up TypeScript

In the project root create a file called `tsconfig.json` and put the following code block

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

We will also create the `nodemon.json` configuration file for him to understand our `.ts` files

```json
{
  "ignore": ["**/*.test.ts", "**/*.spec.ts", ".git", "node_modules"],
  "watch": ["src"],
  "exec": "npm run dev:server-debug",
  "ext": "ts"
}
```

Now let's create the src project structure and file `app.ts` but let's leave this file blank initially ok?

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

Now we will install some more dependencies for the tests and perform our first test!

- [Jest](https://jestjs.io/)
- [ts-jest](https://kulshekhar.github.io/ts-jest/) (Um pré-processador TypeScript com suporte a mapa de origem para Jest que permite usar Jest para testar projetos escritos em TypeScript.)
- [supertest](https://github.com/visionmedia/supertest), Biblioteca HTTP
- Jest types
- supertest types

```bash
npm i -D jest ts-jest supertest @types/jest @types/supertest
```

Next, add another configuration file for Jest: `jest.config.js`

```javascript
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
}
```

After adding the test script to `./package.json`:

```json=
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

Create one more folder in the root of the `__test__` project and call our `src/app` file remembering that this file is blank!

But now let's add code to it. Let's review our project structure, make sure it looks like yours.

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

UFAAAA! Now we can write our first test \o

![https://media.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif](https://media.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif)

In the `app.test` file we will add a hello world endpoint, to see if everything is working.

```bash
import { newApp } from "../src/app"
import request from "supertest"

const app = newApp()

describe("Test public routes", () => {
  it("should respond with a 200 response and a 'Hello World' body in / ", () => {
    return request(app).get("/").expect(200, "Hello World!")
  })
})
```

Probably the first import will be in error, we will add the following code to the `src/app` file

```bash
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

If we execute the command at the terminal: `npm test`

You must have something like this in your terminal:

```bash
PASS  __tests__/app.test.ts
  Test public routes
    ✓ should respond with a 200 response and a 'Hello World' body in /  (32 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.055 s
```

Now we need to refactor our `app` file, transform it into `class', and add our`router' files

New file `route.ts`

```bash
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

`app.ts`

```bash
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

`app.test.ts`

```bash
import app from "../src/app"
import request from "supertest"

describe("Test public routes", () => {
  it("should respond with a 200 response and a 'Hello World' body in / route", () => {
    return request(app).get("/").expect(200, "Hello World!")
  })
})
```

If you run the `npm test`

You will have the same return of success!

Sensational, right?

Now let's create one more test that returns the list of all:

`app.test.ts`

```bash
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

If you run `npm test` you will get the following feedback:

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

If you run `npm test` you will get the following feedback:

`routes.ts`

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

If you run `npm test` you will get the following feedback:

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

Now let's follow the whole flow: **First the test**, then **implementation**, as we did in the example above!

Initially it will be a problem, but we will adapt in the middle of the development, this is **TDD**!

The complete test file will look like this!

I created a `TaskType.ts` file

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

Tests created! Now you have more security to change the code and implement new business rules.

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

The source code you find [here](https://github.com/LorenaKauane/node-todos-testing)!

Thanks for your time!

![https://media.giphy.com/media/13CoXDiaCcCoyk/giphy.gif](https://media.giphy.com/media/13CoXDiaCcCoyk/giphy.gif)
