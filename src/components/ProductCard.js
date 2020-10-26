import React , {useState} from 'react';

import { faCoins, faPlusCircle} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useTransition, animated} from 'react-spring';
import {Link} from 'react-router-dom'

function ProductCard(props){

    const [hover, setHover] = useState(false)
    const transitions = useTransition(hover, null, {
        from: { opacity:0 },
        enter: {opacity:1 },
        leave: {opacity:0},
        })
    
    const mask = transitions.map(({ item, key, props }) =>
    item && <animated.div key={key} style={props} className="main__product-mask"></animated.div>
    )
    return(
        <div onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}} className="main__product">
      <Link to={`/products/${props.id}`}>{mask}</Link>
        <img alt='bird' src={props.image}></img>
        <div className="main__product-data">
        <p>{props.name}</p>
        <p><FontAwesomeIcon icon={faCoins} /> {props.price}$</p>
        <button className="main__product-button"><FontAwesomeIcon icon={faPlusCircle} />  Add to chart</button>
        </div>
    </div>
    )
}

export default ProductCard