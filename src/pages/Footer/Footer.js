import React from 'react';
import { Link } from 'react-router-dom';
import footerLogo from '../../images/favicon.ico'

const Footer = () => {
    return (
        <footer className="text-white bg-custom2">
            <div className="row mx-5 py-5">
                <div className="col-12 col-md-3 ">
                    <div className="d-flex align-items-center flex-column flex-md-row mb-5">
                        <img width="50" height="50" src={footerLogo} alt="brand name" className="img-fluid" />
                        <h6><Link className="text-decoration-none text-white fw-bold ms-3" to="/">Travel Mania</Link></h6>
                    </div>
                    <p>
                        Travel changes you. As you move through this life and this world, you change things slightly, you leave marks behind, however small.
                    </p>
                </div>

                <div className="col-12 col-md-3 ">
                    <h4 className="underline">Travel Destination</h4>
                    <p>Tour to Glimpses of Russia</p>
                    <p>Tour to Glimpses of Switzerland</p>
                    <p>Tour to Greece </p>
                    <p>Tour to Spain</p>
                </div>

                <div className="col-12 col-md-3 ">
                    <h4 className="underline">Help & Support</h4>
                    <p>Live Chat</p>
                    <p>Privacy Policy</p>
                    <p>Faqs</p>
                </div>

                <div className="col-12 col-md-3">
                    <h2 className="underline">Contacts</h2>
                    <h6>
                        <i className="fas fa-map-marker-alt"></i> Chattogram Bandar, Port Colony Rd, Chattogram
                    </h6>
                    <h6>
                        <i className="fas fa-phone-alt"></i> +88 01611269298
                    </h6>
                    <h6>
                        <i className="fas fa-paper-plane"></i> travelmania@gmail.com
                    </h6>
                    <div className="mt-3 fw-bold fs-3 icon-color">
                        <a
                            href="https://www.facebook.com/nazmulrion1/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-facebook-square me-3 text-white"></i>
                        </a>
                        <a
                            href="https://twitter.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-twitter me-3 text-white"></i>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/nazmul-rion/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-linkedin me-3 text-white"></i>
                        </a>
                        <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-instagram-square text-white"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
