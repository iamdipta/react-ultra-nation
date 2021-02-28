import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';




function App() {
  const [countries, setCountries] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => {
        setCountries(data);
      })
  }, [])
  const handleAddCountry = (country) => {
    const newCart = [...cart, country];
    setCart(newCart)

  }

  return (
    <div className='main'>
      <h1>No of Country: {countries.length}</h1>
      <h3>Added : {cart.length}</h3>
      <div className="App">
        <div >
          <ul>
            {

              countries.map(country => <Country country={country} key={country.alpha3Code} handleAddCountry={handleAddCountry} ></Country>)
            }
          </ul>

        </div>
        <div>
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
}

export default App;
