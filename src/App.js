import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from './components/Header';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <div className="content">
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/contact'>
              <Contact />
            </Route>
            <Route exact path='/about'>
              <About />
            </Route>
            <Route exact path='/portfolio'>
              <Portfolio />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
