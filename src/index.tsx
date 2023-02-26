import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router-dom';

import { ViewContextProvider } from './context/button-view-context/button-view-context';
import { ROUTE } from './routes/routes';
import { store } from './store/store';
import { GlobalStyle } from './ui/global-styles';
import { MainTemplate, SecondTemplate } from './components';
import { BookPage, ContractPage, MainPage } from './pages';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ViewContextProvider>
        <GlobalStyle />
        <HashRouter>
          <Routes>
            <Route path={ROUTE.HOME} element={<MainTemplate />}>
              <Route path={`${ROUTE.CATEGORY}/:id`} element={<BookPage />} />
              <Route path={ROUTE.HOME} element={<SecondTemplate />}>
                <Route index={true} element={<MainPage />} />
                <Route path={ROUTE.OFFER} element={<ContractPage content='offer' />} />
                <Route path={ROUTE.RULES} element={<ContractPage content='rules' />} />
                <Route path={ROUTE.CATEGORY} element={<MainPage />} />
              </Route>
            </Route>
          </Routes>
        </HashRouter>
      </ViewContextProvider>
    </Provider>
  </React.StrictMode>
);
