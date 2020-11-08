import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import { faBars, faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useTransition, animated} from 'react-spring';

function Navigation(){

    const [showMenu, setShowMenu] = useState(false);
   const cart = useSelector(state => state.cart);
const items = cart.cartItems
    const transitions = useTransition(showMenu, null, {
        from: { transform: 'translateX(100%)' },
        enter: {transform: 'translateX(0%)' },
        leave: {transform: 'translateX(100%)'},
        })
    
   

    return(
        <div>

    
<button className="navigation__button" onClick={()=>setShowMenu(!showMenu)}>
<FontAwesomeIcon icon={faBars} />
    </button>
    <Link to={'/cart'}>
    <button className="navigation__button">
    <FontAwesomeIcon icon={faShoppingCart} />
    {items.length ? <span className="navigation__button-cartitems">{items.length}</span> : null}
    </button>
    </Link>
    { transitions.map(({ item, key, props }) =>
item && <animated.div key={key} style={props} className="navigation__menu">
    <div className="navigation__menu-header">
        <h1 style={{'marginLeft':'1rem'}}>Navigation</h1>
         <button className="navigation__button" onClick={()=>setShowMenu(!showMenu)}>
 <FontAwesomeIcon icon={faTimes} />
</button> 
</div>
</animated.div>
)}
    </div>
    )
}

export default Navigation;
