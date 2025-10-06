export const defineEnum = <const TKeys extends string[]>(keys: TKeys) => {
  return Object.freeze(
    keys.reduce(
      (acc, key) => {
        acc[key] = key;
        return acc;
      },
      {} as Record<string, string>,
    ),
  ) as {
    readonly [K in TKeys[number]]: K;
  };
};

export type Enum<T extends Record<string, string>> = T[keyof T];
