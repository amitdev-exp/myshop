
import './App.css';
import Header from './containers/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CartListing from './containers/CartListing';
import CartDetail from './containers/CartDetails';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact Component={CartListing} ></Route>
          <Route path="/cart/:cartId" exact Component={CartDetail} ></Route>
          <Route>404 NOT FOUND !</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
