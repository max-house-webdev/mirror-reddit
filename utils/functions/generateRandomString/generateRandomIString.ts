import assoc from '../../ts/assoc';

export function generateRandomString() {
  const radix = 36;
  const indexA = 2;
  const indexB = 15;
  return Math.random().toString(radix).substring(indexA, indexB);
}

export const assignId = assoc('id', generateRandomString());

export const generateId = <O extends object>(obj: O) => assignId(obj);

export const assignKey = assoc('key', generateRandomString());

export const generateKey = <O extends object>(obj: O) => assignKey(obj);
