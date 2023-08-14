import './App.css';
import Search from "./components/Search";
import ProductsList from './components/ProductsList';
import { useState , useEffect } from 'react'
import CartList from './components/CartList';
import axios from "axios"
import ProductDetails from './components/ProductDetails';

const App = () => {
const [menuView, setMenuView] = useState(false);
const [view,setView] = useState("productList");
const [data , setData] = useState([])
const [computers , setComputers] = useState([])
const [phones , setPhones] = useState([])
const [electronics , setElectronics] = useState([])
const [oneProduct , setOneProduct] = useState({})
const [trigger,setTrrigger]=useState(false)
const [cart , setCart] = useState([])

console.log(data)
console.log(computers);
useEffect(() => {
  axios.get("http://localhost:1000/api/products").then((res) => {
     
  setComputers(res.data.filter((e) => e.category === 'computers'));
  setPhones(res.data.filter((e) => e.category === 'phones'));
  setElectronics(res.data.filter((e) => e.category === 'electronics'));
  
  setData(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
}, [trigger]);

const addToCart = (product) =>{
setCart([...cart,product] )
}


const stal =( obj)=>{
  setOneProduct(obj)
  switchView("details")
}

const stalSearch = (input) => {
  const filtr= data.filter((e) => {
    return e.name.toLowerCase().includes(input.toLowerCase());
  })
  setData(filtr)
};


const toggleMenu = ()=> {
  setMenuView(!menuView)
}
const switchView = (x) => {
  setView(x)
}
  return (
    <div className="App">
        <div className="nav">
          <span className="logo" onClick={()=>{switchView ("productList")
        setTrrigger(!trigger)}}>TEK STORE</span>
          { view ==="productList" &&<Search  stat={stalSearch} />}
        { view ==="productList" && <span className="items" onClick={toggleMenu}>
          &#9660;
            CATEGORIES
            &#9660;
          </span>}
          <span className="items" onClick={()=>switchView ("cart")}>
            🛒
            CART
          </span>
        </div>
       {menuView && <div className="menu">
            <span className='menu-item' onClick={()=>setData(computers)}>computers</span>
            <span className='menu-item' onClick={()=>setData(phones)}>phones</span>
            <span className='menu-item' onClick={()=>setData(electronics)}>electronics</span>
          </div>} 
          addToCart

          {view ==="productList" && <ProductsList stal={stal} products={data} addToCart={addToCart}/>}
          {view ==="details" && <ProductDetails product={oneProduct}/>}
          {view ==="cart"&&<CartList cartItem={cart}/>}   
    </div>
  );
}

export default App;
