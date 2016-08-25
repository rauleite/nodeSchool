var sum = 0;
for(var i = 0; i <= process.argv.length -1; i++) {
    if (i < 2) continue;
    sum += Number(process.argv[i]);
}

console.log(sum);