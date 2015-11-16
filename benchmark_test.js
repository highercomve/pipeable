var _pipe = require('./pipeable').Pipeable
var _chain = require('./pipeable').default
var Benchmark = require('benchmark')

var suite = new Benchmark.Suite;

var test1 = _pipe([1,2,3,4,5])
(function(value) {
  return value.map(function(item) {
    return item + item
  })
})
(function(value) {
  return value.filter(function(item) {
    return item > 10
  })
})
(function(value) {
  return value.pop()
})()

var test2 = _chain([1,2,3,4,5])
.pipe(function(value) {
  return value.map(function(item) {
    return item + item
  })
})
.pipe(function(value) {
  return value.filter(function(item) {
    return item > 10
  })
})
.pipe(function(value) {
  return value.pop()
})
.result()


// add tests
suite.add('With functions', function() {
  return _pipe([1,2,3,4,5])
  (function(value) {
    return value.map(function(item) {
      return item + item
    })
  })
  (function(value) {
    return value.filter(function(item) {
      return item > 10
    })
  })
  (function(value) {
    return value.pop()
  })()
})
.add('With Classes', function() {
  return _chain([1,2,3,4,5])
  .pipe(function(value) {
    return value.map(function(item) {
      return item + item
    })
  })
  .pipe(function(value) {
    return value.filter(function(item) {
      return item > 10
    })
  })
  .pipe(function(value) {
    return value.pop()
  })
  .result()
})
// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
// run async
.run();
