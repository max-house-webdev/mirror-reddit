import React from 'react';
import classNames from 'classnames';

import styles from './Text.scss';

type TTag = 'h1' | 'h2' | 'h3' | 'span' | 'p' | 'div';
type TFontSize = 10 | 12 | 14 | 16 | 20 | 28;

type TColor =
  | 'error'
  | 'black'
  | 'orange'
  | 'green'
  | 'white'
  | 'greyF4'
  | 'greyF3'
  | 'greyD9'
  | 'greyC4'
  | 'grey99'
  | 'grey66';

export interface ITextProps {
  As?: TTag;
  fontSize?: TFontSize;
  mobileFontSize?: TFontSize;
  tabletFontSize?: TFontSize;
  desktopFontSize?: TFontSize;
  bold?: boolean;
  upperCase?: boolean;
  color?: TColor;
  children?: React.ReactNode;
  padding?: boolean;
}

export function Text(props: ITextProps) {
  const {
    As = 'span',
    fontSize = 14,
    mobileFontSize = fontSize,
    tabletFontSize = fontSize,
    desktopFontSize = fontSize,
    bold,
    upperCase,
    color = 'black',
    children = null,
    padding = true,
  } = props;

  const classes = classNames(
    styles[`s${fontSize}`],
    {
      [styles[`m${mobileFontSize}`]]: mobileFontSize,
    },
    {
      [styles[`t${tabletFontSize}`]]: tabletFontSize,
    },
    {
      [styles[`d${desktopFontSize}`]]: desktopFontSize,
    },
    styles[color],
    { [styles['bold']]: bold },
    { [styles['upperCase']]: upperCase },
    { [styles['padding']]: padding }
  );

  return <As className={classes}>{children}</As>;
}
