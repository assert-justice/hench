import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from './Common/Nav';
import Dashboard from './Common/Dashboard';
import Benefactor from './Common/Benefactor';
import SignIn from './Common/SignIn';

function App() {
  const [userName, setUserName] = useState(null);
  return (
    <div className="App">
      <Nav userName={userName}/>
      <Routes>
        <Route exact path = "/" element = {<Dashboard userName = {userName}/>}/>
        <Route path = "/benefactor" element = {<Benefactor/>}/>
        <Route path = "/sign-in" element = {
          <SignIn userName = {userName} setUserName={setUserName}/>}/>
      </Routes>
    </div>
  );
}

export default App;
