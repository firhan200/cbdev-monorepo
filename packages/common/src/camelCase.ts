type SnakeToCamel<S extends string> = S extends `${infer T}_${infer U}`
  ? `${T}${Capitalize<SnakeToCamel<U>>}`
  : S;

type CamelToSnake<S extends string> = S extends `${infer T}${infer U}`
  ? T extends Uncapitalize<T>
    ? `${Uncapitalize<T>}${CamelToSnake<U>}`
    : `_${Uncapitalize<T>}${CamelToSnake<U>}`
  : S;

export type DeepCamelKeys<T> = T extends object
  ? T extends Array<infer Item>
    ? Array<DeepCamelKeys<Item>>
    : {
        [K in keyof T as SnakeToCamel<string & K>]: T[K] extends (
          ...args: any[]
        ) => any
          ? T[K]
          : T[K] extends Date
          ? T[K]
          : DeepCamelKeys<T[K]>;
      }
  : T;

export type DeepSnakeKeys<U> = U extends object
  ? U extends Array<infer Item>
    ? Array<DeepSnakeKeys<Item>>
    : {
        [K in keyof U as CamelToSnake<string & K>]: U[K] extends (
          ...args: any[]
        ) => any
          ? U[K]
          : U[K] extends Date
          ? U[K]
          : DeepSnakeKeys<U[K]>;
      }
  : U;

export const snakeToCamelCase = <T>(input: T): DeepCamelKeys<T> => {
  if (
    typeof input !== 'object' ||
    input === null ||
    typeof input === 'function' ||
    input instanceof Date
  ) {
    return input as DeepCamelKeys<T>;
  }

  if (Array.isArray(input)) {
    return input.map((item) => snakeToCamelCase(item)) as DeepCamelKeys<T>;
  }

  const result: any = {} as DeepCamelKeys<T>;
  for (const key in input) {
    if (Object.prototype.hasOwnProperty.call(input, key)) {
      const camelKey = key.replace(/_\w/g, (match) => match[1].toUpperCase());
      result[camelKey] = snakeToCamelCase(input[key]);
    }
  }
  return result;
};

export const camelToSnakeCase = <T>(input: T): DeepSnakeKeys<T> => {
  if (
    typeof input !== 'object' ||
    input === null ||
    typeof input === 'function' ||
    input instanceof Date
  ) {
    return input as DeepSnakeKeys<T>;
  }

  if (Array.isArray(input)) {
    return input.map((item) => camelToSnakeCase(item)) as DeepSnakeKeys<T>;
  }

  const result: any = {} as DeepSnakeKeys<T>;
  for (const key in input) {
    if (Object.prototype.hasOwnProperty.call(input, key)) {
      const snakeKey = key.replace(
        /[A-Z]/g,
        (match) => `_${match.toLowerCase()}`,
      );
      result[snakeKey] = camelToSnakeCase(input[key]);
    }
  }
  return result;
};
