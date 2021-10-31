import React from 'react'
import swal from 'sweetalert';
import OrdersApi from '../../hooks/OrdersApi';

const ManageAllOrder = () => {
    const [ord, setord] = OrdersApi();

    const handleDeleteOrder = id => {
        const url = `https://lit-springs-32062.herokuapp.com/allorders/${id}`;

        swal("Are you sure you want Delete this Order?", {
            buttons: ["No", "Yes"],
        })
            .then((value) => {
                if (value) {
                    fetch(url, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount) {
                                swal("Deleted Successfull...", {
                                    icon: "success",
                                });
                                const remainingOrder = ord.filter(myOrder => myOrder._id !== id);
                                setord(remainingOrder);
                            }
                        });
                }
            });

    }

    const handleUpdateOrder = id => {
        const url = `https://lit-springs-32062.herokuapp.com/allorders/${id}`;

        swal("Are you sure you want Confirm this Order?", {
            buttons: ["No", "Yes"],
        })
            .then((value) => {
                if (value) {
                    fetch(url, {
                        method: "PUT"
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.modifiedCount > 0) {
                                swal("Order Confirmed...", {
                                    icon: "success",
                                });
                            }
                        });
                }
            });
    }

    return (
        <div>
            <h1 className="text-center mb-5">Manage All ORders</h1>

            <div className="container mb-5">
                <div className="table-responsive">
                    <table className="table table-striped table-bordered table-hover border-dark">
                        <thead>
                            <tr className="text-center">
                                <th scope="col">Package Name</th>
                                <th scope="col">Adults</th>
                                <th scope="col">Childs</th>
                                <th scope="col">Ticket Type</th>
                                <th scope="col">Depature Date</th>
                                <th scope="col">Status</th>
                                <th scope="col">Confirm Order</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                ord.map(myOrder => (

                                    < tr key={myOrder._id} className="text-center" >
                                        <td>{myOrder.packageName}</td>
                                        <td>{myOrder.Adults}</td>
                                        <td>{myOrder.Childs}</td>
                                        <td>{myOrder.TicketType}</td>
                                        <td>{myOrder.DepDate}</td>
                                        <td>{myOrder.Status}</td>
                                        <td>  <button onClick={() => handleUpdateOrder(myOrder._id)} className="btn btn-info">To Confirm <i className="fas fa-check-circle"></i></button>
                                        </td>

                                        <td><button onClick={() => handleDeleteOrder(myOrder._id)} className="btn btn-danger">Delete</button></td>
                                    </tr>


                                ))
                            }
                        </tbody>
                    </table>
                </div>

            </div>

        </div >
    )
}

export default ManageAllOrder
