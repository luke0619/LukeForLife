import React from "react";

import Hero from "../../shared/components/UIElements/Hero";
import Gallery from "../components/Gallery";

function Home() {
    return (
        <React.Fragment>
            <Hero />
            <Gallery />
        </React.Fragment>
    )
}

export default Home;