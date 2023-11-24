import React from 'react';
import PetsCategory from './PetsCategory';
import CallToAction from './CallToAction';
import AboutUs from './AboutUs';
import Review from './Review';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* <PetsCategory></PetsCategory> */}
            {/* <CallToAction></CallToAction> */}
            <AboutUs></AboutUs>
            {/* <Review></Review> */}
         </div>
    );
};

export default Home;