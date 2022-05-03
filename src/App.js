import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
import Profile from './pages/Profile';
import { useState } from 'react'
function App() {
  
  const [isLog, setIsLog] = useState(false)
  return (
    <Router>
      <div className="App">
        <Header />
        <button onClick={() => setIsLog(!isLog)} >{isLog ? 'Log Out' : 'Log in'}</button>
      </div>
      
      <Switch>
        <Route 
        path='/' 
        component={Home} exact
        />
        <Route 
        path='/About/:id' 
        component={About} />
        <Route 
        path='/Profile'>
          <Profile isLog={isLog} />
        </Route>
      </Switch>
    </Router >
  );
}

export default App;
