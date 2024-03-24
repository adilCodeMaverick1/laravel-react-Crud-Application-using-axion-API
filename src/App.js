
import './App.css';
import {Routes ,Route ,Link} from 'react-router-dom';
import Home from './pages/home';
import Create from './pages/create';
import Edit from './pages/edit';

function App() {
  return (
    <div className="container-fluid">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <h5 className="navbar-brand" href="#">Navbar</h5>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/" className="nav-link">Home </Link>
          </li>
          <li className="nav-item">
            <Link to="/create" className="nav-link">Create</Link>
          </li>
         
        </ul>
      </div>
    </nav>
  <div className="container">
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/edit/:id' element={<Edit/>}/>
    </Routes>
  </div>
    </div>
  );
}

export default App;
