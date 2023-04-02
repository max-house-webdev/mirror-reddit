interface IStylesCSS {
  [key: string]: string;
}

declare module '*.css' {
  const styles: IStylesCSS;
  export = styles;
}
