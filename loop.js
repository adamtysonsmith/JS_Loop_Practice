// Loop 1
console.log('Loop 1');
for (var i = 0; i < 600; i += 100) {
    console.log(i);
} // => 0 100 200 300 400 500

// Loop 2
console.log('Loop 2');
for (var i = 1; i < 65; i += i) {
    console.log(i);
} // => 1 2 4 8 16 32 64

// Loop 3
console.log('Loop 3');
for (var i = 1; i < 4; i++) {
    for (var j = 1; j < 4; j++) {
        console.log(i);
    }
} // => 1 1 1 2 2 2 3 3 3

// Loop 4
console.log('Loop 4');
for (var i = 0; i <= 10; i += 2) {
    console.log(i);
} // => 0 2 4 6 8 10

// Loop 5
console.log('Loop 5');
for (var i = 3; i <= 15; i += 3) {
    console.log(i);
} // => 3 6 9 12 15

// Loop 6
console.log('Loop 6');
for (var i = 9; i >= 0; i--) {
    console.log(i);
} // => 9 8 7 6 5 4 3 2 1 0

// Loop 7
console.log('Loop 7');
for (var i = 0; i <= 2; i++) {
    for (var j = 0; j <= 3; j++) {
        console.log(j);
    }
} // => 0 1 2 3 0 1 2 3 0 1 2 3