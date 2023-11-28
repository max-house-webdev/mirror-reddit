export default function pipeFn<U>(...fns: Function[]) {
  return <E>(initialValue: any): U =>
    fns.reduce((previousValue, fn) => fn(previousValue), initialValue);
}
