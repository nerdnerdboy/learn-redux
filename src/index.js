import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 1.引入store
import store from './store';

// 2.引入Provider组件
import { Provider } from 'react-redux';

// 3.使用Provider组件将react的根组件包裹，将store以props的形式传递下去

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

