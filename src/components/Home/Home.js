import './Home.css';
import accademi from '../../image/school.jpg';
import skill from "../../image/skill.jpg";
import admission from "../../image/admision.jpg";
import HomeBanner from '../HomeBanner/HomeBanner';
import Services from '../Services/Services';
import LearnYourSelf from '../LearnYourSelf/LearnYourSelf';
import useData from '../useData/useData';
import Carosoul from '../Carosoul/Carosoul';
import Career from '../Career/Career';


const property = [[accademi, 'ক্লাস ১-১২'], [admission, 'ভর্তি পরীক্ষা'], [skill, 'স্কিল ডেভেলপমেন্ট']];

const Home = () => {
    const [items, setItems] = useData();

    return (
        <div>
            <HomeBanner property={property} />

            <Services items={items} />


            <Carosoul />

            <LearnYourSelf />

        </div>
    );
};

export default Home;