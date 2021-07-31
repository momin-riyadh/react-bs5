import React from "react";
// Images
import IntroBG from '../../assets/images/intro-bg2.gif';

function Slider() {

    return (

        // Slider/Video Parts
        <div className="ins-main-slider-area">
            <div className="ins-main-slider text-center">

                <div className="ins-main-slider-images">
                    {/*<img class="img-fluid" src="assets/img/slider-main.png" alt="">*/}
                    <img src={IntroBG} alt="" className="img-fluid"/>

                </div>
            </div>
        </div>


    )
}

export default Slider;