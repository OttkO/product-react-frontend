import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ProductComponent from './components/ProductComponent';

function App() {
  return (
    <div>
      <HeaderComponent/>
        <div className="container">
          <ProductComponent/>
        </div>
      <FooterComponent/>
    </div>
  );
}

export default App;
