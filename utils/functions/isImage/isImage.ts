export function isImage(str: string) {
  const regexp = /\.(jpe?g|png)$/;

  return regexp.test(str);
}
