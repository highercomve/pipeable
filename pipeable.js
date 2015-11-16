
export function Pipeable(previus) {
  if (arguments.length === 0) {
    throw new Error("Pipe function need a first run argument")
  }
  return function Pipe (fn = null) {
    if (arguments.length === 0) {
      return previus
    }

    var args = Array.prototype.slice.call(arguments, 1)
    var args = [previus].concat(args)
    return Pipeable(fn.apply(null, args))
  }
}

export default function _chain(input) {
  return new Chain(input);
}

class Chain {
  constructor(value) {
    this.value = value
  }
  valueOf () {
    return this.value
  }
  pipe (fn) {
    if ( arguments.length == 1 ) {
      this.value = fn(this.value)
    } else {
      var args = Array.prototype.slice.call(arguments, 1)
      this.value = fn.apply(null, [this.value].concat(args))
    }
    return this
  }
  result() {
    return this.value
  }
}
