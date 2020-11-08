import React, {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom'
import StarRating from '../components/StarRating'
import { faCoins, faPlusCircle} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useSelector, useDispatch} from 'react-redux';
import { getRequestItem } from '../actions/actions'


function Product(props){
    const {id} = useParams()
    const [qty, setQty] = useState(1)
    const product = useSelector(state => state.product)
    const {data, loading, error} = product;
    const dispatch = useDispatch();
    
    
    /*const [product, setProduct] = useState({
        loading:true,
        data:null,
        error:false,
        numOfRew:0,
        
    })*/



    const stock = true; // TEMPORARY
    useEffect(()=>{

        dispatch(getRequestItem(id))
        /*axios.get(`https://5f799e65e402340016f932a1.mockapi.io/commerce/${id}`)
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
    }))*/
    }
        
        
        ,[])

        let content = null;
       
       
        if(loading){
            content = <div className="loader"></div>
        }
        if(error){
            content = <h1>ERROR occured, check your internet</h1>
        }
        if(data){
            content = 
            <div className="product__page">
            <img className="product__page-image" src={data.avatar}></img>
            <div className="product__info">
                <h1>{data.name}</h1>
            <p><StarRating /></p> 
<p><FontAwesomeIcon icon={faCoins} /> {data.price} $</p>
<p>Description:</p>
<p>lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla</p>
            </div>
            <div className="product__actions-wrapper">
            <div className="product__actions">
        
        <p>State: {data.qty<1 ? 'Out of stock' : 'In stock'}</p>
        
        <label htmlFor="qty">Quantity:</label>
        
        <select style={{'margin-left':'1rem'}} name="qty" id="qty" value={qty} onChange={(e)=>setQty(e.target.value)}>
            {Array(data.qty).fill(null).map((x, index) => {
                return <option key={index+1} value={index+1}>{index+1}</option>
            })}
        </select>
       
        <Link to={`/cart/${id}?qty=${qty}`}><button disabled={data.qty>0 ? false : true} className="product__actions-button"><FontAwesomeIcon icon={faPlusCircle} />  Add to chart</button></Link>
        
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