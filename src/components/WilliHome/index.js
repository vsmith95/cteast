import React from 'react';
import Contact from '../Contact';

const WilliHome = () => {
    return (
        // Content Section
        <div>
            <div className='sectionTitle vw'>
                <h2>Willimantic Office</h2>
            </div>
            <div className='section flex-row'>
                <Contact />
                {/* Meet the Team Container */}
                <div className='contentContainer'>
                    <div>
                        <div className='contentTitle'>
                            <h3>Meet The Team</h3>
                        </div>
                        <div>
                            {/* Build Slideshow of the Staff */}
                        </div>
                    </div>
                </div>
                {/* Map Section */}
                <div className='mapContainer'>
                    <div className='contentTitle'>
                        <h3>Where to find us!</h3>
                    </div>
                    <div>
                        <address>1548 West Main St., Willimantic, CT 06280</address>
                        <a href="tel:860-423-6400">860-423-6400</a>
                        <p>Open Monday - Friday, 9am-5pm</p>
                    </div>
                    <div className='aright'>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.070158610632!2d-72.2363443!3d41.71900490000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e663e1e1f1d163%3A0x92c8b96fc277a418!2s1548%20W%20Main%20St%2C%20Willimantic%2C%20CT%2006226!5e0!3m2!1sen!2sus!4v1659373776586!5m2!1sen!2sus" 
                            style={{border:0}}
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade"
                            className='map'>
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WilliHome;
