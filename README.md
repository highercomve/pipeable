# Pipeable

This package help you to execute functions and pipe the result of that function has first parameter of the next function. Something like pipe operator on Erlang, Elixir or others functional programming languages.

This is a very little library, that all this is a currying function.

# Example use

```js
var _pipe = require('pipeable')

var arrayPiped = _pipe([1,2,3]) // return a Pipe function that carry the array [1,2,3]

var arrayMaped = arrayPiped(function(value) {
  return value.map(function(item) {
    return item + item
  })
}) // return a Pipe function that carry the result of the map

arrayMaped() // return the value of the currying => [2,4,6]
```

Can be used like a chaining method

```js
_pipe([1,2,3])(function(value) {
  return value.map(function(item) {
    return item + item
  })
})() // return the value of the currying => [2,4,6]
```
