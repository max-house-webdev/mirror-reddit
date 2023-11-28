export default function merge<O extends object>(objA: O) {
  return <K extends object>(objB: K) => ({
    ...objA,
    ...objB,
  });
}
