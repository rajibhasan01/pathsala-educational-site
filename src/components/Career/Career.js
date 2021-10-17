import React from 'react';
import laptop from '../../image/man.png';
import './Career.css';

const Career = () => {
    return (
        <div className=" py-5">
            <div className="container">
                <h2 className="text-center mb-5 fw-bold"><span className="text-danger">LET’S</span> GET STARTED</h2>
                <div className="row">
                    <div className="col-lg-6 my-5 p-5 text-justify">
                        <h3 className="fw-bold mt-3"><span className="text-danger">দক্ষতা অর্জন করার </span>এখনই সময়</h3>
                        <p className="mb-5">পছন্দের অনলাইন সাবস্ক্রাইব করে আপনার সময় ও সুযোগ অনুযায়ী দক্ষতা অর্জন করুন</p>
                        <p>“শিক্ষা আমাদের নিজস্ব অজ্ঞতার একটি প্রগতিশীল আবিষ্কার” </p>
                        <br />

                        <p className="fs-5">শিক্ষা <span className="text-muted fs-6 fw-normal">  জীবনের অন্যতম শক্তিশালী বিষয়। শিক্ষা কেবল শিক্ষা দেয় না, একজন ব্যক্তিকে খুব বুদ্ধিমান এবং উন্নততর মানুষ হিসাবে গড়ে তুলতে সহায়তা করে। শিক্ষা এমন এক প্ল্যাটফর্ম যা সমস্ত প্রতিবন্ধকতাগুলি পরাস্ত করার ক্ষমতা রাখে। কথিত আছে যে শিক্ষা জীবনের প্রস্তুতি নয়, শিক্ষাই জীবন। অতএব, উপযুক্ত শিক্ষা অর্জন করা অত্যন্ত গুরুত্বপূর্ণ | এখানে আমরা শিক্ষার ক্ষেত্রে 20 টি মূল্যবান প্রতিশ্রুতি ভাগ করছি যা সবাইকে শিক্ষার দিকে উদ্বুদ্ধ করবে।</span></p>

                        <button id="NextBtn" className="mx-auto mt-3">START WITH A FREE ASSESSMENT <i className="fas fa-arrow-circle-right"></i></button>




                    </div>
                    <div className="col-lg-6 text-end my-5">
                        <img src={laptop} className="man-with-laptop" alt="image" />

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Career;