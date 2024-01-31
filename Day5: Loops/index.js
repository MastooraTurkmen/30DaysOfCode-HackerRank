
/*
  The Challenge Answer:
*/

function main() {
    const n = parseInt(readLine().trim(), 10);
    
    for (let i = 1; i <= 10; i++) {
        const result = `${n} x ${i} = ${n * i}`
        console.log(result)
    }
}