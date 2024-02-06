//  Day 11: 2D Arrays

function main() {
    let arr = Array(6);
    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp =>    parseInt(arrTemp, 10));
    }
    
   
}