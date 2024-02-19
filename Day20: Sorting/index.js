// Day 20: Sorting


function main() {
    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    // Write your code here
    let swapped;
    let numSwaps = 0;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (a[i] > a[i + 1]) {
                let temp = a[i];
                a[i] = a[i + 1];
                a[i + 1] = temp;
                swapped = true;
                numSwaps++
            }
        }
    } while (swapped);
    console.log('Array is sorted in ' + numSwaps + ' swaps.')
    console.log('First Element:', a[0]);
    console.log('Last Element:', a[n - 1]);
}