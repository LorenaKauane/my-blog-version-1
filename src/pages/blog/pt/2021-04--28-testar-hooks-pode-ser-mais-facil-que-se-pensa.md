---
templateKey: blog-post
locale: pt
title: testar os hooks pode ser mais facil do que voce pensa
titulo: Testar os hooks pode ser mais fácil do que você pensa.
data: 2021-04-28T09:55:01.000Z
image: assets/img/hooktestss.png
destaque: false
tag: ReactJs
---

Hoje vou falar sobre os testes nos Hooks do React, mas e muito importante você ter um nível de conhecimento técnico **intermediário e avançado** e já conheça esses conceitos para ter uma melhor absorção do conteúdo ok?

![](https://media.giphy.com/media/IbUUbU4xUDJWcgGMGP/giphy.gif)

Se você ainda não tem conhecimento sobre os hooks em breve farei um post específico para ele. Leia sobre [como criar testes no front-end em react js.](https://lorenakauane.com.br/como-criar-testes-no-front-end-em-reactjs/)

### Vamos para o conteúdo de hoje.

Os Hooks nos permitem reutilizar o componente e a lógica de estado em **diferentes** componentes. Isso era complicado de fazer antes por que você precisava utilizar uma biblioteca de terceiros como o [Redux](https://redux.js.org/). Portanto, os Hooks mudaram todo jogo de como os componentes funcionam.

Vou utilizar como base o projeto [react login testing](https://github.com/LorenaKauane/react-login-testing)! E importante você clonar o projeto para dar continuidade ao contéudo.

### Instalando as dependências

E importante que você tenha o `node` e o `npm` instalados. Abra o seu terminal e execute o seguinte código:

```bash
npm install --save-dev @testing-library/react-hooks
npm install --save-dev react-test-renderer
```

Agora que você instalou as dependências de desenvolvimento vamos para o código.

Crie uma pasta chamada hooks e adicione um hook `useUser`. Mais para frente vamos aprimorar ele.

```js
export const useUser = ({ name }) => `Name: ${name}.`
```

Agora vamos criar o arquivo de testes `useUser.test` dentro da pasta dos hooks e fazer as primeiras validações como:

- ✅ Deve validar se o hook está criado;
- ✅ Deve validar se enviar um objeto vazio retornar undefined;
- ✅ Deve validar se enviar um objeto populado;

Nosso código ficou assim:

```jsx
import { renderHook } from '@testing-library/react-hooks'
import { useUser } from './useUser'

describe('useUser tests', () => {
  it('Should be validating the hook is valid', () => {
    const { result: hook } = renderHook(() => useUser({}))
    expect(hook).toHaveProperty('current')
  })

  it('Should be validating the name is undefined', () => {
    const { result } = renderHook(() => useUser({}))
    expect(result.current).toBe('Name: undefined.')
  })

  it('Should be validating the name is Leo', () => {
    const { result } = renderHook(() => useUser({ name: 'Leo' }))
    expect(result.current).toBe('Name: Leo.')
  })
})
```

Niceeee! Se ao executarmos o comando esse teste com `npm run test` vamos ter um retorno parecido com esse no console:

```bash
 PASS  src/hooks/useUser.test.js
  useUser tests
    ✓ Should be validating the hook is valid (11ms)
    ✓ Should be validating the name is undefined (1ms)
    ✓ Should be validating the name is Leo (1ms)

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        1.948s
Ran all test suites matching /use/i.
```

Agora vamos aumentar a complexidade desse hook por que todo mundo sabe que no mundo real **nunca** é assim.

![](https://media.giphy.com/media/SqfHFPbzxw98xwFOiE/giphy.gif)

Tranformei meu hook em um hook nível 2 de complexidade hahaa vamos até o nível 3

```jsx
import { useState } from 'react'

export const useUser = () => {
  const [user, setUser] = useState({})

  const changeUser = user => setUser(user)

  return {
    changeUser,
    nameUser: `Name: ${user.name}.`
  }
}
```

Bom, até aqui tudo tranquilo certo?

Nosso arquivo de testes:

```jsx
import { renderHook, act } from '@testing-library/react-hooks'
import { useUser } from './useUser'

describe('useUser tests', () => {
  it('Should be validating the hook is valid', () => {
    const { result: hook } = renderHook(() => useUser({}))
    expect(hook).toHaveProperty('current')
  })

  it('Should be validating the name is undefined', () => {
    const { result: hook } = renderHook(() => useUser({}))
    const { nameUser } = hook.current
    expect(nameUser).toBe('Name: undefined.')
  })

  it('Should be validating the name is Leo', () => {
    const { result: hook } = renderHook(() => useUser())
    const { changeUser } = hook.current

    act(() => changeUser({ name: 'Leo' }))

    const { nameUser } = hook.current
    expect(nameUser).toBe('Name: Leo.')
  })
})
```

No último método utilizamos o `act` do `testing-library`, mas o que exatamente ele faz?

De acordo com a documentação

> Para preparar um componente para determinações, coloque o código de renderização e de **atualizações** dentro de uma chamada act(). Isso faz com que o teste rode mais próximo de como React funciona no browser. [Fonte](https://pt-br.reactjs.org/docs/test-utils.html#act)

Tudo que envolve atualização, da para envolver o act ou o `react-test-renderer` que ambos se comportam igual.

Agora vamos melhorar nosso código utilizando o Context Api.

`useUser.js`

```jsx
import React, { createContext, useContext, useState, useCallback } from 'react'

const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({})

  const changeUser = useCallback(user => setUser(user), [setUser])

  return (
    <UserContext.Provider
      value={{
        user,
        changeUser
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

function useUser () {
  const context = useContext(UserContext)
  return context
}

export { UserProvider, useUser }
```

`useUser.test.js`

```jsx
import { renderHook, act } from '@testing-library/react-hooks'
import { UserProvider, useUser } from './useUser'

let hooksUser

describe('useUser tests', () => {
  beforeEach(() => {
    hooksUser = renderHook(() => useUser(), {
      wrapper: UserProvider
    })
  })

  it('Should be validating the hook is valid', () => {
    const { result: hook } = hooksUser
    expect(hook).toHaveProperty('current')
  })

  it('Should be validating the name is undefined', () => {
    const { result: hook } = hooksUser
    const { user } = hook.current
    expect(user).toEqual({})
  })

  it('Should be validating the name is Leo', () => {
    const { result: hook } = hooksUser
    const { changeUser } = hook.current

    act(() => changeUser({ name: 'Leo' }))

    const { user } = hook.current
    expect(user.name).toBe('Leo')
  })
})
```

Adicionei um `beforeEach` para renderizer um `hooksUser`, para melhorar a leitura do código.

### **Bônus**

Vamos testar uma chamada na api e vamos mockar essa chamada, mas primeiro instale o `axios`

```bash
npm install axios
```

No nosso hook, vamos adicionar uma função que faz uma chamada para [reqres.in](https://reqres.in/)

`useUser.js`

```jsx
  ...
  const getUser = useCallback(async () => {
    const  { data }  = await axios.get("https://reqres.in/api/users/2");
    setUser(data.data);
  }, [setUser]);

  return (
    <UserContext.Provider
      value={{
        user,
        changeUser,
        getUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
  ...
```

Nosso arquivo de testes:

```jsx
import axios from 'axios'
import { renderHook, act } from '@testing-library/react-hooks'
import { UserProvider, useUser } from './useUser'

jest.mock('axios')

let hooksUser

describe('useUser tests', () => {
  beforeEach(() => {
    hooksUser = renderHook(() => useUser(), {
      wrapper: UserProvider
    })
  })

  it('Should be validating the hook is valid', () => {
    const { result: hook } = hooksUser
    expect(hook).toHaveProperty('current')
  })

  it('Should be validating the name is undefined', () => {
    const { result: hook } = hooksUser
    const { user } = hook.current
    expect(user).toEqual({})
  })

  it('Should be validating the name is Leo', () => {
    const { result: hook } = hooksUser
    const { changeUser } = hook.current

    act(() => changeUser({ name: 'Leo' }))

    const { user } = hook.current
    expect(user.name).toBe('Leo')
  })

  it('Should be mockUser api', async () => {
    axios.get.mockResolvedValueOnce({
      data: {
        data: {
          first_name: 'Leo'
        }
      }
    })

    const { result: hook } = hooksUser
    const { getUser } = hook.current

    await act(async () => await getUser())

    const { user } = hook.current
    expect(user.first_name).toBe('Leo')
  })
})
```

Primeiramente vamos [mockar](https://pt.wikipedia.org/wiki/Objeto_mock#:~:text=Objetos%20mock%2C%20objetos%20simulados%20ou,o%20comportamento%20de%20outros%20objetos.) o axios, não queremos que ele faça a request por que os dados podem mudar a qualquer momento, mas vamos simular um retorno de um valor do nosso back-end e assim podemos adicionar validações, se, por exemplo, o usuário está autenticado ou não entre outros testes de mock.

### Conclusão

Com essas dicas você pode incrementar os testes nos seus próprios hooks, um **disclaimer**::: essa e uma das formas de se testar hooks, tem várias outras formas e outras libs que você consegue testar. Mas essa foi a forma que eu aprendi a testar e me ajudou no dia a dia.

Espero que você tenha gostado do post de hoje!

![](https://media.giphy.com/media/wzD3nQPA4gqHK/giphy.gif)

Até mais.
