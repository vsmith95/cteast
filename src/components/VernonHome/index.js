import React from 'react';

const VernonHome = () => {
    return (
        // Content Section
        <div>
            <div className='sectionTitle vw'>
                <h2>Vernon Office</h2>
            </div>
            <div className='section flex-row'>
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
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2973.0678365273798!2d-72.4955309485824!3d41.82683737912439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e6f7dc31d6c5bd%3A0x731ef15170e16b8e!2s281%20Hartford%20Turnpike%20%23210%2C%20Vernon%2C%20CT%2006066!5e0!3m2!1sen!2sus!4v1659367491764!5m2!1sen!2sus"  
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

export default VernonHome;