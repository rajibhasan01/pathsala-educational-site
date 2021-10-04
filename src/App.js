import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Skills from './components/Skills/Skills';
import About from './components/About/About';
import Dashboard from './components/Dashboard/Dashboard';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="">
      <Router>
        <Header />
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route exact path="/home">
            <Home></Home>
          </Route>

          <Route path="/skills">
            <Skills></Skills>
          </Route>

          <Route path="/about">
            <About></About>
          </Route>

          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
