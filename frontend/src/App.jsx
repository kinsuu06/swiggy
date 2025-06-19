import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import {Provider} from "react-redux";
import appStore from './utils/appStore';

function App() {
  return (
    <Provider store={appStore}>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;