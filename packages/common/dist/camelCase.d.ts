type SnakeToCamel<S extends string> = S extends `${infer T}_${infer U}` ? `${T}${Capitalize<SnakeToCamel<U>>}` : S;
type CamelToSnake<S extends string> = S extends `${infer T}${infer U}` ? T extends Uncapitalize<T> ? `${Uncapitalize<T>}${CamelToSnake<U>}` : `_${Uncapitalize<T>}${CamelToSnake<U>}` : S;
export type DeepCamelKeys<T> = T extends object ? T extends Array<infer Item> ? Array<DeepCamelKeys<Item>> : {
    [K in keyof T as SnakeToCamel<string & K>]: T[K] extends (...args: any[]) => any ? T[K] : T[K] extends Date ? T[K] : DeepCamelKeys<T[K]>;
} : T;
export type DeepSnakeKeys<U> = U extends object ? U extends Array<infer Item> ? Array<DeepSnakeKeys<Item>> : {
    [K in keyof U as CamelToSnake<string & K>]: U[K] extends (...args: any[]) => any ? U[K] : U[K] extends Date ? U[K] : DeepSnakeKeys<U[K]>;
} : U;
export declare const snakeToCamelCase: <T>(input: T) => DeepCamelKeys<T>;
export declare const camelToSnakeCase: <T>(input: T) => DeepSnakeKeys<T>;
export {};
