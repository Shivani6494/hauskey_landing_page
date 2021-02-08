import React from 'react'
import '../App.css';
import Card from './Card';
import ContactContainer from './ContactContainer';
import Header from './Header';
import AboutHaüskey from './AboutHaüskey';
import SearchLogo from '../assests/Images/Search.png';
import MapLogo from '../assests/Images/map.jpg';
import FeaturedProjects from '../components/FeaturedProjects';
import MobImage from '../assests/Images/mob_1.png';
export default function Landing() {
    return (
        <div id='body'>
            <Header/>
            <Card 
                className='section bg-blue search-section search-margin'
                img = {SearchLogo}
                title='About the Company' 
                description='Your Pre-Construction Condo Marketplace. Haüskey provides industry leading commission rebates, 
                while also simplifying the way home buyers and developers buy and sell real estate.'
            />

            <Card 
                className='section'
                img= {MapLogo}
                title='Find Your Location'
                description='Boosting Interactivity with Draw a Search Region Functionality.Improve your experience. Find Your Home with Haüskey.
                 We are here to guide you. Find where you want to live.'
            />
            <FeaturedProjects
            title = 'Featured Projects'
            />
            <AboutHaüskey
            title = 'About Haüskey'
            />
            <Card
                className='section'
                img= {MobImage} 
                width = '400px'
                title='Move to Our App!'
                description='Invest on the go with the Haüskey App for iPhone, Android, and iPad.'
            />
            
            <ContactContainer/>
        </div>
    );
}

