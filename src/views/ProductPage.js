import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import axios from 'axios'
import StarRating from '../components/StarRating'
import { faCoins, faPlusCircle} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Product(){
    const {id} = useParams()
    const [product, setProduct] = useState({
        loading:true,
        data:null,
        error:false,
        numOfRew:0,
        
    })

    const stock = true; // TEMPORARY
    useEffect(()=>{
        axios.get(`https://5f799e65e402340016f932a1.mockapi.io/commerce/${id}`)
        .then(resp => setProduct({
            loading:false,
            data: resp.data,
            error:false,
            numOfRew:0,
        }))

      .catch(()=>setProduct({
        loading:false,
        data: null,
        error:true,
        numOfRew:0,
    }))
    }
        
        
        ,[])

        let content = null;
       
       
        if(product.loading){
            content = <div className="loader"></div>
        }
        if(product.error){
            content = <h1>ERROR occured, check your internet</h1>
        }
        if(product.data){
            content = 
            <div className="product__page">
            <img className="product__page-image" src={product.data.avatar}></img>
            <div className="product__info">
                <h1>{product.data.name}</h1>
            <p><StarRating />({product.numOfRew})</p> 
<p><FontAwesomeIcon icon={faCoins} /> {product.data.price} $</p>
<p>Description:</p>
<p>lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla</p>
            </div>
            <div className="product__actions-wrapper">
            <div className="product__actions">
           
        <p>State: {stock ? 'In stock' : 'Out of stock'}</p>
        <label htmlFor="qty">Quantity:</label>
        <select style={{'margin-left':'1rem'}} name="qty" id="qty">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
        </select>
        <button className="product__actions-button"><FontAwesomeIcon icon={faPlusCircle} />  Add to chart</button>
        </div>
        </div>
            </div>
        }
        
        return(
           <div >
      {content}
      </div>
        )
    }

export default Product;