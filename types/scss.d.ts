interface IStylesSCSS {
  [key: string]: string;
}

declare module '*.scss' {
  const styles: IStylesSCSS;
  export = styles;
}

declare module '*.sass' {
  const styles: IStylesSCSS;
  export = styles;
}
