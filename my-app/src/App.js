import React, { useState, useEffect } from 'react';
import data from "./data/data.json"
import Header from './components/Header';
import Footer from './components/Footer';
import Container from './components/Main';
function App() {
  const [products, setProducts] = useState({});
  const [searchInput,setSearchInput] = useState("")
  const [totalProducts,setTotalProducts] = useState(0)
  useEffect(()=>{
    setProducts(data.products);
  },[])
  function onInput(input){
    setTotalProducts(0)
    setSearchInput(input.target.value);
  }
  function ProdCount(count){
    setTotalProducts((prevCount)=>prevCount+count);
  }
  return (
    <div>
      <Header onInput={onInput} />
      <div>
        <br/>
      <hr/>
      <p>Results: {totalProducts} Products</p>
      <hr/>
      {
        Object.entries(products).map(([key, value]) => {
          return <Container ProdCount={ProdCount} searchInput={searchInput} alphabet={key}  product={value} />
        })
      }
      </div>
      <Footer/>
    </div>
  );
}

export default App;
