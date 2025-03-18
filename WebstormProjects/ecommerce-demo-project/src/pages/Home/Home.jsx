import React from 'react';
import Hero from '../../components/sections/HeroSection/HeroSection';
import FeaturedProducts from '../../components/sections/FeaturedProducts/FeaturedProducts';
import Categories from '../../components/sections/CategoriesShowcase/CategoriesShowcase';
import SpecialOffers from '../../components/sections/SpecialOffers/SpecialOffers';
import Newsletter from '../../components/sections/Newsletter/Newsletter';
import styles from './Home.module.css';

const Home = () => {
    return (
        <main className={styles.home}>
            <Hero />
            <Categories />
            <FeaturedProducts />
            <SpecialOffers />
            <Newsletter />
        </main>
    );
};

export default Home; 