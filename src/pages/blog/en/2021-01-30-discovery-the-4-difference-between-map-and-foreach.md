---
templateKey: blog-post
locale: en
title: discovery the 4 difference between map and foreach
titulo: Discovery the 4 difference between map and foreach
data: 2021-01-30T09:39:09.000Z
image: assets/img/mapfor.png
destaque: false
tag: Javascript
---
Today you will discovery the difference between `map()`, `foreach()` and how these teachings made me **developer better** in JavaScript.

How do you know, JavaScript has something methods that help us work with arrays. The most famous are `seuArray.map()` and `seuArray.forEach()`, but that world is the bigger than you can imagine, today exists more than 10 methods that help us work with arrays 😮 (the next post I talk about these)

But for those starting out in programming, have difficult to understand the concepts and difference of two. **I'm here for that**, help you to understand the difference between these methods 😃

Topics

* Definition
* The return
* Trigger other methods
* Mutability
* Performance speed
* Conclusion 

### 🏳️ Definition

#### forEach()

> The `forEach()` method performs a function provided once for each key / value pair in the Map object, in order of insertion. [ref](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach)

By default, this method go through all the items in an array, like a **normal loop**.



#### map()

> The `map()` invokes the callback function passed by argument for each element of the Array and returns a new Array as a result.[ref](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

The practice the method foreach and map look the same, but with the difference to **return**. The foreach manipulate the real data for from array and map create a new array.

### 📍 The return

How I talk about previously, the deffinition the method `forEach()` just walks over the array, while the `map()` return new value.

```javascript
const items = [1,2,3,4]

const values = items.forEach(item => item * item);

// return: undefined
console.log(values);
```

```javascript
const items = [1,2,3,4]

const values = items.map(item => item * item);

// return: [1, 4, 9, 16]
console.log(values);
```

### ⏩ Trigger other methods

An important difference between these two methods is that in `map()` you can trigger other methods, such as `filter()`, `sort()`, `reduce()`. In `foreach()` you do not have access to these methods because it does not return a value.

```javascript
const items = [1, 2, 3, 4]

items.forEach(item => item * item).reduce((total, value) => total + value)
//return: Uncaught TypeError: Cannot read property 'reduce' of undefined

items.map(item => item * item).reduce((total, value) => total + value)
//return: value: 30
```

### 📌 Mutability

> forEach() does not change the array in which it is called. (However, callback can do this).
>
> map() does not change the array it is called in (although callback, if called, can do that). [ref](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

![](https://media.giphy.com/media/3o7527pa7qs9kCG78A/giphy.gif)

My opinion that definition isn't totally clear, that is confusing. 

To find out what doesn't change the original array, the first ones have to check how these two methods work.

The `map()` returns one in the array transformed with the same amount of data. In the case of `forEach()`, even if it returns `undefined`, it  **will**  change \*\* the original array with the callback.

Therefore, we clearly see that `map()` depends on immutability and `forEach()` is a  **modifying**  method.


### 🚀 Performance speed

For you to validate the speed and performance it depends on several things of the computer, the amount of data, processing, among other things. You can check for yourself with this example below to see which is faster.

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

### 🤓 Conclusion

Which one should I use? Like everything in the world: It depends. If you plan to change or use the data, it is preferable to select `map()`, as it returns a new array with the transformed data. But, if you don't need the new array, use `forEach().`

I hope this short post has helped you in some way!

> Suggestions and criticisms are highly appreciated.

If there are more differences, please share them in the comments, otherwise, thanks for getting here 😍.

![](https://media.giphy.com/media/l2JI1JzL6YS8z5KUM/giphy.gif)