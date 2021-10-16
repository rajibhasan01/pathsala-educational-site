import React from 'react';
import './Footer.css';
import logo from '../../last_logo.png';
import payWith from '../../image/pay_with.png';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <section className="footer-content">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-4 bg-transparent">

                        <div className="card bg-transparent border border-0 pt-5" style={{ width: "18rem" }}>
                            <img src={logo} className="card-img-top w-50" alt="..." />
                            <div className="card-body text-start ps-0">
                                <h5 className="card-title text-light">অনলাইন পাঠশালা<div className="spinner-grow indicator text-color" role="status">
                                    <span className="visually-hidden"></span>
                                </div></h5>
                                <p className="card-text text-secondary">সমস্যার ক্ষেত্রে: ০১৭৫৪-০৬৩৭১২  (সকাল ১০টা - রাত ১০টা) <br /> অথবা মেসেজ করুন PSHelp to ২৬৯৬৯ (২৪ x ৭)</p>
                                <Link to="/about" className="text-decoration-none" id="bttnn">About us</Link>
                            </div>
                        </div>


                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-8 email-box ps-lg-5">
                        <p className="text-secondary text-start mt-md-5">সর্বশেষ রিলিজ এবং আরো খবর পেতে সাইন আপ করুন ...</p>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control bg-transparent border-top border-start border-bottom " placeholder="তোমার ইমেইল টাইপ করো" aria-label="Recipient's username" aria-describedby="button-addons" />
                            <button className="btn btn-outline-secondary border" type="button" id="button-addons"> <div><i className="far fa-envelope"></i></div></button>
                        </div>

                        <div className="social-media-icon">
                            <i className="fab fa-facebook-square ic"></i>
                            <i className="fab fa-twitter ic"></i>
                            <i className="fas fa-share-square ic"></i>
                            <i className="fab fa-google-plus-g ic"></i>
                            <i className="fab fa-instalod ic"></i>
                            <i className="fab fa-tumblr-square ic"></i>

                        </div>
                        <Image src={payWith} className="payWith mt-2 mt-md-0 ms-md-auto me-md-0" />

                    </div>
                </div>
                <hr className="text-light" />
                <div className="footer-text text-secondary pb-5">
                    <p>স্বত্ব © ২০২১ - ২০২৫ পাঠশালা কতৃক সর্বস্বত্ব সংরক্ষিত</p>
                    <p>Privacy policy | Terms and conditions</p>
                </div>
            </div>

        </section>

    );
};

export default Footer;