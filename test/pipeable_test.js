var expect = require('expect.js');
var _pipe = require('../');

describe('Pipeable main tests', function() {

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

});
