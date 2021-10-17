import React from 'react';
import { Image } from 'react-bootstrap';
import image from '../../image/image_bd.png';
import image2 from '../../image/about.png';
import './About.css';
import myImage from '../../image/my-bg-rajib.png';

const About = () => {
    return (
        <div className="container">
            <div className="text-center mt-5">
                <h2 className="text-secondary fw-bold py-3">আমাদের <span className="text-danger">পাঠশালা সম্পর্কে</span></h2>
                <p>আমরা দক্ষ হতে পারি বা না পারি, আমাদের উদ্দেশ্য হচ্ছে যারা সিরিয়াসলি দক্ষ হতে চায় তাদের হেল্প করা। <br /> তাদের লার্নিং প্রসেসকে এঞ্জয়েবল এবং এফেক্টিভ করে তোলা। এই প্রচেষ্টায় আমরা নিত্য নতুন জিনিস শিখছি, চেষ্টা করছি।</p>
            </div>

            <div className="row my-5 px-md-5 aboutPage">
                <div className="col-md-6 px-5 text-justify">
                    <h5 className="text-secondary my-md-5">আমাদের পাঠশালা প্ল্যাটফর্ম থেকে ১০ হাজারের বেশী লার্নার প্রফেশনাল স্কিল অর্জন করে ফ্রীল্যান্সিং ক্যারিয়ার ও নিজের অনলাইন বিজনেস সফলভাবে গড়ে তুলছেন। আমাদের ৩০+ অনলাইন কোর্স আপনি বাংলাদেশের যেকোনো প্রান্তে বসে করতে পারবেন, প্রতিটি কোর্সের জন্য আলাদা আলাদা ফেইসবুক গ্রুপে প্রশ্ন করতে পারবেন এবং উক্ত বিষয়ে দক্ষ হয়ে উঠবেন। আর সেই দক্ষতা কাজে লাগিয়ে সহজেই অনলাইন মার্কেটপ্লেস থেকে উপার্জন শুরু করতে পারবেন। <br /> <br /> যেকোনো প্রয়োজনে কল করুন <br />
                        ০১৭৫৪-০৬৩৭১২ 🙂</h5>
                </div>
                <div className="col-md-6 pt-5 pb-3 mx-auto">
                    <Image className="w-100" src={image}></Image>
                </div>
            </div>

            <div className="row my-5 px-md-5">

                <div className="col-md-6  py-5 mx-auto text-center">
                    <Image className="w-75" src={image2}></Image>
                </div>

                <div className="col-md-6 px-5 text-justify">
                    <h5 className="text-secondary my-md-5 fw-normal">More than 10,000 learners are successfully building their freelance career and own online business by acquiring professional skills from our Pathshala platform. Our 30+ online courses you can sit in any part of Bangladesh, ask questions in a separate Facebook group for each course and become proficient in the subject. And you can easily start earning from the online marketplace by using that skill. <br /> <br /> If you have any inquiries you may call <br />
                        01754-063712 🙂</h5>
                </div>
            </div>

            <div className="text-center mt-3">
                <h2 className="text-secondary fw-bold pb-5">পরিচিতি</h2>
                <Image src={myImage}></Image>
                <h4 className="text-info fw-bold pt-3 pb-1">মো: রাজিব হাসান </h4>
                <p>সফ্টওয়্যার ইঞ্জিনিয়ার</p>
                <p>আমরা দক্ষ হতে পারি বা না পারি, আমাদের উদ্দেশ্য হচ্ছে যারা সিরিয়াসলি দক্ষ হতে চায় তাদের হেল্প করা। <br /> তাদের লার্নিং প্রসেসকে এঞ্জয়েবল এবং এফেক্টিভ করে তোলা। এই প্রচেষ্টায় আমরা নিত্য নতুন জিনিস শিখছি, চেষ্টা করছি।</p>
            </div>
        </div>
    );
};

export default About;