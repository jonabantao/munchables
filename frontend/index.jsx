import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  let preloadedState;

  if (window.currentUser) {
    preloadedState = {
      session: {
        currentUser: window.currentUser,
      },
    };

    delete window.currentUser;
  }

  const store = configureStore(preloadedState);
  ReactDOM.render(<Root store={store} />, document.getElementById('root'));
});
