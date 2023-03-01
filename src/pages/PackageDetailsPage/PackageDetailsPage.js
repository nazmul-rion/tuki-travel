import React, { useEffect, useState } from 'react'
import Rating from 'react-rating';
import { useParams } from 'react-router';
import PlaceOrderForm from './PlaceOrderForm';
const PackageDetailsPage = () => {
    // const { _id, img, place_name, price, total_reviews, rating } = singleService;
    const { id } = useParams();
    const [services, setServices] = useState([]);
    const [singleService, setSingleService] = useState({});
    useEffect(() => {
        fetch('https://tuki-travel-nazmul-rion.onrender.com/allpackages')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    useEffect(() => {
        const found = services.find(service => service._id === id)
        setSingleService(found)
    }, [services, id]);


    return (
        <div>

            <div className="card bg-light text-dark mb-1">
                <img height="350" src="https://image.freepik.com/free-vector/time-travel-vector-flyer-with-white-copy-space-sky-with-airplane_134830-1061.jpg" className="card-img" alt="..." />
                <div className="card-img-overlay text-center text-dark">
                    <h1 className="card-title">{singleService?.place_name}</h1>
                </div>
            </div>


            <div className="container my-5">
                <div className="row ">
                    <div className="col-12 col-md-8">
                        <div className=" mb-3">
                            <img src={singleService?.img} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{singleService?.place_name}</h5>
                                <div>
                                    <h3>
                                        <span className="fw-bold text-danger">${singleService?.price} </span><small>/Per Person</small>
                                    </h3>
                                </div>
                                <div>
                                    <Rating
                                        initialRating={singleService?.rating}
                                        emptySymbol="fas fa-star"
                                        fullSymbol="fas text-warning fa-star"
                                        readonly
                                    />
                                    {singleService?.rating} ({singleService?.total_reviews})
                                </div>
                                <div className="fw-bold card-text mt-3">Overview</div>
                                <p className="">{singleService?.description}</p>

                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-4">
                        {
                            singleService?.place_name ? (
                                <div className="card mt-5">
                                    <h3 className="fw-bold text-center my-3">Book This Package</h3>
                                    <PlaceOrderForm
                                        packID={id}
                                        packName={singleService?.place_name}
                                    ></PlaceOrderForm>
                                </div>
                            )
                                : (
                                    <>
                                    </>
                                )

                        }



                    </div>
                </div>
            </div>



        </div>
    )
}

export default PackageDetailsPage
