import axios from 'axios';
import React from 'react'
import { useForm } from "react-hook-form";
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth';
const PlaceOrderForm = (props) => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        swal("Are you sure you want book this package?", {
            buttons: ["No", "Yes"],
        })
            .then((value) => {
                if (value) {
                    axios.post('https://lit-springs-32062.herokuapp.com/addorder', data)
                        .then(res => {
                            if (res.data.insertedId) {
                                swal({
                                    title: "Thank You",
                                    text: "Your order is submitted",
                                    icon: "success",
                                    button: "Done",
                                });
                                reset();
                            }
                            else {
                                swal("Sorry!", "Some Error occure", "error");
                            }
                        });
                }
            });

    }
    return (
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input hidden value={props.packID} {...register("packageID", { required: true })} />
                <input hidden value="Pending" {...register("Status", { required: true })} />
                <input hidden value={user.uid}  {...register("UserId", { required: true })} />
                <label>Full Name</label>
                <input readOnly value={user.displayName} className="form-control mb-3" placeholder="Enter your Full Name" {...register("FullName", { required: true })} />
                <label>Email Address</label>
                <input readOnly value={user.email} className="form-control mb-3" placeholder="Enter your Email Address" {...register("EmailAdress", { required: true })} />
                <div className="row mb-3">
                    <div className="col">
                        <label>Adults</label>
                        <select className="form-control" {...register("Adults")}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                    <div className="col">
                        <label>Childs</label>
                        <select className="form-control" {...register("Childs")}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>

                </div>

                <div className="row mb-3">
                    <div className="col-12 col-md-6">
                        <label>Ticket Types</label>
                        <select className="form-control" {...register("TicketType")}>
                            <option value="Business">Business</option>
                            <option value="Economy">Economy</option>
                        </select>
                    </div>
                    <div className="col-12 col-md-6">
                        <label>Depture Date</label>
                        <input type="date" className="form-control mb-3" {...register("DepDate", { required: true })} />
                    </div>
                </div>
                <textarea className="form-control mb-3" placeholder="Additional Message" {...register("Message")} />
                <input className="custom-button mb-5" type="submit" />
            </form>
        </div>
    )
}

export default PlaceOrderForm
