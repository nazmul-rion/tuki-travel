import React, { useEffect, useState } from 'react'
import swal from 'sweetalert';
import OrdersApi from '../../hooks/OrdersApi';
import PackagesApi from '../../hooks/PackagesApi';
import useAuth from '../../hooks/useAuth'

const MyOrders = () => {
    const { user } = useAuth();
    const [ord] = OrdersApi();

    const handleDeleteOrder = id => {
        const url = `https://lit-springs-32062.herokuapp.com/allorders/${id}`;


        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount === 1) {
                    swal("Deleted Successfull...", " ", "info");
                }
            });
    }

    return (
        <div>
            <h1 className="text-center mb-5">MY ORders</h1>

            <div className="container mb-5">
                <table class="table table-striped table-bordered table-hover border-dark">
                    <thead>
                        <tr className="text-center">
                            <th scope="col">Package Name</th>
                            <th scope="col">Adults</th>
                            <th scope="col">Childs</th>
                            <th scope="col">Ticket Type</th>
                            <th scope="col">Depature Date</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            ord.filter(order => order.UserId.includes(user.uid)).map(myOrder => (

                                < tr className="text-center" >
                                    <td>{myOrder.packageName}</td>
                                    <td>{myOrder.Adults}</td>
                                    <td>{myOrder.Childs}</td>
                                    <td>{myOrder.TicketType}</td>
                                    <td>{myOrder.DepDate}</td>
                                    <td><button onClick={() => handleDeleteOrder(myOrder._id)} className="btn btn-danger">Delete</button></td>
                                </tr>


                            ))
                        }
                    </tbody>
                </table>
            </div>

        </div >
    )
}

export default MyOrders
