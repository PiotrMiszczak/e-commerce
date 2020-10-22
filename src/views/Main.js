import React, {useState, useEffect} from 'react';
import ProductCard from '../components/ProductCard'
import axios from 'axios'

function Main(){
const [product, setProduct] = useState({
    loading:true,
    data:null,
    error:false,
})

useEffect(()=>{
  
    axios.get('https://5f799e65e402340016f932a1.mockapi.io/commerce')
    .then(resp => setProduct({
        loading:false,
        data: resp.data,
        error:false,
    }))
  .catch(()=>setProduct({
    loading:false,
    data: null,
    error:true,
}))
}
    
    
    ,[])
const loader = product.loading ? <div className="loader"></div> : null;
const products = product.data ? product.data.map((product)=>{return <ProductCard key={product.id} price={product.price} name={product.name} image={product.avatar} />}) : null;
const error = product.error ? <h1>Loading failed, check your internet connection and try again</h1> : null;
    return(
        <div className="main">
        {loader}
        {products}
        {error}
      
    
        </div>
    )
}

export default Main;