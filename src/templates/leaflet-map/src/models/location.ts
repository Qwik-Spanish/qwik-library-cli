export interface ILocation {
    name: string;
    point: Array<number>;
    boundaryBox? : string;
    zoom: number;
    marker?: boolean;
}