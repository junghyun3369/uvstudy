const arr = [
    [1,0,0,0,0],
    [1,1,0,0,0],
    [1,1,1,0,0],
    [1,1,1,1,0],
    [1,1,1,1,1]

];

for (const row of arr) {
    let str = "";
    for (const value of row) {
        str += (value === 1) ? 'O' : 'X';
    }
    console.log(str)
}


const arr1 = [
    [1,1,1,1,1],
    [0,1,1,1,1],
    [0,0,1,1,1],
    [0,0,0,1,1],
    [0,0,0,0,1]
];

for (const row of arr1) {
    let str = "";
    for (const value of row) {
        str += (value === 1) ? 'O' : 'X';
    }
    console.log(str)
}

const arr3 = [
    [1,1,1,1,1],
    [1,1,1,1,0],
    [1,1,1,0,0],
    [1,1,0,0,0],
    [1,0,0,0,0]
];

for (const row of arr3) {
    let str = "";
    for (const value of row) {
        str += (value === 1) ? 'O' : 'X';
    }
    console.log(str)
}

const arr4 = [
    [0,0,0,0,1],
    [0,0,0,1,1],
    [0,0,1,1,1],
    [0,1,1,1,1],
    [1,1,1,1,1]
];

for (const row of arr4) {
    let str = "";
    for (const value of row) {
        str += (value === 1) ? 'O' : 'X';
    }
    console.log(str)
}

const arr5 = [
    [0,0,0,0,1,0,0,0,0],
    [0,0,0,1,1,1,0,0,0],
    [0,0,1,1,1,1,1,0,0],
    [0,1,1,1,1,1,1,1,0],
    [1,1,1,1,1,1,1,1,1],
    [0,1,1,1,1,1,1,1,0],
    [0,0,1,1,1,1,1,0,0],
    [0,0,0,1,1,1,0,0,0],
    [0,0,0,0,1,0,0,0,0]

];

for (const row of arr5) {
    let str = "";
    for (const value of row) {
        str += (value === 1) ? 'O' : 'X';
    }
    console.log(str)
}