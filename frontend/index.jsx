import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  let preloadedState = undefined;

  if (window.currentUser) {
    preloadedState = {
      session: {
        currentUser: window.currentUser,
      }
    };
  }

  const store = configureStore(preloadedState);
  // DELET THIS vvv
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // REMOVE THIS ^^^

  ReactDOM.render(<Root store={store} />, document.getElementById('root'));
});