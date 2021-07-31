import React, {useState, useEffect} from "react";
import WOW from "wowjs";

function Banner() {
    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
    }, [])

    return (
        <div className="lead wow fadeInUp">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus amet deleniti doloribus, ducimus
            earum eius et ex expedita minima nulla placeat provident qui, quos rem sed sunt tempore. Dolorum eos et
            molestias, nihil nulla provident quasi? Ab, aperiam distinctio earum quidem quo repudiandae voluptatem?
            Ad aperiam commodi, consequuntur dolores ipsa itaque nam recusandae repellat sunt voluptatum? Adipisci,
            ducimus enim esse facere labore laborum, nesciunt quaerat quia repellat suscipit tenetur unde vitae
            voluptatum? Animi consequuntur excepturi impedit sapiente voluptatum? Ab alias autem blanditiis debitis
            deleniti, deserunt dolor doloribus eligendi esse eum explicabo id natus numquam praesentium provident
            quo reiciendis reprehenderit.
        </div>
    )

}

export default Banner;