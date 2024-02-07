class Difference {
    private elements: number[];
    public maximumDifference: number;

    constructor(elements: number[]) {
        this.elements = elements;
        this.maximumDifference = 0;
    }
    
    computeDifference(): void {
        let max = Math.max(...this.elements);
        let min = Math.min(...this.elements);
        this.maximumDifference = Math.abs(max - min);
    }
}

function main() {
    // Enter your code here
    
    const n: number = parseInt(readLine().trim(), 10);
    const a: number[] = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));
    
    const diff: Difference = new Difference(a);
    diff.computeDifference();
    console.log(diff.maximumDifference);
}
