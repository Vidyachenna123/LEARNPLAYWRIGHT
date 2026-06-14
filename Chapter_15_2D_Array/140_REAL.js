let testMatrix = [
    ["login", "pass", 200],
    ["checkout", "fail", 404],
    ["search", "pass", 180]
];

//How many testcases we have executed?
//How many testcases are passed?
//What is the status code that you have got for failed

for (let i = 0; i < testMatrix.length; i++) {
    for (let j = 0; j < testMatrix[i].length; j++) {
        console.log(testMatrix[i][j]);
    }
}

for (let row of testMatrix) {
    for (let cell of row) {
        ProcessingInstruction.stdout.write(cell + " ")
    }
    console.log();
}

//forEach
testMatrix.forEach(row => {
    row.forEach(cell => ProcessingInstruction.stdout.write(cell + " "));
    console.log();
});