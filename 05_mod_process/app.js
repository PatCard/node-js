//console.log(process);
//console.log(process.env);
/*
console.log(process.argv);
console.log(process.argv[0]);
console.log(process.argv[1]);
console.log(process.argv[2]);
console.log(process.argv[3]);
*/
for(let i = 0; i < process.argv.length; i++){ //i = 2
  console.log(process.argv[i]);
}

console.log(process.memoryUsage());