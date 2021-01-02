import {Link} from 'react-router-dom'
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { faCoins, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getMyOrders} from "../actions/actions";

function MyOrders(){

const {orders, loading, error} = useSelector(state=>state.myOrders)
const dispatch = useDispatch()
useEffect(()=>{
    dispatch(getMyOrders())
},[])
    return(
        <main className="main main-myorders">
             {loading ? <div className="loader"></div> : orders ?
 <table className="admin__table">
            <thead>
                <tr>
                    <th>Order ID</th>
                    <th>Order price($)</th>
                    <th>Order payment status</th>
                    <th>Order delivery status</th>
                    <th>Details</th>
                </tr>
            </thead>
            <tbody>
                {orders.map(order=>{
                    return(
                        <tr>
                            <td>{order._id}</td>
                            <td>{order.totalPrice}</td>
                            <td>{!order.isPaid ? 'Not paid':`Paid at ${order.paidAt.slice(0,10)}`}</td>
                            <td>{!order.isDelivered ? 'Not delivered' : 'Delivered'}</td>
                            <td><Link to={`/orders/${order._id}`}>See details</Link></td>
                           
                        </tr>

                    )
                })}
            </tbody>
            </table> : <h1>Looks like you do not have any orders</h1>}
        </main>
    )
}

export default MyOrders