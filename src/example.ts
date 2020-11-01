type ConcatFn = (a: string, b: string) => string

const concat: ConcatFn = (s0, s1) => s0 + s1;
const c = concat('a', 'b');


interface MyHometaskInterface {
    howIDoIt: string;
    simeArray: [string, string, number];
    withData: [
        {
            howIDoIt: string;
            simeArray: [string, number]
        }
    ]
}

const MyHometask: MyHometaskInterface = {
    howIDoIt: "I Do It Wel",
    simeArray: ["string one", "string two", 42],
    withData: [{howIDoIt: "I Do It Wel", simeArray: ["string one", 23]}],
}


interface MyArray<T> {
    [N: number]: T;

    map<U>(fn: (el: T, idx?: number, array?: T[]) => U): U[]

    reduce<U>(fn: (sum: U, el: T, idx?: number, array?: T[]) => U, init?: U): U;
}


