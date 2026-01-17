function test() {
    if (true) {
        var varNum = 0;
        let letNum = 0;
    }
    console.log('varNum', varNum); // 0 -> var is declared to function level
    console.log('letNum', letNum); // throws error -> let is only declared to its neares block wich is the if statement
}
test()