export default function composeFn<U>(...fns: Function[]) {
  return <E>(initialValue: any): U =>
    fns.reduceRight((previousValue, fn) => fn(previousValue), initialValue);
}
