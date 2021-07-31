import React from "react";

import TeamLeft from '../../assets/images/team-left.png';
import TeamRight from '../../assets/images/team-right.png';


function Team() {


    return (
        // Small Team
        <div className="ins-small-team-area">
            <div className="ins-container">
                <div className="ins-small-team-main">
                    <div className="ins-team-left wow fadeIn" data-wow-delay="1.5s" data-wow-duration="1.5s">
                        <img className="img-fluid" src={TeamLeft} alt=""/>
                    </div>

                    <div className="ins-team-contents text-center">
                        <h2 className="ins-common-title wow fadeInUp">Small Team. Global Strategy.</h2>
                        <p className="wow fadeInUp" data-wow-delay="0.5s">Instalogic Marketing is a top-rated,
                            award-winning
                            full-service marketing agency, based in Calgary,
                            Alberta and serving clients across Canada. We are relentless about producing results that
                            meet all
                            of your marketing requirements for less than the cost of hiring an in-house crew. Take
                            advantage of
                            our winning solutions in branding, advertising and custom website design.
                        </p>
                        <a className="text-uppercase ins-g-btn wow fadeInUp" data-wow-delay="1s"
                           href=""><span>talk to the experts</span></a>
                    </div>

                    <div className="ins-team-right wow fadeIn" data-wow-delay="1.5s" data-wow-duration="1.5s">
                        <img className="img-fluid" src={TeamRight} alt=""/>
                    </div>
                </div>
            </div>
        </div>

)
}

export default Team;