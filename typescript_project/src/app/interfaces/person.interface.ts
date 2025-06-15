
//convention: des interfaces sollte immer mit einem großen Buchstaben beginnen

// ein importierbares interface, das wir in anderen Dateien verwenden können
 export interface Person { // definition von dem objekt das wir bereits haben
    name: string | number;
    age: number;
    position?: string;
}