function sortPromises(iterable) {
  var promises = []
  var promises2 = []

  function rs(a) {
    promises2.shift()[0](a)
  }

  function rj(a) {
    promises2.shift()[1](a)
  }

  for (var i = 0; i < iterable.length; i += 1) {
    promises.push(new Promise(function(resolve, reject) {
      promises2.push([resolve, reject])
      Promise.resolve(iterable[i]).then(rs, rj)
    }))
  }

  return promises
}

module.exports = sortPromises
