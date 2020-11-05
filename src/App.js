import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ProductComponent from './components/ProductComponent';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
          <div className = "container">
            <HeaderComponent/>
              <div className="container">
                <Switch> 
                    <Route path = "/" component = {ProductComponent}></Route>
                    <Route path = "/products" component = {ProductComponent}></Route>
                    <ProductComponent/>
                </Switch>
              </div>
            <FooterComponent/>
          </div>
      </Router>
    </div>
  );
}

export default App;
