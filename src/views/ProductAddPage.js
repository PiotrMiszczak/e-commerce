import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory, Link} from 'react-router-dom';
import {addProduct} from '..//actions/actions'


function ProductAdd(){

   
    const [name, setName] = useState('')
    const [avatar, setAvatar] = useState('')
    const [price, setPrice] = useState('')
    const [brand, setBrand] = useState('')
    const [category, setCategory] = useState('')
    const [qty, setQty] = useState('')
    const [description, setDescription] = useState('')
    const {productData, loading, error} = useSelector(state=>state.saveProduct)

    const dispatch = useDispatch()
 
    let history = useHistory();
    
    useEffect(()=>{
        if(productData){
        
        alert('Product added')}
    },[productData])

    function handleAdd(e){
        e.preventDefault();
        dispatch(addProduct({name, avatar,price, brand, category, qty, description}))
        
    }

    return(
        
        <div className="form__wrapper">
            <h1>Welcome to MyShop!</h1>
          
            <form onSubmit={handleAdd} className="form">
            <label for="name">Name: </label>
                <input required type="text" id="name" name="name" onChange={(e)=>setName(e.target.value)}></input>
                <label for="avatar">Avatar: </label>
                <input required type="text" id="avatar" name="avatar" onChange={(e)=>setAvatar(e.target.value)}></input>
                <label for="price">Price: </label>
                <input required type="number" id="price" name="price" onChange={(e)=>setPrice(e.target.value)}></input>
                <label for="brand">Brand: </label>
                <input required type="text" id="brand" name="brand" onChange={(e)=>setBrand(e.target.value)}></input>
                <label for="category">Category: </label>
                <input required type="text" id="category" name="category" onChange={(e)=>setCategory(e.target.value)}></input>
                <label for="qty">Quantity: </label>
                <input required type="number" id="qty" name="qty" onChange={(e)=>setQty(e.target.value)}></input>
                <label for="description">Retype description: </label>
                <textarea id="description" name="description" onChange={(e)=>setDescription(e.target.value)}></textarea>
                
                <button type="submit">Add</button>
             
                


            </form>


        </div>
        
    
    )
}

export default ProductAdd;