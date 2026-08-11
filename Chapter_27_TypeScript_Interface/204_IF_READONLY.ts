interface Point {
    readonly x: number;
    readonly y: number;
}

const point: point = { x: 10, y: 20 };
//point x = 5; This is not possible

//ReadonlyArray
interface Data {
    readonly items: readonly number[];
}