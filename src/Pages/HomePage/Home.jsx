import React from 'react';
import PetsCategory from './PetsCategory';
import CallToAction from './CallToAction';
import AboutUs from './AboutUs';
import Review from './Review';
import Banner from './Banner/Banner';
import ContactUs from './ContactUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PetsCategory></PetsCategory>
            <AboutUs></AboutUs>
            <CallToAction></CallToAction>
            <ContactUs></ContactUs>
            {/* <Review></Review> */}
         </div>
    );
};

export default Home;