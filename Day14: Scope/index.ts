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


