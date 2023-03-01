import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';

const AddNewPackage = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        swal("Are you sure you want to insert this package?", {
            buttons: ["No", "Yes"],
        })
            .then((value) => {
                if (value) {
                    axios.post('https://tuki-travel-nazmul-rion.onrender.com/addpackages', data)
                        .then(res => {
                            if (res.data.insertedId) {
                                swal({
                                    title: "Wow",
                                    text: "Place inserted successful",
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
        <div>
            <div className="container card my-5">
                <h1 className="text-center text-highlighted fw-bold my-5">Add a New Package</h1>
                <div className="container">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                            <label>Place Name</label>
                            <input type="text" className="form-control " placeholder="Enter Place Name" {...register("place_name", { required: true })} />
                            {errors.place_name && <span className="text-danger">This field is required!</span>}
                        </div>

                        <div className="mb-3">
                            <label>Country Name</label>
                            <input type="text" className="form-control " placeholder="Enter Country Name" {...register("country", { required: true })} />
                            {errors.country && <span className="text-danger">This field is required!</span>}
                        </div>

                        <div className="mb-3">
                            <label >Travel Cost</label>
                            <input type="number" className="form-control " placeholder="Enter Travel Cost" {...register("price", { required: true })} />
                            {errors.price && <span className="text-danger">This field is required!</span>}
                        </div>

                        <div className="mb-3">
                            <label >Total Reviews</label>
                            <input readOnly value="0" type="number" className="form-control " {...register("total_reviews", { required: true })} />
                            {errors.total_reviews && <span className="text-danger">This field is required!</span>}
                        </div>

                        <div className="mb-3">
                            <label >Rating</label>
                            <input readOnly value="0" type="number" className="form-control" {...register("rating", { required: true })} />
                            {errors.rating && <span className="text-danger">This field is required!</span>}
                        </div>

                        <div className="mb-3">
                            <label >Place Overview</label>
                            <textarea type="text" className="form-control" {...register("description", { required: true })} />
                            {errors.description && <span className="text-danger">This field is required!</span>}
                        </div>

                        <div className="mb-3">
                            <label >Place Photo</label>
                            <input type="text" className="form-control" placeholder="enter image URL" {...register("img")} />
                        </div>


                        <input className="custom-button mb-5" type="submit" />
                    </form>
                </div>
            </div>


        </div>
    )
}

export default AddNewPackage
