import React, { Fragment } from 'react';
import FirstScreen from './first-screen';
import AboutMe from './about-me';
import Education from './education';
import Boxes from './boxes';
import Gallery from './gallery';
import Blog from './blog';
import StickySlider from './sticky-slider';

const HomePage = () => (
    <Fragment>
        <FirstScreen />
        <AboutMe />
        <div className="educationWrapper">
            <Education />
            <StickySlider />
        </div>
        <Blog />
        <Gallery />
        <Boxes />
    </Fragment>
);

export default HomePage;
