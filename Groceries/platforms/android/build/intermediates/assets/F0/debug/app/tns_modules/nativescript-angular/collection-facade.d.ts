export declare function isListLikeIterable(obj: any): boolean;
export declare class ListWrapper {
    static createFixedSize(size: number): any[];
    static createGrowableSize(size: number): any[];
    static clone<T>(array: T[]): T[];
    static forEachWithIndex<T>(array: T[], fn: (t: T, n: number) => void): void;
    static first<T>(array: T[]): T;
    static last<T>(array: T[]): T;
    static indexOf<T>(array: T[], value: T, startIndex?: number): number;
    static contains<T>(list: T[], el: T): boolean;
    static reversed<T>(array: T[]): T[];
    static concat(a: any[], b: any[]): any[];
    static insert<T>(list: T[], index: number, value: T): void;
    static removeAt<T>(list: T[], index: number): T;
    static removeAll<T>(list: T[], items: T[]): void;
    static remove<T>(list: T[], el: T): boolean;
    static clear(list: any[]): void;
    static isEmpty(list: any[]): boolean;
    static fill(list: any[], value: any, start?: number, end?: number): void;
    static equals(a: any[], b: any[]): boolean;
    static slice<T>(l: T[], from?: number, to?: number): T[];
    static splice<T>(l: T[], from: number, length: number): T[];
    static sort<T>(l: T[], compareFn?: (a: T, b: T) => number): void;
    static toString<T>(l: T[]): string;
    static toJSON<T>(l: T[]): string;
    static maximum<T>(list: T[], predicate: (t: T) => number): T;
    static flatten<T>(list: Array<T | T[]>): T[];
    static addAll<T>(list: Array<T>, source: Array<T>): void;
}
