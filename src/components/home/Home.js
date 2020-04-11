import React from 'react';
import Heading from "../layout/Heading";
import Paragraph from "../layout/Paragraph";
import Packages from "../packages/Packages";
import Slider from "../slider/Slider";

function Home() {
    return (
        <>
            <Slider />
            <Heading title="Welcome to January Island Escapes" />
            <Paragraph text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." />
            <Packages />
        </>
    )
}

export default Home
