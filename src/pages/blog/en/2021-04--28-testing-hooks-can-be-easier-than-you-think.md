---
templateKey: blog-post
locale: en
title: testing hooks can be easier than you think
titulo: Testing hooks can be easier than you think
data: 2021-04-28T09:55:01.000Z
image: assets/img/hooktestss.png
destaque: false
tag: ReactJs
---

Today I talk about tests in React Hooks, but is very important you have a level knowledge intermediate and advanced and you need to know theses concepts to have a better absorption of the content ok?

![](https://media.giphy.com/media/IbUUbU4xUDJWcgGMGP/giphy.gif)

### Lets'go the content

The hooks allow us to reuse the component and the state logic in differents components. This was a complicated to do before because did you need to use a library like a [Redux](https://redux.js.org/). However the hooks changed the game and how the components works

I will go to use the project [react login testing](https://github.com/LorenaKauane/react-login-testing)! It's important you clone the project to continue the content.

### Install dependencies

It's importante you have the `node` and `npm` installed. Now you open your terminal and run the following code:

```bash
npm install --save-dev @testing-library/react-hooks
npm install --save-dev react-test-renderer
```

Now you have installed the developments dependencies go to the code.

Create a folder called hooks and add a hook file `useUser.js`. Later on we will improve it.

```js
export const useUser = ({ name }) => `Name: ${name}.`
```

Now Now let's create the test file `useUser.test` inside the folder hooks and make the first validations such as:
Should be valid if send a valid object;

- ✅ Should be valid hooks is valid ;
- ✅ Should be valid if send a object empty and return undefined;
- ✅ Should be valid if send a valid object;

The code:

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

Niceeee! If we run this test with `npm run test` we will have a return similar to this on the console

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

Now we let's increase the complexity of this hooks why everyone knows that in the real world **never** is like that.

![](https://media.giphy.com/media/SqfHFPbzxw98xwFOiE/giphy.gif)

I transform my hook to level 2.

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

Now everything fine, rigth?

The file tests:

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

The last method we used the act , but what exactly he does?

According to the documentation

> To prepare a component for determinations, place the rendering and **update** code inside an act() call. This makes the test run closer to how React works in the browser. [Source](https://pt-br.reactjs.org/docs/test-utils.html#act)

Everything that involves updating, can involve the act or the `react-test-renderer` that both behave the same.

Now we are going to improve our code using the Context Api.

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

I added a `beforeEach` to render a `hooksUser`, to improve the reading of the code.

### **Bonus**

We will test a call on the api and we will mock that call, but first install `axios`

```bash
npm install axios
```

In our hook, we will add a function that makes a call to [reqres.in](https://reqres.in/)

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

Tests file

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

First let's [mock](https://en.wikipedia.org/wiki/Objeto_mock#:~:text=Objetos%20mock%2C%20objects%20simulados%20ou,o%20comportamento%20de%20outros%20objetos.) The axios , we don't want him to make a request because the data can change at any time, but we are going to simulate a return of a value from our backend and so we can add validations, if, for example, the user is authenticated or not among others mock tests.

### Conclusion

With these tips you can increase the tests on your own hooks, a **disclaimer** ::: this is one of the ways to test hooks, there are several other ways and other libs that you can test. But that was the way I learned to test and it helped me on a daily basis.

I hope you enjoyed today's post!

![](https://media.giphy.com/media/wzD3nQPA4gqHK/giphy.gif)

Until later.
