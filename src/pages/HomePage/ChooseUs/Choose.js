import React from 'react';
const Choose = () => {
    return (
        <div className="container">
            <div className="text-center my-5">
                <h2 className="text-highlighted">
                    Why you should choose us.</h2>
                <h4>Our promises</h4>
            </div>
            <div className="row row-cols-1 row-cols-lg-3 ">
                <div className="card mb-3 shadow">
                    <div className="row g-0 align-items-center justify-content-center">
                        <div className="col-lg-2 text-center">
                            <i className="text-highlighted fs-1 fas fa-globe-europe"></i>
                        </div>
                        <div className="col-md-10">
                            <div className="card-body fcolor">
                                <h5 className="card-title">
                                    Honesty & transparency</h5>
                                <p className="card-text text-secondary">Collaboration is a key part of the success of our organization, executed through a clearly defined vision and mission and based on transparency and constant communication.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3 shadow">
                    <div className="row g-0 align-items-center justify-content-center">
                        <div className="col-lg-2 text-center">
                            <i className="fas fa-search-dollar text-highlighted fs-1"></i>
                        </div>
                        <div className="col-md-10">
                            <div className="card-body fcolor">
                                <h5 className="card-title">
                                    Extra Discount</h5>
                                <p className="card-text text-secondary">We have extra discount offer for 2nd time appointment. Even sometimeswe provide some coupon code for avail discount on online payment</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3 shadow ">
                    <div className="row g-0 align-items-center justify-content-center">
                        <div className="col-lg-2 text-center">
                            <i className="fas fa-info-circle text-highlighted fs-1"></i>
                        </div>
                        <div className="col-md-10">
                            <div className="card-body fcolor">
                                <h5 className="card-title">
                                    24/7 Support</h5>
                                <p className="card-text text-secondary">Our online help service are always 24h active. You can contact with us any time. We are here to serve you any time.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Choose;