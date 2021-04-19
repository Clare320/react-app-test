const fetch = require('node-fetch');

let student = {
    name: '11',
    age: 18,
    studentId: '12345'
};

const r_address = Reflect.get(student, 'address');
const address = student.address;

console.log('----->', r_address, address);

Reflect.set(student, 'address', 'hhh');

console.log('change---->', student.address);

// const observableStudent = observabl

const arr = ['a', 'b', 'c'];
const iter = arr[Symbol.iterator]();

const iterResult = iter.next();
console.log('iter---->', iterResult);

function* testG() {
    yield 1;
    yield 2;
    yield 3;
}

const g = testG();
console.log('1----->', g.next());

var url = 'https://api.github.com/users/github';
function* gen() {
    var result = yield fetch(url);
    console.log(result.bio);
}

const fetchG = gen()
const fetchResult = fetchG.next();

fetchResult.value.then(data => {
    return data.json();
}).then((result) => {
    fetchG.next(result);
});

console.log('test----> Generator async');

const fetchPromise = fetch(url);
fetchPromise.then(result => {

}).catch(error => {

});

// async/await
const testAsync = async () => {
    const result = await fetch(url);
    console.log('async---->', result.json());
};

testAsync();
console.log('testAsyncAndAwait--->');




