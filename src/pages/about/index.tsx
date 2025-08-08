import React from 'react';
import Hero from '../../components/hero.tsx';
import Explore from '../../components/explore.tsx';
import Comunity from '../../components/comunity.tsx';
import About from '../../components/about.tsx';
import Footer from '../../components/footer.tsx';
import Nav from '../../components/nav.tsx';

const index = () => {
    return (
        <>
            <div>
                <Nav />
                <Hero />
                <Explore />
                <Comunity />
                <About />
                <Footer />
            </div>
        </>
    );
};

export default index;
