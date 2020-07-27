import React from 'react';
import style from './App.module.scss';
import UsersContainer from "./components/Users/UsersContainer";

function App() {
  return (
    <div className={style.app}>
      <UsersContainer />
    </div>
  );
}

export default App;
