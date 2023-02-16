import { ReactNode } from 'react';

export interface IView {
  isColumn: boolean;
  isSquare: boolean;
}

export interface IViewContext {
  view: IView;
  setView: (view: IView) => void;
}

export interface IViewProviderProps {
  children: ReactNode;
}