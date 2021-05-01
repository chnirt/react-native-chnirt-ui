import type { ReactNode } from 'react';

export interface IMyText {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  p?: boolean;
  bold?: boolean;
  italic?: boolean;
  children?: ReactNode;
  style?: object;
  color?: string;
}
