import React from 'react';

const Home = () => {
    return (
        // Content Section
        <div>
            <div className='sectionTitle vw'>
                <h2>Why Connecticut East Dental Center?</h2>
            </div>
            <div className='section flex-row'>
                    <div className='contentContainer'>
                        <div>
                            <div className='contentTitle'>
                                <h3>Individualized Dental Care</h3>
                            </div>
                            <div>
                                <p>
                                    We work as a team, dedicated to improving and maintaining your oral health. Whatever your dental needs, you will be in great hands.
                                </p>
                                <p>
                                    You're going to LOVE going to the dentist!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='contentContainer'>
                        <div>
                            <div className='contentTitle'>
                                <h3>Experienced Dental Professionals</h3>
                            </div>
                            <div>
                                <p>
                                    Dr. Khan and his team have the professional experience to realize that there is no such thing as a one-size-fits-all approach to treatment.  
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='contentContainer'>
                        <div>
                            <div className='contentTitle'>
                                <h3>The Latest Treatments</h3>
                            </div>
                            <div>
                                <p>
                                    By using the cutting edge research and tools, we make sure your time with us is as comfortable and stress-free as possible.
                                </p>
                            </div>
                        </div>
                </div>

                {/* About Us Section */}
                <div className='contentContainer'>
                    <div className='contentTitle'>
                        <h2>
                            About Us
                        </h2>
                    </div>
                    <div>
                        <div>
                            <h3>
                                In Vernon
                            </h3>
                        </div>
                        <div>
                            <address>281 Hartford Tpke., Suite 210, Vernon, CT 06066</address>
                            <a href="tel:860-875-5989">860-875-5989</a>
                        </div>
                        <div>
                            <h3>
                                In Willimantic
                            </h3>
                        </div>
                        <div>
                            <address>1548 West Main St., Willimantic, CT 06280</address>
                            <a href="tel:860-423-6400">860-423-6400</a>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3>
                                Hours
                            </h3>
                        </div>
                        <div>
                            <p>Open Monday - Friday, 9am-5pm</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;