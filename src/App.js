import React,{Component} from 'react';
import { BrowserRouter as Router,Route,Redirect,Link,Switch } from "react-router-dom";
import './App.css';
import Home from './Components/Home';
import Profile from './Components/Profile';
import News from './Components/News';
import Error from './Components/Error';

class App extends Component {
  state = {
    loggedIn: false
  }
  changeState = () => {
    this.setState({
      loggedIn: !this.state.loggedIn
    })
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Link exact to="/">Home</Link><br/>
          <Link exact to="/news">News</Link><br/>
          <Link exact to="/profile">Profile</Link>
          <br/><br/>
          <input
            type="button"
            onClick={this.changeState}
            value={this.state.loggedIn ? "Logout" : "Login"}
          />
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/news" exact component={News}/>
            <Route path="/profile" exact render={() => this.state.loggedIn ? (<Profile/>) : (<Redirect to="/"/>)}/>
            <Route component={Error}/>          
          </Switch>
        </div>  
      </Router>
    );
  }
}

export default App;
