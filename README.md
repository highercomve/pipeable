# Pipeable

This package help you to execute functions and pipe the result of that function has first parameter of the next function. Something like pipe operator on Erlang, Elixir or others functional programming languages.

This is a very little library, that all this is a currying function.

After do some benchmark y create the same functionality using classes, because classes are more fast.

```
With functions x 20,242 ops/sec ±6.54% (70 runs sampled)
With Classes x 381,338 ops/sec ±5.22% (70 runs sampled)
```

## New sintax for the class

```js
var _pipe = require('pipeable').default

var result = _pipe([1,2,3])
  .pipe(function(value) {
    return value.map(function(item) {
      return item + item
    })
  })
  .result() // return => [2,4,6]
```


### Example using the old function pipe

```js
var _pipe = require('pipeable').Pipeable

var arrayPiped = _pipe([1,2,3]) // return a Pipe function that carry the array [1,2,3]

var arrayMaped = arrayPiped(function(value) {
  return value.map(function(item) {
    return item + item
  })
}) // return a Pipe function that carry the result of the map

arrayMaped() // return the value of the currying => [2,4,6]
```

#### Can be used chaining functions

```js
var _pipe = require('pipeable').Pipeable

_pipe([1,2,3])(function(value) {
  return value.map(function(item) {
    return item + item
  })
})() // return the value of the currying => [2,4,6]
```
