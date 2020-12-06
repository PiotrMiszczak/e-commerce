import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import  {signIn} from '../actions/actions';
import {useHistory, Link} from 'react-router-dom'


function SignIn(){

    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    let params = new URLSearchParams(document.location.search);
    const redirect=params.get('redirect')
    const dispatch = useDispatch()
    const {userInfo, loading, error} = useSelector(state=>state.userData)
    let history = useHistory();

    
    useEffect(()=>{ 
        if(userInfo){
            if(redirect){
                history.push(`/${redirect}`)
            }
            else{
                history.push('/')

            }
           
        }}
    ,[userInfo])

    function handleSignin(e){
        e.preventDefault();
        dispatch(signIn(password,email))
    }

    return(
        
        <div className="form__wrapper">
            <h1>Welcome to MyShop!</h1>
            {error ? <h2 style={{'color':'red'}}>Invalid E-mail or password</h2> : null}
            <form onSubmit={handleSignin} className="form">
                <label for="email">E-mail: </label>
                <input type="email" id="email" name="email" onChange={(e)=>setEmail(e.target.value)}></input>
                
                <label for="password">Password: </label>
                <input type="password" id="password" name="password" onChange={(e)=>setPassword(e.target.value)}></input>
                
                <button type="submit">Sign in</button>
                <h2>New here? Click below:</h2>
                <Link to={redirect ? '/register?redirect=shipping' : '/register'}>
                <button>Sign up</button>
                </Link>


            </form>


        </div>
        
    
    )
}

export default SignIn;