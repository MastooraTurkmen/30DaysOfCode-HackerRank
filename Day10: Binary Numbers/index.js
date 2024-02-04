// Challenge Answer


function main() {
    const n = parseInt(readLine().trim(), 10);
    let binaryString = n.toString(2);
    let maxOnes = 0;
    let currentOnes = 0;
    
    for (let i = 0; i < binaryString.length; i++) {
        if(binaryString[i] === "1"){
            currentOnes ++;
            maxOnes = Math.max(maxOnes, currentOnes)
        }
        else {
            currentOnes = 0;
        }
    }
    
    console.log(maxOnes)
    
}