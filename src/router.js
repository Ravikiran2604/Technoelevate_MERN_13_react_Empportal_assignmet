import {Link ,BrowserRouter ,Route ,Switch} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import './components/Style.css' 
import './components/Homestyle.css'

export const routing = (
    <BrowserRouter>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link className="navbar-brand" to="/">Employee Portal</Link>
    <button className="navbar-toggler" type="button"
     data-toggle="collapse" 
     data-target="#navbarSupportedContent" 
     aria-controls="navbarSupportedContent" 
     aria-expanded="false" 
     aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/home">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/login">Login</Link>
      </li>

    </ul>
    </div>
    </nav>
    <Switch>
    <Route path="/" exact> <Home/> </Route>
    <Route path="/home" component={Home}/>
    <Route path="/login" component={Login}/>
    </Switch>
    </BrowserRouter>
)