import React from "react";

import IntroOne from "../../assets/images/intro-one.jpg"
import IntroTwo from "../../assets/images/intro-two.jpg"
import IntroThree from "../../assets/images/intro-three.jpg"

function Intro(){
    return(

        <div className="ins-intro-area">
            <div className="container">

                <div className="ins-main-intro-header text-center">
                    <h1 className="ins-common-title wow fadeInUp">Professional. Competitive. Experienced.</h1>
                    <p className="wow fadeInUp" data-wow-delay="0.5s">At Instalogic Marketing, nothing is more important
                        to us than
                        ensuring your business success and
                        overall happiness through our award-winning, industry-leading, client-focused methods.
                    </p>
                </div>


                <div className="ins-intro-main">


                    <div className="ins-intro-single">
                        <img className="img-fluid" src={IntroOne} alt=""/>
                            <div className="ins-intro-meta text-center">
                                <h2>Branding & Strategy</h2>
                                <ul>
                                    <li>Brand Strategy & Planning</li>
                                    <li>Market Research & Analytics</li>
                                    <li>Consumer Journey Mapping</li>
                                    <li>Naming & Messaging</li>
                                </ul>
                                <a className="ins-g-btn text-uppercase text-center" href=""><span>learn more</span></a>
                            </div>
                    </div>

                    <div className="ins-intro-single">
                        <img className="img-fluid" src={IntroTwo} alt=""/>
                            <div className="ins-intro-meta text-center">
                                <h2>Leads & Marketing</h2>
                                <ul>
                                    <li>Search Engine Optimization</li>
                                    <li>PPC Paid Advertising</li>
                                    <li>Social Media Marketing</li>
                                    <li>Blog & Content Marketing</li>
                                </ul>
                                <a className="ins-g-btn text-uppercase text-center" href=""><span>learn more</span></a>
                            </div>

                    </div>

                    <div className="ins-intro-single">
                        <img className="img-fluid" src={IntroThree} alt=""/>
                            <div className="ins-intro-meta text-center">
                                <h2>Design & Creative</h2>
                                <ul>
                                    <li>Website Design</li>
                                    <li>E-Commerce</li>
                                    <li>Advertising Campaigns</li>
                                    <li>Custom Development</li>
                                </ul>
                                <a className="ins-g-btn text-uppercase text-center" href=""><span>learn more</span></a>
                            </div>
                    </div>


                </div>
            </div>
        </div>


)
}
export default Intro;