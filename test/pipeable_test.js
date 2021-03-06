var expect = require('expect.js');

describe('Pipeable function tests', function() {
  var _pipe = require('../').Pipeable;
  var array = [1,2,3,4,5,6]

  it('Recibe a value, and return a function pipe', function () {
    var startPipe = _pipe(array)
    expect(startPipe.name).to.be.equal('Pipe')
  });

  it('When currying the second return have to be another Pipe function', function() {
    var startPipe = _pipe(array)
    (function(a) {
      return a
    })
    expect(startPipe.name).to.be.equal('Pipe')
  });

  it('When pipe get no argument if first run most throw and error', function() {
    expect(function() {
      var startPipe = _pipe()
    }).to.throwException()
  });

  it('Pipe get not arguments return the previus value', function() {
    var startPipe = _pipe(array)(function(value) {
      return value.map(function(item) {
        return item + item
      })
    })
    expect(startPipe()).to.be.eql([2,4,6,8,10,12])
  })

  it('Test a dificult pipeline', function() {
    var result = _pipe(array)(function(value) {
      return value.map(function(item) {
        return item + item
      })
    })(function(value) {
      return value.filter(function(item) {
        return item > 10
      })
    })(function(value) {
      return value.pop()
    })()

    expect(result).to.be.equal(12)
  })

});

describe('Pipe main tests', function() {
  var _pipe = require('../').default;
  var array = [1,2,3,4,5,6];

  it('Recibe a value, and return a function pipe', function () {
    var startPipe = _pipe(array)
    expect(startPipe).to.be.a('object')
  });

  it('When chaining the second return and object', function() {
    var startPipe = _pipe(array)
    .pipe(function(a) {
      return a
    })
    expect(startPipe).to.be.a('object')
  });

  it('When pipe get no argument if first run most throw and error', function() {
    expect(function() {
      var startPipe = _pipe()
    }).to.throwException()
  });

  it('Pipe get not arguments return the previus value', function() {
    var startPipe = _pipe(array)
    .pipe(function(value) {
      return value.map(function(item) {
        return item + item
      })
    }).result()
    expect(startPipe).to.be.eql([2,4,6,8,10,12])
  })

  it('Test a dificult pipeline', function() {
    var result = _pipe(array)
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

    expect(result).to.be.equal(12)
  })

});
