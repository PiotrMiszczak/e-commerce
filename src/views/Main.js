import React, {useState, useEffect} from 'react';
import ProductCard from '../components/ProductCard'
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import { getRequest } from '../actions/actions'

function Main(){
/*const [products, setProducts] = useState({
    loading:true,
    data:null,
    error:false,
})*/
const products = useSelector(state => state.products)
const {data, loading, error} = products;
const dispatch = useDispatch();

useEffect(()=>{
  dispatch(getRequest());

  
   /* axios.get('api/products')
    .then(resp => setProducts({
        loading:false,
        data: resp.data,
        error:false,
    }))
  .catch(()=>setProducts({
    loading:false,
    data: null,
    error:true,
}))*/
}
    
    
    ,[])
const loader = loading ? <div className="loader"></div> : null;
const productsList = data ? data.map((product)=>{return <ProductCard _id={product._id} key={product._id} price={product.price} name={product.name} image={product.avatar} />}) : null;
const errorWarning = error ? <h1>Loading failed, check your internet connection and try again</h1> : null;
    return(
        <div className="main">
        {loader}
        {productsList}
        {errorWarning}
      
    
        </div>
    )
}

export default Main;