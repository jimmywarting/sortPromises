# sort-promises
Sort promises by the fastest

Like [Promise.race][1] but you get back all the result in the order they resolve or reject

```js
let sortPromises = require('sort-promises')

let car1 = new Promise(rs => setTimeout(rs, 2000, 'Car 1'))
let car2 = new Promise(rs => setTimeout(rs, 4000, 'Car 2'))
let car3 = new Promise(rs => setTimeout(rs, 3000, 'Car 3'))
let car4 = new Promise(rs => setTimeout(rs, 6000, 'Car 4'))

let racingCars = sortPromises([car1, car2, car3, car4])

async function presentResult() {
  for (let car of racingCars) {
    console.log((await car) + ' cross the finish line')
  }
}

presentResult().then(goHome)
```
```
result: 

Car 1 cross the finish line
Car 3 cross the finish line
Car 2 cross the finish line
Car 4 cross the finish line
```

 [1]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise/race
