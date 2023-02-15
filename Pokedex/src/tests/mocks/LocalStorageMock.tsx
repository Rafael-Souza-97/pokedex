type Store = {
  [key: string]: string;
};

export const store: Store = {};

export const getItem = (key: string): string | null => {
  return store[key] ?? null;
};

export const setItem = (key: string, value: string): void => {
  store[key] = value;
};

export const removeItem = (key: string): void => {
  delete store[key];
};

export const clear = (): void => {
  Object.keys(store).forEach((key) => delete store[key]);
};
