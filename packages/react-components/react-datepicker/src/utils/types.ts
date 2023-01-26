import * as React from 'react';

export type RefObject<T> = {
  (component: T | null): void;
  current: T | null;
};

export type IRefObject<T> = React.RefObject<T> | RefObject<T> | ((ref: T | null) => void);

export type IBaseProps<T = any> = {
  componentRef?: IRefObject<T>;
};
