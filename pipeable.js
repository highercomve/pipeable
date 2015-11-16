
function Pipeable(previus = null) {
  var pipe = function Pipe (fn = null) {
    if (arguments.length === 0) {
      return previus
    }

    var args = Array.prototype.slice.call(arguments, 1)
    var args = [previus].concat(args)
    return Pipeable(fn.apply(null, args))
  }

  if (previus === null) {
    throw new Error("Pipe function need a first run argument")
  }
  return pipe
}

export default Pipeable
