import React from 'react';
import { Image } from 'react-bootstrap';
import image from '../../image/image_bd.png';
import './About.css';

const About = () => {
    return (
        <div className="container">
            <div className="row my-5 p-5 ">
                <div className="col-6 text-justify">
                    <h4>আমাদের পাঠশালা প্ল্যাটফর্ম থেকে ১০ হাজারের বেশী লার্নার প্রফেশনাল স্কিল অর্জন করে ফ্রীল্যান্সিং ক্যারিয়ার ও নিজের অনলাইন বিজনেস সফলভাবে গড়ে তুলছেন। আমাদের ৩০+ অনলাইন কোর্স আপনি বাংলাদেশের যেকোনো প্রান্তে বসে করতে পারবেন, প্রতিটি কোর্সের জন্য আলাদা আলাদা ফেইসবুক গ্রুপে প্রশ্ন করতে পারবেন এবং উক্ত বিষয়ে দক্ষ হয়ে উঠবেন। আর সেই দক্ষতা কাজে লাগিয়ে সহজেই অনলাইন মার্কেটপ্লেস থেকে উপার্জন শুরু করতে পারবেন। <br /> <br /> যেকোনো প্রয়োজনে কল করুন <br />
                        ০১৭৫৪-০৬৩৭১২ 🙂</h4>
                </div>
                <div className="col-6">
                    <Image src={image}></Image>
                </div>
            </div>
        </div>
    );
};

export default About;