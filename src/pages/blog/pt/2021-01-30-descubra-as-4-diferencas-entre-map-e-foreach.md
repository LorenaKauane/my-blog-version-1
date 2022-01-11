---
templateKey: blog-post
locale: pt
title: Descubra as 4 diferencas entre map e foreach
titulo: Descubra as 4 diferenças entre map e foreach
data: 2021-01-30T09:55:01.000Z
image: assets/img/mapfor.png
destaque: false
tag: Javascript
---

Você está prestes a descobrir as principais diferenças entre o `map()` e `foreach()` é como esses ensinamentos me fizeram **desenvolver melhor** em JavaScript.

Como você sabe, o JavaScript tem alguns métodos que nos ajudam a trabalhar com os arrays. Os mais famosos são o `seuArray.map()` e `seuArray.forEach()`, mas esse mundo e maior do que pode ser imaginar, hoje existe mais de **10 métodos** que nos auxiliam para trabalhar com arrays em JS 😮 (em um próximo post falo sobre eles).

Mas para quem está iniciando na programação, tem uma certa dificuldade para entender os conceitos e as diferenças entre os dois! **E estou aqui para isso**, para te ajudar a entender a diferença entre esses dois métodos 😃

Métodos que vou abordar nesse post!

- Definição
- O retorno
- Desencadear outros métodos
- Mutabilidade
- Velocidade de desempenho
- Conclusão

### 🏳️ Definição

#### forEach()

> O método `forEach()` executa uma função fornecida uma vez para cada par de chave/valor no objeto Map, pela ordem de inserção. [ref](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach).

Por padrão esse método percorre todos os itens de um array, como um **loop normal**.

#### map()

> O método `map()` invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado. [ref](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

Na prática o método foreach e map parecem a mesma coisa, mas com a diferença do **retorno**. O foreach manipula os dados reais de um array e o map cria um novo array.

### 📍 O retorno

Como falado anteriormente na definição o método `forEach()` apenas percorre sobre o array, enquanto o `map()` retornar um novo valor.

```javascript
const items = [1, 2, 3, 4]

const values = items.forEach(item => item * item)

// return: undefined
console.log(values)
```

```javascript
const items = [1, 2, 3, 4]

const values = items.map(item => item * item)

// return: [1, 4, 9, 16]
console.log(values)
```

### ⏩ Desencadear outros métodos

Uma diferença importante entre esses dois métodos e a que no `map()` você consegue desencadear outros métodos, como por exemplo o `filter()`, `sort()`, `reduce()`. Já no `foreach()` você não tem acesso a esses métodos pois ele não retorna valor.

```javascript
const items = [1, 2, 3, 4]

items.forEach(item => item * item).reduce((total, value) => total + value)
//return: Uncaught TypeError: Cannot read property 'reduce' of undefined

items.map(item => item * item).reduce((total, value) => total + value)
//return: value: 30
```

### 📌 Mutabilidade

> forEach() não altera a matriz na qual é chamada. (No entanto, callback pode fazê-lo).
>
> map() não altera o array no qual é chamado (embora callback, se chamado, possa fazer isso). [ref](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

![](https://media.giphy.com/media/3o7527pa7qs9kCG78A/giphy.gif)

Na minha opinião essa definição não e totalmente clara, e um pouco confusa admito.

Para saber o que não altera o array original, primeiro temos que verificar como esses dois métodos funcionam.

O `map()` retorna um no array transformados com a mesma quantidade de dados. No caso de `forEach()`, mesmo que retorne `undefined`, ele **alterará** o array original com o callback.

Portanto, vemos claramente que `map()` depende da imutabilidade e `forEach()` é um método **modificador**.

### 🚀 Velocidade de desempenho

Para você validar a velocidade e desempenho isso depende de várias coisas do computador, a quantidade de dados, processamento, entre outras coisas. Você pode verificar por conta própria com este exemplo abaixo para ver qual é mais rápido.

```javascript
const items = [1, 2, 3, 4, 5]

const startForEach = performance.now()
items.forEach(x => (x + x) * 10000000000)

const endForEach = performance.now()
console.log(`Speed [forEach]: ${endForEach - startForEach} miliseconds`)

const startMap = performance.now()
items.map(x => (x + x) * 10000000000)

const endMap = performance.now()
console.log(`Speed [map]: ${endMap - startMap} miliseconds`)
//return: value: 30
```

### 🤓 Conclusão

Qual devo utilizar? Como tudo no mundo: Depende. Se você planeja alterar ou usar os dados, é preferível selecionar `map()`, pois ele retorna um novo array com os dados transformados.

Mas, se você não precisar do array novo, use `forEach().`

Espero que esse post curtinho tenha te ajudado de alguma maneira!

> As sugestões e críticas são altamente apreciadas.

Se houver mais diferenças, por favor, compartilhe-as nos comentários, caso contrário, obrigado por chegar até aqui 😍.

![](https://media.giphy.com/media/l2JI1JzL6YS8z5KUM/giphy.gif)
