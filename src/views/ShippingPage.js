import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory, Link} from 'react-router-dom';
import {saveShipping} from '../actions/actions'
import ProgressBar from '../components/ProgressBar'


function ShippingPage(props){

    const [adress, setAdress] = useState('')
    const [postalCode, setCode] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const dispatch = useDispatch()
    let history = useHistory();
  
  

    function handleShipping(e){
        e.preventDefault();
        dispatch(saveShipping({adress,postalCode,city,country}))     
        history.push('/payment')   
    }

    return(
        <div>
        <ProgressBar step1 step2 />
        <div className="form__wrapper">
            <h1>Shipping info</h1>
            <form onSubmit={handleShipping} className="form">
            <label for="adress">Adress: </label>
                <input required type="text" id="adress" name="adress" onChange={(e)=>setAdress(e.target.value)}></input>
                <label for="postalCode">Postal Code: </label>
                <input required type="text" id="postalCode" name="postalCode" onChange={(e)=>setCode(e.target.value)}></input>
                <label for="city">City: </label>
                <input required type="text" id="city" name="city" onChange={(e)=>setCity(e.target.value)}></input>
                <label for="country">Retype password: </label>
                <input required type="text" id="country" name="country" onChange={(e)=>setCountry(e.target.value)}></input>
                
                <button type="submit">Next</button>



            </form>


        </div>
        </div>
        
    
    )
}

export default ShippingPage;