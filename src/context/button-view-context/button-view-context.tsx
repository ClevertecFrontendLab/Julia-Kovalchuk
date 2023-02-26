import { createContext, FC, useContext, useState } from 'react';

import { IViewContext, IViewProviderProps } from './types';

export const ViewContext = createContext<IViewContext>({} as IViewContext);

const useContextViewValue = () => {
  const [view, setView] = useState<IViewContext>({
    view: {
      isColumn: false,
      isSquare: true,
    },
    setView: () => {
      setView((context) => ({
        ...context,
        view: {
          isColumn: !context.view.isColumn,
          isSquare: !context.view.isSquare,
        },
      }));
    },
  });

  return view;
};

export const useViewContext = () => useContext<IViewContext>(ViewContext);

export const ViewContextProvider: FC<IViewProviderProps> = ({ children }) => (
  <ViewContext.Provider value={useContextViewValue()}>{children}</ViewContext.Provider>
);
