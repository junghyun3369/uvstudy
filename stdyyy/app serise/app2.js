//for(var a = 0; a < 10; a + 1 ) {
//for(var a = 0; a < 10; a * 2 ) {
//for(var a = 0; a < 10; a++ ) { //무한루프 빠지지않게 조심
for(var a = 0; a < 10; a++ ) {
    if(a%2 === 1) continue
    for(var b = 1; b < 10; b++ ) {
        console.log(`${a} * ${b} = ${a * b}`)
    }
}