import React from 'react';
import Hero from '../../components/hero.tsx';
import Explore from '../../components/explore.tsx';
import Comunity from '../../components/comunity.tsx';
const index = () => {
    return (
        <>
            <div>
                <Hero />
                <Explore />
                <Comunity />
            </div>
        </>
    );
};

export default index;
