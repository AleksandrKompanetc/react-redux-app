import React from 'react';
import './App.css';
import { Profile, LoginForm } from './components';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Profile />
        <LoginForm />
      </div>
    </Provider>
  );
}

export default App;
